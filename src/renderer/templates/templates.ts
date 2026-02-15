// Plantillas predefinidas para Notion Clone v0.2.0
// Diseño profesional, minimalista y hermoso

export interface TemplateItem {
  id: string;
  name: string;
  emoji: string;
  category: 'personal' | 'trabajo' | 'educacion' | 'finanzas' | 'salud' | 'viajes' | 'creatividad' | 'productividad' | 'bases-datos' | 'negocios' | 'desarrollo' | 'marketing' | 'eventos';
  content: string;
  author?: string;
  tags?: string[];
}

export const TEMPLATES: TemplateItem[] = [
  {
    id: 'nota',
    name: 'Nota Rápida',
    emoji: '📝',
    category: 'personal',
    content: `<h1 style="color: #5b5aff; margin: 0 0 8px 0; font-size: 28px;">Nota Rápida</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Captura tus pensamientos en un instante</p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<p style="color: #4a5568; line-height: 1.8; margin: 16px 0;">Escribe aquí lo que está en tu mente...</p>`,
  },
  {
    id: 'diario',
    name: 'Diario Personal',
    emoji: '📔',
    category: 'personal',
    content: `<h1 style="color: #5b5aff; margin: 0 0 8px 0;">Mi Diario</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Escrito el <strong>[Hoy]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Reflexión del Día</h2>
<p style="color: #4a5568; line-height: 1.8;">¿Cuál fue el momento más importante de hoy?</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Lo Mejor de Hoy</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Un logro o momento feliz...</li>
<li>Alguien que te hizo sonreír...</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Gratitud</h2>
<p style="color: #4a5568; line-height: 1.8;">Estoy agradecido por...</p>`,
  },
  {
    id: 'metas',
    name: 'Mis Metas',
    emoji: '🎯',
    category: 'personal',
    content: `<h1 style="color: #5b5aff; margin: 0 0 24px 0;">Mis Objetivos 2026</h1>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 700; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #5b5aff;">Largo Plazo (Anual)</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0; line-height: 2;">
<li style="font-weight: 500;">Objetivo principal...</li>
<li style="font-weight: 500;">Objetivo secundario...</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 700; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #7c3aed;">Mediano Plazo (6 meses)</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0; line-height: 2;">
<li style="font-weight: 500;">Meta realista...</li>
<li style="font-weight: 500;">Meta medible...</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 700; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #ec4899;">Este Mes</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0; line-height: 2;">
<li style="font-weight: 500;">☐ Tarea 1</li>
<li style="font-weight: 500;">☐ Tarea 2</li>
</ul>`,
  },
  {
    id: 'proyecto',
    name: 'Proyecto',
    emoji: '🚀',
    category: 'trabajo',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Nombre del Proyecto</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Estado: <strong style="color: #10b981;">En Progreso</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Descripción</h2>
<p style="color: #4a5568; line-height: 1.8;">Describe brevemente qué es este proyecto...</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Objetivos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Objetivo estratégico 1</li>
<li>Objetivo estratégico 2</li>
<li>Objetivo estratégico 3</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Timeline</h2>
<p style="color: #4a5568;"><strong>Inicio:</strong> [Fecha] | <strong>Fin:</strong> [Fecha]</p>`,
  },
  {
    id: 'tareas',
    name: 'Lista de Tareas',
    emoji: '✅',
    category: 'trabajo',
    content: `<h1 style="color: #5b5aff; margin: 0 0 24px 0;">Tareas Pendientes</h1>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f59e0b;">Por Hacer</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li style="margin: 8px 0;">☐ Tarea prioritaria</li>
<li style="margin: 8px 0;">☐ Tarea importante</li>
<li style="margin: 8px 0;">☐ Tarea rutinaria</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #7c3aed;">En Progreso</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li style="margin: 8px 0;">◐ Tarea en curso...</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #10b981;">Completadas</h2>
<ul style="color: #a0aec0; margin: 0 0 0 20px; padding: 0;">
<li style="margin: 8px 0;">✓ Tarea completada</li>
<li style="margin: 8px 0;">✓ Tarea completada</li>
</ul>`,
  },
  {
    id: 'reunion',
    name: 'Acta de Reunión',
    emoji: '📞',
    category: 'trabajo',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Reunión de Equipo</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;"><strong>[Fecha]</strong> • <strong>[Hora]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Asistentes</h2>
<p style="color: #4a5568;">Nombre 1, Nombre 2, Nombre 3</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Agenda</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Punto 1 a discutir</li>
<li>Punto 2 a discutir</li>
<li>Punto 3 a discutir</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Próximos Pasos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>Responsable:</strong> Acción a realizar</li>
<li><strong>Responsable:</strong> Acción a realizar</li>
</ul>`,
  },
  {
    id: 'presupuesto',
    name: 'Presupuesto Personal',
    emoji: '💰',
    category: 'finanzas',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Presupuesto Mensual</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Mes: <strong>[Mes/Año]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Ingresos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Ingreso Principal: $[Monto]</li>
<li>Otros Ingresos: $[Monto]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Gastos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Vivienda: $[Monto]</li>
<li>Alimentación: $[Monto]</li>
<li>Transporte: $[Monto]</li>
<li>Otros: $[Monto]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Ahorro</h2>
<p style="color: #4a5568;"><strong>Total a Ahorrar:</strong> $[Monto]</p>`,
  },
  {
    id: 'fitness',
    name: 'Rutina de Fitness',
    emoji: '💪',
    category: 'salud',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Mi Rutina de Fitness</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Objetivo: <strong>[Tu objetivo]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Lunes - Pecho y Tríceps</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Ejercicio 1: 3 series x 10 reps</li>
<li>Ejercicio 2: 3 series x 12 reps</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Martes - Espalda y Bíceps</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Ejercicio 1: 3 series x 10 reps</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Miércoles - Descanso</h2>
<p style="color: #4a5568;">Día de recuperación</p>`,
  },
  {
    id: 'viaje',
    name: 'Plan de Viaje',
    emoji: '✈️',
    category: 'viajes',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Mi Viaje</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Destino: <strong>[Tu destino]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Fechas</h2>
<p style="color: #4a5568;"><strong>Salida:</strong> [Fecha] | <strong>Regreso:</strong> [Fecha]</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Vuelos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>Ida:</strong> [Información del vuelo]</li>
<li><strong>Regreso:</strong> [Información del vuelo]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Alojamiento</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>Hotel:</strong> [Nombre]</li>
<li><strong>Confirmación:</strong> [Número]</li>
</ul>`,
  },
  {
    id: 'idea',
    name: 'Lluvia de Ideas',
    emoji: '💡',
    category: 'creatividad',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Lluvia de Ideas</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Tema: <strong>[Tu tema]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Ideas Principales</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Idea 1</li>
<li>Idea 2</li>
<li>Idea 3</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Ideas Secundarias</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Idea auxiliar 1</li>
<li>Idea auxiliar 2</li>
</ul>`,
  },
  {
    id: 'habitos',
    name: 'Rastreador de Hábitos',
    emoji: '🔄',
    category: 'productividad',
    content: `<h1 style="color: #5b5aff; margin: 0 0 24px 0;">Mi Rastreador de Hábitos</h1>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Hábito 1: [Nombre del hábito]</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Lunes: ✓</li>
<li>Martes: ✓</li>
<li>Miércoles: ✗</li>
<li>Jueves: ✓</li>
<li>Viernes: ✓</li>
<li>Sábado: ✓</li>
<li>Domingo: ✓</li>
</ul>
<p style="color: #4a5568; margin-top: 12px;"><strong>Racha Actual:</strong> 5 días | <strong>Racha Máxima:</strong> 15 días</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Hábito 2: [Nombre del hábito]</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Lunes: ✓</li>
<li>Martes: ✓</li>
</ul>`,
  },
  {
    id: 'contactos',
    name: 'Directorio de Contactos',
    emoji: '👥',
    category: 'bases-datos',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Mi Directorio</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Gestiona tus contactos importantes</p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Trabajo</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>[Nombre]</strong> - [Email] - [Teléfono]</li>
<li><strong>[Nombre]</strong> - [Email] - [Teléfono]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Familia</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>[Nombre]</strong> - [Email] - [Teléfono]</li>
</ul>`,
  },
  {
    id: 'clientes',
    name: 'Base de Clientes',
    emoji: '💼',
    category: 'negocios',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Mi Base de Clientes</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Gestiona tus relaciones comerciales</p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Clientes Activos</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li><strong>[Cliente]</strong> - Contacto: [Nombre] - Email: [Email]</li>
<li><strong>[Cliente]</strong> - Contacto: [Nombre] - Email: [Email]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Resumen</h2>
<p style="color: #4a5568;"><strong>Total de Clientes:</strong> [Número] | <strong>Ingresos Mensuales:</strong> $[Monto]</p>`,
  },
  {
    id: 'codigo-snippets',
    name: 'Snippets de Código',
    emoji: '💻',
    category: 'desarrollo',
    content: `<h1 style="color: #5b5aff; margin: 0 0 24px 0;">Mi Librería de Código</h1>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">JavaScript/TypeScript</h2>
<pre style="background: #f7fafc; padding: 12px; border-radius: 6px; overflow-x: auto;"><code style="color: #2d3748; font-family: monospace; font-size: 12px;">function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}</code></pre>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Python</h2>
<pre style="background: #f7fafc; padding: 12px; border-radius: 6px; overflow-x: auto;"><code style="color: #2d3748; font-family: monospace; font-size: 12px;">def count_words(text):
    return len(text.split())</code></pre>`,
  },
  {
    id: 'social-calendar',
    name: 'Calendario de Contenido',
    emoji: '📱',
    category: 'marketing',
    content: `<h1 style="color: #5b5aff; margin: 0 0 4px 0;">Mi Calendario de Contenido</h1>
<p style="color: #a0aec0; font-size: 13px; margin: 0 0 24px 0;">Semana de <strong>[Fecha]</strong></p>
<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Lunes</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>Instagram: Publicación sobre [Tema]</li>
<li>Twitter: Thread sobre [Tema]</li>
</ul>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">Martes</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li>LinkedIn: Artículo sobre [Tema]</li>
<li>TikTok: Video de [Tipo]</li>
</ul>`,
  },
  {
    id: 'eventos',
    name: 'Gestor de Eventos',
    emoji: '🎪',
    category: 'eventos',
    content: `<h1 style="color: #5b5aff; margin: 0 0 24px 0;">Mis Eventos</h1>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #ec4899;">Próximos Eventos</h2>
<p style="color: #4a5568; margin: 12px 0;"><strong>[Nombre del Evento]</strong></p>
<p style="color: #a0aec0; font-size: 13px;">📅 [Fecha] | 🕐 [Hora] | 📍 [Lugar]</p>
<h2 style="color: #2d3748; font-size: 16px; font-weight: 600; margin: 24px 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #10b981;">Checklist</h2>
<ul style="color: #4a5568; margin: 0 0 0 20px; padding: 0;">
<li style="margin: 8px 0;">☐ Confirmar asistentes</li>
<li style="margin: 8px 0;">☐ Preparar material</li>
<li style="margin: 8px 0;">☐ Coordinar logística</li>
</ul>`,
  },
];

export const CATEGORIES = [
  { id: 'personal', name: 'Personal', emoji: '👤' },
  { id: 'trabajo', name: 'Trabajo', emoji: '💼' },
  { id: 'educacion', name: 'Educación', emoji: '📚' },
  { id: 'finanzas', name: 'Finanzas', emoji: '💰' },
  { id: 'salud', name: 'Salud', emoji: '❤️' },
  { id: 'viajes', name: 'Viajes', emoji: '✈️' },
  { id: 'creatividad', name: 'Creatividad', emoji: '🎨' },
  { id: 'productividad', name: 'Productividad', emoji: '⚡' },
  { id: 'bases-datos', name: 'Bases de Datos', emoji: '🗄️' },
  { id: 'negocios', name: 'Negocios', emoji: '📊' },
  { id: 'desarrollo', name: 'Desarrollo', emoji: '👨‍💻' },
  { id: 'marketing', name: 'Marketing', emoji: '📣' },
  { id: 'eventos', name: 'Eventos', emoji: '🎪' },
];

