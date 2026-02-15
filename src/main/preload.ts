import { contextBridge, ipcRenderer } from 'electron';
import { Page, IpcResponse } from '../shared/types';

export const api = {
  // Pages
  getPages: () => ipcRenderer.invoke('pages:getAll'),
  getPageChildren: (parentId: string) => ipcRenderer.invoke('pages:getChildren', parentId),
  createPage: (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) =>
    ipcRenderer.invoke('pages:create', page),
  updatePage: (id: string, updates: Partial<Page>) =>
    ipcRenderer.invoke('pages:update', id, updates),
  deletePage: (id: string) => ipcRenderer.invoke('pages:delete', id),

  // Documents
  getDocument: (pageId: string) => ipcRenderer.invoke('documents:get', pageId),
  saveDocument: (pageId: string, content: string) =>
    ipcRenderer.invoke('documents:save', pageId, content),

  // Database export/import
  exportDatabase: () => ipcRenderer.invoke('db:export'),
  importDatabase: () => ipcRenderer.invoke('db:import'),

  // Utils
  ping: () => ipcRenderer.invoke('ping'),
};

contextBridge.exposeInMainWorld('api', api);

declare global {
  interface Window {
    api: typeof api;
  }
}
