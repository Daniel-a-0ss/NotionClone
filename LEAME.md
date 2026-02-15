# 📝 Notion Clone

> **Aplicación de escritorio minimalista y profesional tipo Notion**  
> Editor de texto enriquecido con 16+ plantillas predefinidas construido con Electron, React y TypeScript.

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.x-brightgreen.svg)
![Status](https://img.shields.io/badge/status-En%20Desarrollo-yellow.svg)

[English](README.md) • **Español**

</div>

---

## 🎯 ¿Qué es Notion Clone?

**Notion Clone** es una aplicación de escritorio moderna que replica la experiencia visual y funcional de Notion. Permite crear, editar y organizar documentos con un editor WYSIWYG potente, plantillas profesionales y una interfaz intuitiva, todo 100% local.

Perfecta para:
- ✍️ Tomar notas rápidas
- 📊 Gestionar proyectos personales
- 💼 Organizar información de trabajo
- 🎯 Planificar metas y objetivos
- 💡 Capturar ideas creativas

---

## ✨ Características Principales

### 📚 16+ Plantillas Profesionales
Plantillas diseñadas cuidadosamente para diferentes necesidades:

- **Personal:** Nota Rápida, Diario Personal, Mis Metas
- **Trabajo:** Proyecto, Lista de Tareas, Acta de Reunión
- **Finanzas:** Presupuesto Personal
- **Salud:** Rutina de Fitness
- **Viajes:** Plan de Viaje
- **Creatividad:** Lluvia de Ideas
- **Productividad:** Rastreador de Hábitos
- **Bases de Datos:** Directorio de Contactos
- **Negocios:** Base de Clientes
- **Desarrollo:** Snippets de Código
- **Marketing:** Calendario de Contenido
- **Eventos:** Gestor de Eventos

### 🎨 Diseño Minimalista y Hermoso
- Interfaz limpia y profesional
- Paleta de colores elegante
- Espaciado e tipografía cuidadosamente diseñados
- Experiencia visual similar a Notion

### ✏️ Editor de Texto Enriquecido (TipTap)
- ✓ Negrita, cursiva, subrayado
- ✓ Títulos (H1, H2, H3)
- ✓ Listas ordenadas y desordenadas
- ✓ Blockquotes
- ✓ Y más formatos

### 💾 Almacenamiento Local
- Datos guardados localmente en tu máquina
- Sin sincronización en la nube
- Privacidad garantizada
- Persistencia en archivo JSON

### 🏷️ Organización Inteligente
- 13 categorías para clasificar documentos
- Sidebar con navegación rápida
- Búsqueda y filtrado eficiente
- Estructura jerárquica de páginas

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Electron** | ^27.0.0 | Framework de escritorio |
| **React** | ^18.2.0 | Interfaz de usuario |
| **TypeScript** | Latest | Type-safe development |
| **TipTap** | ^2.0.0-beta | Editor de texto |
| **Zustand** | ^4.4.0 | State management |
| **Webpack** | ^5.0.0 | Bundler |

---

## 📦 Instalación Rápida

### Requisitos
- Node.js >= 16.x
- npm >= 8.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/notion-clone.git
cd notion-clone

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

### Comandos

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Compilar para producción
npm start        # Ejecutar la aplicación
npm run test     # Ejecutar tests
```

---

## 🎬 Primeros Pasos

1. **Crear Documento:** Haz clic en "+ Nueva Página" en el sidebar
2. **Seleccionar Plantilla:** Elige una plantilla predefinida
3. **Editar:** Escribe y usa el editor de texto enriquecido
4. **Guardar:** Se guarda automáticamente localmente

---

## 📂 Estructura del Proyecto

```
notion-clone/
├── src/
│   ├── main/                    # Electron (main process)
│   │   ├── index.ts            # Entry point
│   │   ├── database.ts         # Persistencia
│   │   ├── handlers.ts         # IPC handlers
│   │   └── handlersLogic.ts    # Lógica
│   ├── renderer/                # React (renderer process)
│   │   ├── app/App.tsx         # Componente principal
│   │   ├── components/         # Componentes
│   │   ├── templates/          # Plantillas
│   │   ├── store/              # State management
│   │   └── styles/             # CSS
│   └── shared/types.ts         # TypeScript types
├── public/index.html
├── dist/                       # Build output
├── webpack.config.js
├── package.json
└── LEAME.md
```

---

## 🎨 Plantillas Incluidas

### 👤 Personal (3)
| | |
|---|---|
| 📝 Nota Rápida | Captura de ideas |
| 📔 Diario Personal | Reflexiones diarias |
| 🎯 Mis Metas | Planificación de objetivos |

### 💼 Trabajo (3)
| | |
|---|---|
| 🚀 Proyecto | Gestión de proyectos |
| ✅ Lista de Tareas | Kanban visual |
| 📞 Acta de Reunión | Documentación |

### Otros (10+)
Finanzas, Salud, Viajes, Creatividad, Productividad, Bases de Datos, Negocios, Desarrollo, Marketing, Eventos

---

## 🔧 Desarrollo

### TypeScript Config
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 🎯 Características Futuras

- [ ] Tema oscuro/claro
- [ ] Export/import (PDF, Markdown)
- [ ] Búsqueda global
- [ ] Histórico de cambios
- [ ] Sincronización en la nube
- [ ] Filtros avanzados
- [ ] Atajos de teclado personalizables
- [ ] Cifrado de datos
- [ ] Más tipos de contenido (tablas, gráficos)
- [ ] Sistema de plugins
- [ ] Temas personalizables

---

## 🤝 Contribuir

### Reportar Bugs
Abre un [Issue](https://github.com/tu-usuario/notion-clone/issues)

### Contribuir Código
```bash
git checkout -b feature/nueva-caracteristica
git commit -m "Agregar característica"
git push origin feature/nueva-caracteristica
# Abre un Pull Request
```

### Directrices
- Código limpio y comentado
- Use TypeScript
- Prueba tus cambios
- Respeta estilos de código
- Actualiza documentación

---

## 📝 Licencia

MIT License - Copyright (c) 2024-2025 Notion Clone

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

---

## 👨‍💻 Autor

**Desarrollador:** Tu Nombre/Usuario  
**Inicio:** 2024  
**Última Actualización:** Febrero 2025

---

## 📞 Soporte

- 📧 Email: contacto@ejemplo.com
- 🐛 Issues: [Reportar bug](https://github.com/tu-usuario/notion-clone/issues)
- 💡 Discussions: [Ideas](https://github.com/tu-usuario/notion-clone/discussions)

---

## 🙏 Agradecimientos

- **TipTap** por el editor de texto
- **Zustand** por state management
- **Electron** por desktop development
- Todos los contribuidores

---

## 📊 Estadísticas

```
Lenguaje Principal:    TypeScript
Componentes React:     6+
Plantillas:            16+
Categorías:            13
Líneas de Código:      1000+
Dependencias:          8
Dev Dependencies:      15+
```

---

## 🚀 Roadmap 2025

**Q1 2025**
- ✅ Plantillas profesionales
- ⏳ Tema oscuro/claro
- ⏳ Búsqueda global

**Q2 2025**
- ⭕ Export/import
- ⭕ Histórico de cambios
- ⭕ Atajos de teclado

**Q3-Q4 2025**
- ⭕ Sincronización en la nube
- ⭕ Sistema de plugins
- ⭕ Versión web

---

## ⭐ Si te resulta útil

¡Considera dejar una estrella! ⭐

```bash
# Y comparte con la comunidad 🚀
```

---

## 📄 Changelog

### v0.1.0 (Actual)
- MVP inicial con editor de texto
- 16+ plantillas profesionales
- Almacenamiento local
- Interfaz minimalista

---

<div align="center">

**Hecho con ❤️ en 2024-2025**

[⬆ Volver arriba](#-notion-clone)

</div>

