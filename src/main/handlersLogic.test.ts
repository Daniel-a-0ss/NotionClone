import { createPageLogic, saveDocumentLogic, getAllPagesLogic, getDocumentLogic } from './handlersLogic';

// Fake DB implementation
function createFakeDB() {
  let data: any = { pages: [], documents: {} };
  return {
    getData() { return data; },
    save() { /* noop */ },
    _setData(newData: any) { data = newData; }
  };
}

describe('handlersLogic', () => {
  test('createPageLogic should create a page with valid title', async () => {
    const db = createFakeDB();
    const page = await createPageLogic(db as any, { title: 'My Page' });
    expect(page).toHaveProperty('id');
    expect(page.title).toBe('My Page');
    const all = getAllPagesLogic(db as any);
    expect(all.length).toBe(1);
    expect(all[0].id).toBe(page.id);
  });

  test('saveDocumentLogic should save and getDocumentLogic should retrieve', async () => {
    const db = createFakeDB();
    const page = await createPageLogic(db as any, { title: 'Doc Page' });
    await saveDocumentLogic(db as any, page.id, '<h1>Hello</h1>');
    const content = getDocumentLogic(db as any, page.id);
    expect(content).toBe('<h1>Hello</h1>');
  });

  test('createPageLogic should reject invalid title', async () => {
    const db = createFakeDB();
    await expect(createPageLogic(db as any, { title: '   ' })).rejects.toThrow('Invalid page title');
  });
});

