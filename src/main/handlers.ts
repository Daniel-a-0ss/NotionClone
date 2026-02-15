import { ipcMain } from 'electron';
import { db } from './database';
import { Page, IpcResponse } from '../shared/types';
import { createPageLogic, saveDocumentLogic, getAllPagesLogic, getDocumentLogic } from './handlersLogic';

// Handlers para páginas
ipcMain.handle('pages:getAll', async (): Promise<IpcResponse<Page[]>> => {
  try {
    const pages = getAllPagesLogic(db);
    return { success: true, data: pages };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('pages:getChildren', async (_, parentId: string): Promise<IpcResponse<Page[]>> => {
  try {
    const data = db.getData();
    const pages = (data.pages || []).filter((p: Page) => p.parentId === parentId);
    return { success: true, data: pages };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('pages:create', async (_, page: { title: string; icon?: string; parentId?: string }): Promise<IpcResponse<Page>> => {
  try {
    const newPage = await createPageLogic(db, page);
    return { success: true, data: newPage };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('pages:update', async (_, id: string, updates: Partial<Page>): Promise<IpcResponse<Page>> => {
  try {
    const data = db.getData();
    const pageIndex = (data.pages || []).findIndex((p: Page) => p.id === id);

    if (pageIndex === -1) {
      return { success: false, error: 'Page not found' };
    }

    const now = new Date().toISOString();
    data.pages[pageIndex] = {
      ...data.pages[pageIndex],
      ...updates,
      updatedAt: new Date(now),
    };
    db.save();

    return { success: true, data: data.pages[pageIndex] };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('pages:delete', async (_, id: string): Promise<IpcResponse> => {
  try {
    const data = db.getData();
    data.pages = (data.pages || []).filter((p: Page) => p.id !== id);
    db.save();
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

// Handlers para documentos
ipcMain.handle('documents:get', async (_, pageId: string): Promise<IpcResponse<string>> => {
  try {
    const content = getDocumentLogic(db, pageId);
    return { success: true, data: content };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('documents:save', async (_, pageId: string, content: string): Promise<IpcResponse> => {
  try {
    await saveDocumentLogic(db, pageId, content);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('ping', async () => {
  return 'pong';
});

ipcMain.handle('db:export', async (): Promise<IpcResponse<string>> => {
  try {
    const data = db.getData();
    const json = JSON.stringify(data, null, 2);
    return { success: true, data: json };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});

ipcMain.handle('db:import', async (_, jsonString: string): Promise<IpcResponse> => {
  try {
    if (!jsonString || typeof jsonString !== 'string') throw new Error('Invalid input');
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON structure');
    // basic validation
    if (!parsed.pages || !parsed.documents) {
      throw new Error('JSON must contain pages and documents');
    }
    // Overwrite db internal data
    const dataRef = (db as any).getData();
    Object.keys(dataRef).forEach((k) => delete dataRef[k]);
    Object.assign(dataRef, parsed);
    db.save();
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
