import React, { useState, useEffect, useRef } from 'react';
import { TemplateItem } from '../templates/templates';
import emojiToDataUrl from '../utils/emojiToDataUrl';

interface Props {
  template: TemplateItem;
  onClose: () => void;
  onUse: () => void; // called when user confirms using the template
}

const TemplatePreviewModal: React.FC<Props> = ({ template, onClose, onUse }) => {
  const [isUsing, setIsUsing] = useState(false);
  const [thumb, setThumb] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const url = emojiToDataUrl(template.emoji, 180, '#fff');
    setThumb(url || null);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    // focus the close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 50);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [template, onClose]);

  const handleUse = () => {
    // small animation before confirming
    setIsUsing(true);
    setTimeout(() => {
      onUse();
      setIsUsing(false);
    }, 280);
  };

  return (
    <div className="modal-overlay">
      <div className={`gallery-modal preview-modal ${isUsing ? 'pulse' : ''}`} role="dialog" aria-modal="true" aria-labelledby={`preview-${template.id}`}>
        <button ref={closeBtnRef} className="gallery-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div style={{ display: 'flex', gap: 18, padding: 18, height: '100%' }}>
          <aside style={{ width: 220, flex: '0 0 220px' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {thumb ? <img src={thumb} alt={`${template.name} thumbnail`} style={{ width: 96, height: 96, borderRadius: 12 }} /> : <div style={{ fontSize: 48 }}>{template.emoji}</div>}
              <div>
                <h3 id={`preview-${template.id}`} style={{ margin: 0 }}>{template.name}</h3>
                <div style={{ color: '#666', marginTop: 6 }}>{template.emoji} {template.category}</div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 13, color: '#333', fontWeight: 700 }}>Detalles</div>
              <div style={{ marginTop: 8, color: '#666' }}>
                <div>Autor: {template.author || 'Plantillas Notion Clone'}</div>
                <div>Tags: {template.tags && template.tags.length ? template.tags.join(', ') : '—'}</div>
              </div>
            </div>
          </aside>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="preview-content" style={{ flex: 1, overflow: 'auto', padding: 12, borderRadius: 8, background: 'linear-gradient(180deg, #fff, #fbfbff)' }}>
              <div dangerouslySetInnerHTML={{ __html: template.content }} />
            </div>

            <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
              <button className="modal-btn cancel" onClick={onClose}>Cerrar</button>
              <button className="modal-btn confirm" onClick={handleUse} disabled={isUsing}>
                {isUsing ? 'Usando...' : 'Usar esta plantilla'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;
