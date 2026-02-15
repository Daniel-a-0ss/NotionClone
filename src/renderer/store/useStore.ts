import { create } from 'zustand';
import { Page } from '../../shared/types';

interface StoreState {
  pages: Page[];
  currentPageId: string | null;
  content: string;
  isLoading: boolean;
  setPages: (pages: Page[]) => void;
  setCurrentPageId: (id: string | null) => void;
  setContent: (content: string) => void;
  setIsLoading: (loading: boolean) => void;
  addPage: (page: Page) => void;
  removePage: (id: string) => void;
  updatePage: (id: string, updates: Partial<Page>) => void;
}

export const useStore = create<StoreState>((set) => ({
  pages: [],
  currentPageId: null,
  content: '',
  isLoading: false,

  setPages: (pages) => set({ pages }),
  setCurrentPageId: (id) => set({ currentPageId: id }),
  setContent: (content) => set({ content }),
  setIsLoading: (isLoading) => set({ isLoading }),

  addPage: (page) =>
    set((state) => ({
      pages: [page, ...state.pages],
    })),

  removePage: (id) =>
    set((state) => ({
      pages: state.pages.filter((p) => p.id !== id),
    })),

  updatePage: (id, updates) =>
    set((state) => ({
      pages: state.pages.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    })),
}));

