# 🚀 Quick Start - Notion Clone

## ⚡ Inicio en 3 Pasos

### Paso 1: Instalar
```bash
cd Tareas_Comenatrios
npm install
```

### Paso 2: Ejecutar
```bash
npm run dev
```

### Paso 3: ¡Usar!
✨ La aplicación se abre automáticamente

---

## 📌 Atajos Principales

| Acción | Atajo |
|--------|-------|
| Crear página | Botón "+ Nueva página" en sidebar |
| Negrita | **Ctrl+B** o botón **B** |
| Cursiva | **Ctrl+I** o botón **I** |
| Encabezado 1 | Botón **H1** |
| Encabezado 2 | Botón **H2** |
| Lista viñetas | Botón **•** |
| Lista numerada | Botón **1.** |
| Eliminar página | Pasar mouse + botón **✕** |
| DevTools | **F12** |

---

## 📚 Documentación Completa

| Archivo | Contenido |
|---------|-----------|
| `README.md` | Descripción general del proyecto |
| `GUIA_USO.md` | Manual de usuario detallado |
| `DESARROLLO.md` | Notas técnicas y arquitectura |
| `BUILD_DEPLOYMENT.md` | Cómo compilar para producción |
| `ROADMAP.md` | Características futuras planeadas |
| `RESUMEN_EJECUTIVO.md` | Overview ejecutivo del proyecto |
| `VERIFICACION.md` | Checklist de pruebas |
| `QUICKSTART.md` | Este archivo (instrucciones rápidas) |

---

## 🎯 Funcionalidades

### ✅ Implementadas
- Crear/editar/eliminar páginas
- Editor WYSIWYG (Bold, Italic, Encabezados, Listas)
- Auto-guardado cada 1 segundo
- Base de datos SQLite local
- UI responsiva
- IPC seguro

### 🔜 Próximas
- Sub-páginas (jerarquía)
- Búsqueda global
- Exportación a PDF
- Modo oscuro
- Etiquetas

---

## 🐛 Si Algo Falla

```bash
# Reinstalar todo
npm cache clean --force
rm -r node_modules package-lock.json
npm install
npm run dev
```

---

## 📦 Compilar para Producción

```bash
npm run build

# Resultado: out/Notion Clone Setup 0.1.0.exe
```

---

## 🔧 Herramientas Necesarias

- Node.js v18+
- npm o yarn
- Editor (VSCode recomendado)

---

## 📞 Estructura de Carpetas Importante

```
Tareas_Comenatrios/
├── src/          ← Código fuente
├── public/       ← Assets estáticos
├── dist/         ← Build compilado
├── package.json  ← Dependencias
└── webpack.config.js ← Configuración
```

---

## ✨ Tips & Tricks

1. **Auto-guardado**: Los cambios se guardan automáticamente, no necesitas Ctrl+S
2. **Múltiples notas**: Abre varias páginas y alterna entre ellas
3. **Formatter**: El contenido se formatea automáticamente
4. **Persistencia**: Los datos se guardan en SQLite incluso después de cerrar

---

## 🚀 Pasos Siguientes

1. Explorar la interfaz
2. Crear algunas notas de prueba
3. Revisar documentación detallada si necesitas
4. Leer ROADMAP.md para ver el futuro del proyecto

---

**¡Disfruta usando Notion Clone! 📝✨**

Para más detalles, revisa los otros archivos .md en la carpeta raíz.

