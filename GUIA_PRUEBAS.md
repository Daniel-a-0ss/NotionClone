# Guía de Pruebas - Notion Clone

## ✅ Pruebas Recomendadas

### 1. Inicio de la Aplicación
- [ ] Abre la aplicación
- [ ] Verifica que la galería de plantillas se muestre primero
- [ ] Verifica que el diseño sea limpio y moderno

### 2. Crear una Página
- [ ] Haz clic en una plantilla (ej: "Nota Rápida")
- [ ] Se debe abrir un modal con nombre predeterminado
- [ ] Ingresa un nombre personalizado
- [ ] Haz clic en "Crear página"
- [ ] Verifica que la página aparezca en el sidebar

### 3. Editar Contenido
- [ ] Haz clic en la página creada
- [ ] Verifica que el header muestre el icono y título
- [ ] Intenta escribir en el editor
- [ ] Prueba los botones de formato (Bold, Italic, etc.)
- [ ] Verifica que se guarde automáticamente

### 4. Tema Oscuro/Claro
- [ ] Haz clic en el botón de tema (☀️/🌙) en el sidebar
- [ ] Verifica que toda la app cambie de tema
- [ ] Cierra la aplicación y reabre
- [ ] Verifica que el tema se mantenga (localStorage)

### 5. Exportar Base de Datos
- [ ] Haz clic en el botón de exportar (⬇️)
- [ ] Se debe descargar un archivo JSON
- [ ] Verifica que el nombre sea: `notion-clone-backup-YYYY-MM-DD.json`
- [ ] Abre el archivo y verifica que contenga tus páginas

### 6. Importar Base de Datos
- [ ] Crea una nueva página o modifica una existente
- [ ] Haz clic en el botón de importar (⬆️)
- [ ] Selecciona el archivo JSON descargado anteriormente
- [ ] Verifica que se carguen todas las páginas
- [ ] Verifica que el contenido se restaure correctamente

### 7. Eliminar Páginas
- [ ] Pasa el cursor sobre una página en el sidebar
- [ ] Verifica que aparezca un botón "✕"
- [ ] Haz clic en el botón de eliminar
- [ ] Confirma la eliminación
- [ ] Verifica que la página desaparezca

### 8. Responsividad
- [ ] Abre DevTools (F12)
- [ ] Cambia a vista móvil (360px ancho)
- [ ] Verifica que el layout se adapte correctamente
- [ ] Verifica que los botones sean accesibles
- [ ] Prueba en diferentes tamaños (600px, 1024px, 1440px)

### 9. Accesibilidad
- [ ] Usa Tab para navegar entre elementos
- [ ] Verifica que todos los botones sean accesibles
- [ ] Prueba con el botón "Cambiar tema"
- [ ] Verifica que los modales se cierren con Escape

### 10. Plantillas
- [ ] En la galería, selecciona diferentes categorías
- [ ] Verifica que el filtro funcione
- [ ] Haz clic en "Vista previa" en una tarjeta
- [ ] Se debe abrir un modal con vista previa
- [ ] Haz clic en "Usar plantilla"

## 🎨 Verifica las Mejoras Visuales

### Colores
- [ ] El gradiente primario es visible en headers
- [ ] El tema oscuro es legible y profesional
- [ ] Las transiciones de tema son suaves

### Animaciones
- [ ] El icono vacío flota en el sidebar
- [ ] Los botones tienen efectos hover suaves
- [ ] Las tarjetas de plantilla se desplazan al pasar el cursor
- [ ] Los modales aparecen con animación suave

### Tipografía
- [ ] Los títulos son claros y legibles
- [ ] El espaciado es consistente
- [ ] Los colores de texto tienen suficiente contraste

## 📱 Pruebas de Dispositivos

### Desktop (1920x1080)
- [ ] Layout completo visible
- [ ] Sidebar con ancho normal
- [ ] Galería de 4-5 columnas

### Tablet (768x1024)
- [ ] Galería de 3 columnas
- [ ] Sidebar sigue siendo funcional
- [ ] Modales se adaptan correctamente

### Móvil (375x812)
- [ ] Galería de 2 columnas
- [ ] Sidebar compacto o colapsable
- [ ] Modales ocupan la mayoría de la pantalla

## 🐛 Reporte de Errores

Si encuentras errores, anota:
- [ ] Acción que realizaste
- [ ] Error exacto (si hay)
- [ ] Navegador y versión
- [ ] Resolución de pantalla
- [ ] Reproducibilidad (¿siempre ocurre?)

## 📊 Métricas de Éxito

- ✅ App se abre sin errores
- ✅ Galería de plantillas es responsiva
- ✅ Tema oscuro/claro funciona
- ✅ Export/Import funcionan correctamente
- ✅ Editor guarda contenido automáticamente
- ✅ Interfaz es accesible por teclado
- ✅ Diseño se ve profesional y moderno
- ✅ Sin errores en consola

---

**Fecha de pruebas:** _______________
**Tester:** ________________________
**Resultado:** ✅ APROBADO / ❌ REQUIERE MEJORAS

