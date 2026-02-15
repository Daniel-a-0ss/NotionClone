import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import RichEditor from './RichEditor';

const EditorPanel: React.FC = () => {
  const currentPageId = useStore((state) => state.currentPageId);
  const content = useStore((state) => state.content);
  const setContent = useStore((state) => state.setContent);
  const pages = useStore((state) => state.pages);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentPage = pages.find((p) => p.id === currentPageId);

  useEffect(() => {
    if (!currentPageId) return;

    // Cargar contenido del documento
    const loadContent = async () => {
      try {
        const result = await window.api.getDocument(currentPageId);
        if (result.success) {
          setContent(result.data || '');
        }
      } catch (error) {
        console.error('Error cargando documento:', error);
      }
    };

    loadContent();
  }, [currentPageId, setContent]);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);

    // Guardar con debounce
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      if (currentPageId) {
        try {
          const result = await window.api.saveDocument(currentPageId, newContent);
          if (!result.success) {
            console.error('Error guardando documento:', result.error);
          }
        } catch (error) {
          console.error('Error guardando documento:', error);
        }
      }
    }, 1000);
  };

  if (!currentPageId) {
    return (
      <div className="editor-panel empty">
        <div className="empty-editor-state">
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>📝</div>
          <h2>Selecciona una página</h2>
          <p>Elige una página del sidebar o crea una nueva para comenzar a escribir</p>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-panel">
      <div className="editor-header">
        <div className="editor-title-section">
          <span className="editor-page-icon">{currentPage?.icon}</span>
          <h1 className="editor-page-title">{currentPage?.title}</h1>
        </div>
      </div>
      <RichEditor content={content} onChange={handleContentChange} />
    </div>
  );
};

export default EditorPanel;

