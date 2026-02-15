import React, { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import PageTreeItem from './PageTreeItem';

interface SidebarProps {
  onNuevaPageClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNuevaPageClick }) => {
  const pages = useStore((state) => state.pages) as any[];
  const currentPageId = useStore((state) => state.currentPageId) as string | null;
  const setPages = useStore((state) => state.setPages) as (pages: any[]) => void;
  const setCurrentPageId = useStore((state) => state.setCurrentPageId) as (id: string | null) => void;
  const removePage = useStore((state) => state.removePage) as (id: string) => void;

  const [themeDark, setThemeDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const load = async () => {
      try {
        const result = await window.api.getPages();
        if (result.success) {
          setPages(result.data || []);
        }
      } catch (error) {
        console.error('Error cargando páginas:', error);
      }
    };
    load();
  }, [setPages]);

  useEffect(() => {
    try {
      if (themeDark) {
        document.body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('theme-dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // ignore
    }
  }, [themeDark]);

  const reloadPages = React.useCallback(async () => {
    try {
      const result = await window.api.getPages();
      if (result.success) {
        setPages(result.data || []);
      }
    } catch (error) {
      console.error('Error cargando páginas:', error);
    }
  }, [setPages]);

  const handleDeletePage = async (id: string) => {
    try {
      const result = await window.api.deletePage(id);
      if (result.success) {
        removePage(id);
        if (currentPageId === id) {
          setCurrentPageId(null);
        }
      }
    } catch (error) {
      console.error('Error eliminando página:', error);
    }
  };

  const handleExport = async () => {
    try {
      const res = await window.api.exportDatabase();
      if (res.success && res.data) {
        const blob = new Blob([res.data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `notion-clone-backup-${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      console.error('Export failed', e);
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleImportClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const res = await window.api.importDatabase(text);
      if (res.success) {
        // reload pages
        reloadPages();
      } else {
        console.error('Import failed', res.error);
      }
    } catch (err) {
      console.error('Import error', err);
    }
  };

  return (
    <div className="sidebar" role="navigation" aria-label="Barra lateral">
      <div className="sidebar-header">
        <h1>📚 Notion Clone</h1>
        <p className="sidebar-subtitle">Tu espacio de trabajo</p>
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '0 16px', alignItems: 'center' }}>
        <button
          className="create-page-btn"
          onClick={onNuevaPageClick}
        >
          + Nueva página
        </button>

        <button
          className="btn-ghost"
          onClick={() => setThemeDark((v) => !v)}
          aria-pressed={themeDark}
          aria-label="Cambiar tema"
          title="Alternar tema claro/oscuro"
        >
          {themeDark ? '🌙' : '☀️'}
        </button>

        <button className="btn-ghost" onClick={handleExport} title="Exportar base de datos">⬇️</button>
        <button className="btn-ghost" onClick={handleImportClick} title="Importar base de datos">⬆️</button>
        <input ref={fileInputRef} type="file" accept="application/json" style={{ display: 'none' }} onChange={handleFileSelected} />
      </div>

      <div className="pages-list">
        {pages.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p className="empty-title">Sin páginas</p>
            <p className="empty-description">Crea una nueva página para comenzar</p>
          </div>
        ) : (
          <>
            <p className="pages-title">PÁGINAS</p>
            {pages.map((page) => (
              <PageTreeItem
                key={page.id}
                page={page}
                onSelect={setCurrentPageId}
                isSelected={currentPageId === page.id}
                onDelete={handleDeletePage}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
