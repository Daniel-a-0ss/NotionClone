import { v4 as uuidv4 } from 'uuid';

type ApiResult<T> = { success: true; data: T } | { success: false; error: string };

// A small localStorage-backed fallback for the web build.
const storage = {
  getPages(): any[] {
    try {
      const raw = localStorage.getItem('notion.pages');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('storage.getPages error', e);
      return [];
    }
  },
  savePages(pages: any[]) {
    try {
      localStorage.setItem('notion.pages', JSON.stringify(pages));
    } catch (e) {
      console.error('storage.savePages error', e);
    }
  },
  getDocument(id: string) {
    try {
      return localStorage.getItem(`notion.doc.${id}`) || '';
    } catch (e) {
      console.error('storage.getDocument error', e);
      return '';
    }
  },
  saveDocument(id: string, content: string) {
    try {
      localStorage.setItem(`notion.doc.${id}`, content);
    } catch (e) {
      console.error('storage.saveDocument error', e);
    }
  },
};

const webApi = {
  async getPages(): Promise<ApiResult<any[]>> {
    const pages = storage.getPages();
    return { success: true, data: pages };
  },

  async createPage(payload: { title: string; icon?: string }): Promise<ApiResult<any>> {
    const pages = storage.getPages();
    const newPage = {
      id: uuidv4(),
      title: payload.title,
      icon: payload.icon || '📝',
      createdAt: new Date().toISOString(),
    };
    pages.push(newPage);
    storage.savePages(pages);
    // empty document created
    storage.saveDocument(newPage.id, '');
    return { success: true, data: newPage };
  },

  async getDocument(id: string): Promise<ApiResult<string>> {
    const doc = storage.getDocument(id);
    return { success: true, data: doc };
  },

  async saveDocument(id: string, content: string): Promise<ApiResult<null>> {
    storage.saveDocument(id, content);
    return { success: true, data: null };
  },

  async deletePage(id: string): Promise<ApiResult<null>> {
    const pages = storage.getPages().filter((p) => p.id !== id);
    storage.savePages(pages);
    try {
      localStorage.removeItem(`notion.doc.${id}`);
    } catch (e) {
      // ignore
    }
    return { success: true, data: null };
  },

  async exportDatabase(): Promise<ApiResult<string>> {
    const pages = storage.getPages();
    const docs = pages.map((p) => ({ id: p.id, content: storage.getDocument(p.id) }));
    const payload = JSON.stringify({ pages, docs }, null, 2);
    return { success: true, data: payload };
  },

  async importDatabase(text: string): Promise<ApiResult<null>> {
    try {
      const parsed = JSON.parse(text);
      if (parsed.pages && Array.isArray(parsed.pages)) {
        storage.savePages(parsed.pages);
        if (parsed.docs && Array.isArray(parsed.docs)) {
          parsed.docs.forEach((d: any) => {
            try {
              localStorage.setItem(`notion.doc.${d.id}`, d.content || '');
            } catch (e) {
              // ignore
            }
          });
        }
        return { success: true, data: null };
      }
      return { success: false, error: 'Invalid import format' };
    } catch (e) {
      return { success: false, error: String(e) };
    }
  },
};

// Exported API that delegates to window.api when available (Electron), otherwise uses webApi.
const api = {
  getPages: async () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.getPages();
    return webApi.getPages();
  },
  createPage: async (payload: { title: string; icon?: string }) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.createPage(payload);
    return webApi.createPage(payload);
  },
  getDocument: async (id: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.getDocument(id);
    return webApi.getDocument(id);
  },
  saveDocument: async (id: string, content: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.saveDocument(id, content);
    return webApi.saveDocument(id, content);
  },
  deletePage: async (id: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.deletePage(id);
    return webApi.deletePage(id);
  },
  exportDatabase: async () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.exportDatabase();
    return webApi.exportDatabase();
  },
  importDatabase: async (text: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).api) return (window as any).api.importDatabase(text);
    return webApi.importDatabase(text);
  },
};

export default api;
