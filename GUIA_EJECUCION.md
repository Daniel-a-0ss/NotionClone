# Guía de Ejecución - Notion Clone

## 🚀 Iniciar la Aplicación

### Opción 1: Modo Desarrollo
```bash
npm run dev
```
- Abre la app con hot-reload
- Muestra la consola de desarrollo
- Ideal para desarrollo

### Opción 2: Build y Ejecutar
```bash
npm run build
npm start
```
- Compila optimizado
- Ejecuta la versión final
- Más rápido que desarrollo

### Opción 3: Solo Desarrollo (sin Electron)
```bash
npm run webpack-watch
```
- Solo compila frontend
- Ideal si trabajas en estilos/componentes

---

## ⚙️ Requisitos Previos

- **Node.js** 14+ instalado
- **npm** 6+ instalado
- **Windows 10/11** o **macOS 10.13+** o **Linux**

Verificar versión:
```bash
node --version
npm --version
```

---

## 📦 Instalación Inicial

```bash
# Clonar repositorio (si es necesario)
git clone <repo-url>
cd Tareas_Comenatrios

# Instalar dependencias
npm install

# Instalar dependencias globales (una sola vez)
npm install -g electron-builder
```

---

## 🎮 Primera Ejecución

1. Abre terminal en la carpeta del proyecto
2. Ejecuta `npm run dev`
3. Espera ~30 segundos a compilar
4. La app debería abrir automáticamente
5. Si no abre, revisa la consola para errores

---

## 🐛 Solución de Problemas

### La app no abre
```bash
# Limpia caché y reinstala
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Error de compilación
```bash
# Verifica que no hay errores de sintaxis
npm run build
# Revisa los errores en la consola
```

### Puerto 5000 en uso (si aplica)
```bash
# Intenta con otro puerto
npm run dev -- --port 5001
```

### Pantalla blanca al abrir
1. Abre DevTools (F12)
2. Ve a Consola
3. Busca errores rojos
4. Reporta el error

---

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Desarrollo con hot-reload |
| `npm run build` | Compilar para producción |
| `npm start` | Ejecutar aplicación compilada |
| `npm test` | Ejecutar tests |
| `npm run webpack-watch` | Solo compilar (sin Electron) |
| `npm run lint` | Verificar estilo de código |

---

## 🎨 Personalización

### Cambiar Colores Primarios
Edita en `src/renderer/styles.css`:
```css
:root {
  --primary-1: #5b5aff;    /* Cambiar este */
  --primary-2: #7c3aed;    /* Cambiar este */
}
```

### Cambiar Nombre de la App
Edita en `package.json`:
```json
{
  "name": "tu-app-name",
  "productName": "Tu App Name"
}
```

### Agregar Nuevas Plantillas
Edita en `src/renderer/templates/templates.ts`:
```typescript
export const TEMPLATES: TemplateItem[] = [
  // ...existentes...
  {
    id: 'nueva-plantilla',
    name: 'Mi Plantilla',
    emoji: '📝',
    category: 'personal',
    content: '<h2>Mi contenido</h2>'
  }
];
```

---

## 📂 Estructura de Carpetas

```
Tareas_Comenatrios/
├── src/
│   ├── main/              # Código de Electron
│   │   ├── index.ts
│   │   ├── handlers.ts
│   │   └── database.ts
│   ├── renderer/          # Código de React
│   │   ├── components/
│   │   ├── styles/
│   │   ├── templates/
│   │   └── index.tsx
│   └── shared/            # Tipos compartidos
├── public/
│   └── index.html
├── dist/                  # Archivos compilados
├── package.json
├── webpack.config.js
├── tsconfig.json
└── jest.config.js
```

---

## 🔐 Datos Guardados

Los datos se guardan en:
- **Windows**: `%APPDATA%/notion-clone/`
- **macOS**: `~/Library/Application Support/notion-clone/`
- **Linux**: `~/.config/notion-clone/`

Archivo: `db.json`

---

## 💾 Backup de Datos

### Automático
Los datos se guardan automáticamente mientras escribes.

### Manual
1. Haz clic en ⬇️ (exportar) en el sidebar
2. Se descarga `notion-clone-backup-YYYY-MM-DD.json`
3. Guarda en lugar seguro

### Restaurar
1. Haz clic en ⬆️ (importar) en el sidebar
2. Selecciona el archivo JSON
3. Listo, tus datos se cargan

---

## 🌐 Distribución

### Crear Instalador
```bash
npm run build
```

Esto genera:
- **Windows**: `dist/Notion Clone Setup.exe`
- **macOS**: `dist/Notion Clone.dmg`
- **Linux**: `dist/notion-clone.AppImage`

### Crear ZIP Portable
```bash
npm run build -- --win portable
```

---

## 📱 Dispositivos Soportados

| Dispositivo | Soporte |
|------------|---------|
| Windows Desktop | ✅ Completo |
| macOS | ✅ Completo |
| Linux | ✅ Completo |
| Tablet/Mobile | ⚠️ Responsive pero no optimizado |

---

## ⚡ Optimizaciones

### Mejorar Performance
1. Reducir tamaño de imágenes
2. Usar lazy loading para imágenes
3. Implementar code splitting
4. Minificar CSS/JS

### Reducir Tamaño de Build
```bash
npm install --save-dev webpack-bundle-analyzer
```

---

## 🆘 Reportar Errores

Si encuentras un error:
1. Abre DevTools (F12)
2. Ve a Consola
3. Copia el error
4. Anota pasos para reproducirlo
5. Reporta en el README.md

---

## 📞 Soporte

- **Documentación**: Ver archivos .md en el proyecto
- **Errores**: Revisa la consola (F12)
- **Preguntas**: Revisa GUIA_PRUEBAS.md

---

**¡Disfruta usando tu Notion Clone! 🎉**

Última actualización: Febrero 2026

