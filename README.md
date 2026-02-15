# 📝 Notion Clone

> **A minimalist and professional desktop application like Notion**  
> Rich text editor with 16+ predefined templates built with Electron, React and TypeScript.

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.x-brightgreen.svg)
![Status](https://img.shields.io/badge/status-In%20Development-yellow.svg)

**[Español](LEAME.md)** • English

</div>

---

## 🎯 What is Notion Clone?

**Notion Clone** is a modern desktop application that replicates the visual and functional experience of Notion. It allows you to create, edit and organize documents with a powerful WYSIWYG editor, professional templates and an intuitive interface, all 100% local.

Perfect for:
- ✍️ Quick note-taking
- 📊 Managing personal projects
- 💼 Organizing work information
- 🎯 Planning goals and objectives
- 💡 Capturing creative ideas

---

## ✨ Key Features

### 📚 16+ Professional Templates
Carefully designed templates for different needs:

- **Personal:** Quick Note, Personal Diary, My Goals
- **Work:** Project, Task List, Meeting Minutes
- **Finance:** Personal Budget
- **Health:** Fitness Routine
- **Travel:** Travel Plan
- **Creativity:** Brainstorm
- **Productivity:** Habit Tracker
- **Database:** Contact Directory
- **Business:** Client Base
- **Development:** Code Snippets
- **Marketing:** Content Calendar
- **Events:** Event Manager

### 🎨 Minimalist and Beautiful Design
- Clean and professional interface
- Elegant color palette
- Carefully crafted spacing and typography
- Notion-like visual experience

### ✏️ Rich Text Editor (TipTap)
- ✓ Bold, italic, underline
- ✓ Headings (H1, H2, H3)
- ✓ Ordered and unordered lists
- ✓ Blockquotes
- ✓ And more formats

### 💾 Local Storage
- Data saved locally on your machine
- No cloud synchronization
- Privacy guaranteed
- JSON file persistence

### 🏷️ Smart Organization
- 13 categories for classifying documents
- Sidebar with quick navigation
- Efficient search and filtering
- Hierarchical page structure

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Electron** | ^27.0.0 | Desktop framework |
| **React** | ^18.2.0 | User interface |
| **TypeScript** | Latest | Type-safe development |
| **TipTap** | ^2.0.0-beta | Text editor |
| **Zustand** | ^4.4.0 | State management |
| **Webpack** | ^5.0.0 | Bundler |

---

## 📦 Quick Installation

### Requirements
- Node.js >= 16.x
- npm >= 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Daniel-a-0ss/NotionClone.git
cd NotionClone

# Install dependencies
npm install

# Start in development mode
npm run dev
```

### Available Commands

```bash
npm run dev      # Development with hot reload
npm run build    # Build for production
npm start        # Run the application
npm run test     # Run tests
```

---

## 🎬 Getting Started

1. **Create Document:** Click "+ New Page" in the sidebar
2. **Select Template:** Choose from 16+ predefined templates
3. **Edit:** Use the rich text editor
4. **Save:** Changes are saved automatically locally

---

## 📂 Project Structure

```
NotionClone/
├── src/
│   ├── main/                    # Electron (main process)
│   │   ├── index.ts            # Entry point
│   │   ├── database.ts         # Data persistence
│   │   ├── handlers.ts         # IPC handlers
│   │   └── handlersLogic.ts    # Business logic
│   ├── renderer/                # React (renderer process)
│   │   ├── app/App.tsx         # Main component
│   │   ├── components/         # Components
│   │   ├── templates/          # Templates
│   │   ├── store/              # State management
│   │   └── styles/             # CSS
│   └── shared/types.ts         # TypeScript types
├── public/index.html
├── webpack.config.js
├── package.json
└── LEAME.md
│   ├── components/
│   │   ├── Sidebar.tsx       # Navegación de páginas
│   │   ├── EditorPanel.tsx   # Panel editor principal
│   │   ├── RichEditor.tsx    # Editor de texto enriquecido
│   │   └── PageTreeItem.tsx  # Item del árbol
│   ├── store/
│   │   └── useStore.ts       # Estado global (Zustand)
│   └── styles/
│       ├── styles.css        # Estilos globales
│       └── editor.css        # Estilos del editor
├── shared/
│   └── types.ts              # Tipos compartidos
public/
├── index.html                # Template HTML
webpack.config.js             # Configuración Webpack
tsconfig.json                 # Configuración TypeScript
```

## 🎯 Funcionalidades Implementadas

### Base de Datos
- Almacenamiento de páginas (documentos)
- Almacenamiento de contenido enriquecido
- Relaciones padre-hijo entre páginas
- Índices para optimización

### IPC (Electron Bridge)
- `pages:getAll` - Obtener todas las páginas
- `pages:getChildren` - Obtener páginas hijas
- `pages:create` - Crear nueva página
- `pages:update` - Actualizar página
- `pages:delete` - Eliminar página
- `documents:get` - Obtener contenido
- `documents:save` - Guardar contenido (auto-save con debounce)

### UI/UX
- Sidebar con árbol de navegación expandible
- Editor WYSIWYG con toolbar
- Auto-guardado cada 1 segundo
- Selección de página activa
- Indicador de página vacía

## 🛠️ Tecnologías

- **Electron**: Aplicación de escritorio
- **React 18**: UI framework
- **TypeScript**: Type safety
- **Zustand**: State management
- **TipTap**: Editor de texto enriquecido
- **SQLite (better-sqlite3)**: Base de datos local
- **Webpack**: Module bundler
- **Tailwind CSS + Custom CSS**: Estilos

## 🚀 Próximas Características

- [ ] Temas (claro/oscuro)
- [ ] Exportar a PDF
- [ ] Sincronización en la nube
- [ ] Colaboración en tiempo real
- [ ] Plugins y extensiones
- [ ] Búsqueda global
- [ ] Historial de versiones
- [ ] Formato compartido

## 📝 Notas

- La base de datos se guarda en `%APPDATA%/notion-clone/`
- Los cambios se guardan automáticamente
- IPC está protegido con contextIsolation
- Todos los módulos nativos se compilan con Electron

## 📄 Licencia

MIT


