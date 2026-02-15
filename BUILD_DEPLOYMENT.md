# Build & Deployment - Notion Clone

## 🏗️ Compilar para Producción

### Paso 1: Preparar el Build

```bash
# Instalar dependencias
npm install

# Compilar todo (webpack + electron-builder)
npm run build
```

Este comando:
1. Compila TypeScript a JavaScript con Webpack
2. Optimiza y minifica el código
3. Empaqueta con electron-builder

### Paso 2: Ubicación de Artefactos

Después del build, encontrarás:

```
dist/          # Archivos compilados
├── main.js
├── preload.js
├── renderer.js
└── index.html

out/           # Instaladores generados
├── Notion Clone Setup 0.1.0.exe  (Windows installer)
├── Notion Clone 0.1.0.exe        (Portable)
└── ...
```

## 📦 Distribuir la Aplicación

### Opción 1: Instalador de Windows

El instalador se genera automáticamente en `out/`:
```
Notion Clone Setup 0.1.0.exe
```

Los usuarios pueden:
- Descargar el instalador
- Ejecutar y seguir los pasos
- La app se instala en `Program Files`

### Opción 2: Versión Portable

```
Notion Clone 0.1.0.exe
```

Ejecutable único sin instalación necesaria.

### Opción 3: Distribución Manual

Si deseas distribuir sin electron-builder:

1. Copia la carpeta `dist/` completa
2. Copia `node_modules/` (solo dependencias runtime)
3. Incluye el ejecutable de Electron
4. Distribúyelo como carpeta comprimida

## 🔧 Configuración de Build (electron-builder)

El archivo `package.json` contiene:

```json
"build": {
  "appId": "com.example.notionclone",
  "files": [
    "dist/**/*",
    "package.json"
  ],
  "directories": {
    "buildResources": "assets"
  }
}
```

Para personalizar:

1. **Cambiar el nombre de la app**:
   ```json
   "name": "mi-notion-clone"
   ```

2. **Cambiar el icono** (crear carpeta `assets/`):
   - Coloca `icon.png` (512x512 px)
   - Coloca `icon.ico` para Windows

3. **Cambiar versión**:
   ```json
   "version": "1.0.0"
   ```

## 📋 Checklist Pre-Deploy

- [ ] Todos los tests pasan
- [ ] No hay errores en consola
- [ ] Base de datos funciona correctamente
- [ ] La app se ejecuta sin node_modules en desarrollo
- [ ] El ícono de la app está en `assets/`
- [ ] La versión en `package.json` es la correcta
- [ ] El README está actualizado

## 🚀 Script de Build Automatizado

Crea un archivo `build.ps1` (PowerShell):

```powershell
# Limpiar
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "out" -Recurse -Force -ErrorAction SilentlyContinue

# Compilar
npm run build

# Verificar
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completado exitosamente" -ForegroundColor Green
    explorer out/
} else {
    Write-Host "❌ Error en el build" -ForegroundColor Red
}
```

Usar: `powershell -ExecutionPolicy Bypass -File build.ps1`

## 📊 Tamaño de la Aplicación

Aproximado:
- Electron: ~150 MB
- Dependencias: ~100 MB
- App code: ~2 MB
- **Total**: ~250 MB (instalador)

## 🔄 Actualizaciones Futuras

Para implementar auto-updates:

1. Instala `electron-updater`:
   ```bash
   npm install electron-updater
   ```

2. Configura en `src/main/index.ts`:
   ```typescript
   import { autoUpdater } from 'electron-updater';
   
   app.whenReady().then(() => {
     autoUpdater.checkForUpdatesAndNotify();
   });
   ```

3. Hospeda updates en servidor/GitHub Releases

## 🛠️ Troubleshooting Build

### Error: "Could not find module 'electron'"

```bash
npm install --save-dev electron
npm run build
```

### Error: "electron-builder not found"

```bash
npm install --save-dev electron-builder
npm run build
```

### El archivo .exe no ejecuta

1. Verifica que tengas permiso de escritura
2. Desactiva antivirus temporalmente
3. Ejecuta desde una carpeta sin caracteres especiales

### Tamaño muy grande

En `webpack.config.js`, añade minificación:
```javascript
optimization: {
  minimize: true
}
```

## 📝 Release Notes Template

```
# Release v0.2.0

## Nuevas Características
- [ ] Crear sub-páginas
- [ ] Búsqueda global
- [ ] Tema oscuro

## Bugs Corregidos
- [ ] Auto-save se detiene después de 10 minutos
- [ ] Crash al eliminar página con muchos elementos

## Mejoras
- [ ] Performance 30% más rápido
- [ ] UI más responsive

## Instrucciones de Instalación
1. Descargar `Notion Clone Setup v0.2.0.exe`
2. Ejecutar instalador
3. ¡Listo!
```

## 📞 Soporte Post-Release

- Mantén un canal de feedback
- Monitorea crash reports
- Responde rápido a issues críticos
- Planifica parches para bugs urgentes

---

**¡Listo para lanzar tu Notion Clone! 🚀**

