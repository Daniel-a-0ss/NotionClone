import React, { useState } from 'react';
import { Page } from '../../shared/types';

interface PageTreeItemProps {
  page: Page;
  onSelect: (pageId: string) => void;
  isSelected: boolean;
  onDelete: (id: string) => void;
  children?: Page[];
  level?: number;
}

const PageTreeItem: React.FC<PageTreeItemProps> = ({
  page,
  onSelect,
  isSelected,
  onDelete,
  children = [],
  level = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`¿Eliminar "${page.title}"?`)) {
      onDelete(page.id);
    }
  };

  return (
    <div style={{ marginLeft: `${level * 16}px` }} className="page-tree-item">
      <div
        className={`page-item ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(page.id)}
      >
        <span className="page-icon">{page.icon}</span>
        <span className="page-title">{page.title}</span>
        {children.length > 0 && (
          <button
            className="expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        )}
        <button className="delete-btn" onClick={handleDelete} title="Eliminar">
          ✕
        </button>
      </div>
      {isExpanded && children.length > 0 && (
        <div className="children">
          {children.map((child) => (
            <PageTreeItem
              key={child.id}
              page={child}
              onSelect={onSelect}
              isSelected={isSelected}
              onDelete={onDelete}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PageTreeItem;

