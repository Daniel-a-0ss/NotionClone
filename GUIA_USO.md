# Guía de Uso - Notion Clone

## 🎯 Descripción General

**Notion Clone** es una aplicación de escritorio que replica la funcionalidad básica de Notion. Permite crear documentos, organizarlos en una estructura jerárquica y editarlos con un editor de texto enriquecido.

## 🚀 Inicio Rápido

### 1. Instalar e Iniciar

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

La aplicación se abrirá automáticamente después de compilar.

### 2. Crear tu Primera Página

1. Haz clic en el botón **"+ Nueva página"** en la barra lateral izquierda
2. Ingresa un nombre para la página (por ejemplo: "Mi Primera Nota")
3. ¡Listo! Tu página se creará y aparecerá en la lista

### 3. Editar Contenido

1. Selecciona una página de la lista en la barra lateral
2. El editor de texto aparecerá en el panel principal
3. Escribe libremente. Los cambios se guardan **automáticamente** cada segundo

### 4. Herramientas del Editor

En la barra de herramientas del editor encontrarás:

- **B** (Negrita): Resalta texto importante
- **I** (Cursiva): Texto en itálica
- **H1**: Título grande
- **H2**: Título mediano
- **•** (Viñetas): Lista sin orden
- **1.** (Lista numerada): Lista con números

## 📁 Estructura de Archivos Guardados

La base de datos se guarda en:
```
C:\Users\{usuario}\AppData\Roaming\notion-clone\notion-clone.db
```

Contiene:
- Todas tus páginas creadas
- El contenido de cada página
- Metadatos (fechas de creación, actualización)

## 🔧 Características Avanzadas

### Eliminar Páginas

1. Pasa el cursor sobre una página en la barra lateral
2. Haz clic en la X roja que aparece
3. Confirma la eliminación

### Expandir Páginas Hijo

Si has creado páginas dentro de otras (futuro):
- Haz clic en el triángulo **▶** para expandir
- Haz clic nuevamente en **▼** para contraer

### Auto-guardado

- Los documentos se guardan automáticamente cada **1 segundo**
- No necesitas presionar Ctrl+S
- Todos los cambios se persisten en SQLite

## ⌨️ Atajos de Teclado

(Heredados de TipTap editor)

- **Ctrl+B**: Negrita
- **Ctrl+I**: Cursiva
- **Ctrl+Shift+0**: Párrafo normal
- **Ctrl+Alt+1**: Encabezado 1
- **Ctrl+Alt+2**: Encabezado 2

## 🆘 Solución de Problemas

### La aplicación no inicia

1. Verifica que Node.js v18+ esté instalado
2. Ejecuta `npm install` nuevamente
3. Borra la carpeta `dist/` y `node_modules/` y vuelve a instalar

### Los cambios no se guardan

1. Comprueba la consola del desarrollador (F12)
2. Verifica que haya espacio en disco
3. Recarga la aplicación

### Base de datos corrupta

1. Cierra la aplicación
2. Elimina el archivo `notion-clone.db` en `%APPDATA%/notion-clone/`
3. Reinicia la aplicación (se recrea una base de datos limpia)

## 🚀 Próximas Mejoras

- [ ] Crear páginas dentro de otras páginas
- [ ] Exportar a PDF/Markdown
- [ ] Búsqueda global
- [ ] Tema oscuro
- [ ] Sincronización en la nube
- [ ] Historial de cambios

## 📞 Soporte

Para reportar bugs o sugerir mejoras, contacta al desarrollador.

---

**Disfruta tomando notas con Notion Clone! 📝**

