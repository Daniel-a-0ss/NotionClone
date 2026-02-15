import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import Sidebar from '../components/Sidebar';
import EditorPanel from '../components/EditorPanel';
import TemplateGallery from '../components/TemplateGallery';
import TemplateNameModal from '../components/TemplateNameModal';
import { TemplateItem } from '../templates/templates';
import api from '../api';

const App: React.FC = () => {
  const pages = useStore((state) => state.pages);
  const setPages = useStore((state) => state.setPages);
  const setCurrentPageId = useStore((state) => state.setCurrentPageId);
  const addPage = useStore((state) => state.addPage);

  const [showGallery, setShowGallery] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animatingTemplate, setAnimatingTemplate] = useState(false);

  // Cargar páginas al iniciar
  useEffect(() => {
    const loadPages = async () => {
      try {
        const result = await api.getPages();
        if (result.success && result.data && result.data.length > 0) {
          setPages(result.data);
          setShowGallery(false);
        } else {
          setShowGallery(true);
        }
      } catch (error) {
        console.error('Error cargando páginas:', error);
        setShowGallery(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPages();
  }, [setPages]);

  const handleTemplateSelected = (template: TemplateItem) => {
    // Mostrar animación breve y abrir modal de nombre
    setSelectedTemplate(template);
    setAnimatingTemplate(true);
    setTimeout(() => {
      setAnimatingTemplate(false);
      // ahora se muestra TemplateNameModal por la condición below
    }, 300);
  };

  const handleCreatePage = async (pageName: string) => {
    if (!selectedTemplate) return;

      try {
        const result = await api.createPage({
          title: pageName,
          icon: selectedTemplate.emoji,
        });

        if (result.success) {
          // Guardar el contenido de la plantilla
          await api.saveDocument(result.data.id, selectedTemplate.content);

          addPage(result.data);
          setCurrentPageId(result.data.id);
          setSelectedTemplate(null);
          setShowGallery(false);
        }
      } catch (error) {
        console.error('Error creando página:', error);
      }
  };

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner">⏳</div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (showGallery && pages.length === 0) {
    return (
      <>
        <TemplateGallery onTemplateSelected={handleTemplateSelected} />

        {/* TemplateNameModal se muestra tras confirmación y animación si selectedTemplate */}
        {selectedTemplate && !animatingTemplate && (
          <TemplateNameModal
            template={selectedTemplate}
            onConfirm={handleCreatePage}
            onCancel={() => setSelectedTemplate(null)}
          />
        )}
      </>
    );
  }

  return (
    <div className="app-root">
      <Sidebar onNuevaPageClick={() => {
        setShowGallery(true);
      }} />
      <EditorPanel />

      {showGallery && (
        <>
          <div className="gallery-overlay" onClick={() => setShowGallery(false)} />
          <div className="gallery-modal">
            <button className="gallery-modal-close" onClick={() => setShowGallery(false)}>✕</button>
            <TemplateGallery onTemplateSelected={handleTemplateSelected} />
          </div>
        </>
      )}

      {selectedTemplate && !animatingTemplate && (
        <TemplateNameModal
          template={selectedTemplate}
          onConfirm={handleCreatePage}
          onCancel={() => setSelectedTemplate(null)}
        />
      )}

      {/* Animación visual al seleccionar plantilla (overlay con efecto) */}
      {animatingTemplate && (
        <div className="template-anim-overlay">
          <div className="template-anim-card">
            <div style={{ fontSize: 48 }}>{selectedTemplate?.emoji}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>{selectedTemplate?.name}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

