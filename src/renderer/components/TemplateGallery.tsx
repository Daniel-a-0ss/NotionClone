import React, { useState, useMemo, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { TEMPLATES, CATEGORIES, TemplateItem } from '../templates/templates';
import TemplatePreviewModal from './TemplatePreviewModal';
import emojiToDataUrl from '../utils/emojiToDataUrl';
import THUMBNAILS from '../assets/thumbnails/thumbnailMap';

interface TemplateGalleryProps {
  onTemplateSelected: (template: TemplateItem) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onTemplateSelected }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);
  const [thumbs, setThumbs] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    // Generate thumbnails for visible templates
    TEMPLATES.forEach((t) => {
      if (!thumbs[t.id]) {
        try {
          if (THUMBNAILS[t.id]) {
            setThumbs((s) => ({ ...s, [t.id]: THUMBNAILS[t.id] }));
          } else {
            const url = emojiToDataUrl(t.emoji, 140);
            setThumbs((s) => ({ ...s, [t.id]: url }));
          }
        } catch (e) {
          // ignore
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((template) => {
      const matchesCategory = !selectedCategory || template.category === selectedCategory;
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset paging when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalItems = filteredTemplates.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const visibleTemplates = filteredTemplates.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Utility: strip HTML and truncate for preview
  const getPreviewText = (html: string, max = 120) => {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length <= max) return text;
    return text.slice(0, max - 3) + '...';
  };

  const handleKeySelect = (e: React.KeyboardEvent, template: TemplateItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPreviewTemplate(template);
    }
  };

  return (
    <div className="template-gallery-container" role="region" aria-label="Galería de plantillas">
      <div className="gallery-header">
        <div className="gallery-header-content">
          <h1>📚 Notion Clone</h1>
          <p>Elige una plantilla para comenzar</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="gallery-search">
        <input
          type="text"
          aria-label="Buscar plantillas"
          placeholder="🔍 Buscar plantillas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Category Filter */}
      <div className="gallery-filters" role="tablist" aria-label="Filtros de categoría">
        <button
          className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
          role="tab"
          aria-selected={!selectedCategory}
        >
          Todas ({TEMPLATES.length})
        </button>
        {CATEGORIES.map((category) => {
          const count = TEMPLATES.filter((t) => t.category === category.id).length;
          return (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              role="tab"
              aria-selected={selectedCategory === category.id}
            >
              {category.emoji} {category.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Templates Grid */}
      <div className="gallery-content">
        {filteredTemplates.length > 0 ? (
          <>
            <div className="templates-gallery-grid">
              {visibleTemplates.map((template) => (
                <div key={template.id}>
                <button
                  className="template-card"
                  onClick={() => setPreviewTemplate(template)}
                  onKeyDown={(e) => handleKeySelect(e, template)}
                  role="button"
                  aria-label={`Abrir plantilla ${template.name}`}
                >
                  {/* Thumbnail */}
                  {thumbs[template.id] ? (
                    <img src={thumbs[template.id]} alt={template.name} style={{ width: '72px', height: '72px', marginBottom: 12, borderRadius: 8 }} />
                  ) : (
                    <div className="template-card-emoji">{template.emoji}</div>
                  )}

                  <h3 className="template-card-name">{template.name}</h3>
                  <p className="template-card-category">
                    {CATEGORIES.find((c) => c.id === template.category)?.name}
                  </p>

                  {/* Short description derived from content */}
                  <div className="template-card-description">{getPreviewText(template.content, 100)}</div>

                  <div className="template-card-preview" aria-hidden>Vista previa</div>
                </button>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="gallery-pagination" aria-label="Paginación de plantillas" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button className="btn-ghost" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} aria-label="Página anterior">◀</button>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNum = i + 1;
                    // show a compact range if too many pages
                    if (totalPages > 9) {
                      if (pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1) {
                        return (
                          <button key={pageNum} className={`page-btn ${currentPage === pageNum ? 'active' : ''}`} onClick={() => setCurrentPage(pageNum)}>
                            {pageNum}
                          </button>
                        );
                      }
                      if (pageNum === 2 && currentPage > 3) return <span key={pageNum}>…</span>;
                      if (pageNum === totalPages - 1 && currentPage < totalPages - 2) return <span key={pageNum}>…</span>;
                      return null;
                    }
                    return (
                      <button key={pageNum} className={`page-btn ${currentPage === pageNum ? 'active' : ''}`} onClick={() => setCurrentPage(pageNum)}>
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button className="btn-ghost" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} aria-label="Página siguiente">▶</button>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ color: '#6b7280' }}>Mostrando {Math.min((currentPage - 1) * pageSize + 1, totalItems)} - {Math.min(currentPage * pageSize, totalItems)} de {totalItems}</div>
                <label htmlFor="pageSizeSelect" style={{ color: '#6b7280' }}>Por página:</label>
                <select id="pageSizeSelect" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}>
                  <option value={6}>6</option>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <div className="gallery-empty">
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h3>No se encontraron plantillas</h3>
            <p>Intenta con otros filtros o palabras clave</p>
          </div>
        )}
      </div>

      {previewTemplate && (
        <TemplatePreviewModal
          template={previewTemplate}
          onClose={() => setPreviewTemplate(null)}
          onUse={() => {
            setPreviewTemplate(null);
            onTemplateSelected(previewTemplate);
          }}
        />
      )}
    </div>
  );
};

export default TemplateGallery;
