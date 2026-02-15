import { v4 as uuidv4 } from 'uuid';
import { Page } from '../shared/types';

export interface SimpleDBLike {
  getData: () => any;
  save: () => void;
}

export async function createPageLogic(db: SimpleDBLike, page: { title: string; icon?: string; parentId?: string }): Promise<Page> {
  if (!page || !page.title || !page.title.trim()) throw new Error('Invalid page title');

  const id = uuidv4();
  const now = new Date().toISOString();
  const newPage: Page = {
    id,
    title: page.title.trim(),
    icon: page.icon || '📄',
    parentId: page.parentId,
    createdAt: new Date(now),
    updatedAt: new Date(now),
  };

  const data = db.getData();
  if (!data.pages) data.pages = [];
  data.pages.push(newPage);
  db.save();

  return newPage;
}

export async function saveDocumentLogic(db: SimpleDBLike, pageId: string, content: string): Promise<void> {
  if (!pageId) throw new Error('Missing pageId');
  const data = db.getData();
  const pages = data.pages || [];
  const found = pages.find((p: Page) => p.id === pageId);
  if (!found) throw new Error('Page not found');
  if (!data.documents) data.documents = {};
  data.documents[pageId] = content || '';
  db.save();
}

export function getAllPagesLogic(db: SimpleDBLike) {
  const data = db.getData();
  return data.pages || [];
}

export function getDocumentLogic(db: SimpleDBLike, pageId: string) {
  const data = db.getData();
  return (data.documents || {})[pageId] || '';
}

