import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2>Mis Páginas</h2>
      </header>
      <div className="sidebar-body">
        <ul>
          <li>Bienvenida</li>
          <li>Notas</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

