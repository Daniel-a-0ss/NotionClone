// Tipos compartidos entre main y renderer

export interface Document {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  parentId?: string;
}

export interface Page {
  id: string;
  title: string;
  icon?: string;
  parentId?: string;
  children?: Page[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IpcResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

