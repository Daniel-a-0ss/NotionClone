import React, { useState } from 'react';
import { TemplateItem } from '../templates/templates';

interface TemplateNameModalProps {
  template: TemplateItem;
  onConfirm: (name: string) => void;
  onCancel: () => void;
}

const TemplateNameModal: React.FC<TemplateNameModalProps> = ({ template, onConfirm, onCancel }) => {
  const [pageName, setPageName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pageName.trim()) {
      onConfirm(pageName);
      setPageName('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onCancel}>✕</button>

        <div className="modal-header">
          <div className="modal-emoji">{template.emoji}</div>
          <h2>Crear {template.name}</h2>
          <p className="modal-subtitle">Ingresa un nombre para tu página</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            className="modal-input"
            placeholder={`Ej: Mi ${template.name.toLowerCase()}`}
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            autoFocus
          />

          <div className="modal-actions">
            <button
              type="button"
              className="modal-btn cancel"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="modal-btn confirm"
              disabled={!pageName.trim()}
            >
              Crear Página
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateNameModal;
