import * as fs from 'fs';
import * as path from 'path';
import { app } from 'electron';

const DB_PATH = path.join(app.getPath('userData'), 'notion-clone.json');

// Simple JSON-based database for Electron compatibility
class SimpleDB {
  private data: any = {
    pages: [],
    documents: {}
  };

  constructor() {
    this.load();
  }

  private load() {
    try {
      const dir = path.dirname(DB_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      if (fs.existsSync(DB_PATH)) {
        const content = fs.readFileSync(DB_PATH, 'utf-8');
        this.data = JSON.parse(content);
      }
    } catch (error) {
      console.log('Initializing new database');
    }
  }

  save() {
    try {
      const dir = path.dirname(DB_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DB_PATH, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error('Error saving database:', error);
    }
  }

  getData() {
    return this.data;
  }
}

export const db = new SimpleDB();

export function initializeDatabase() {
  // Initialize with empty data structure if needed
  const data = db.getData();
  if (!data.pages) data.pages = [];
  if (!data.documents) data.documents = {};
  db.save();
}

