const todoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"><rect width="100%" height="100%" fill="#f8fafc" rx="12"/><rect x="16" y="28" width="64" height="64" fill="#34d399" rx="8"/><rect x="96" y="28" width="200" height="20" fill="#e6eef8" rx="6"/><rect x="96" y="56" width="140" height="14" fill="#eef4ff" rx="6"/></svg>`;
const projectSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"><rect width="100%" height="100%" fill="#fff7ed" rx="12"/><rect x="24" y="24" width="272" height="40" fill="#c084fc" rx="8" /><rect x="24" y="80" width="120" height="14" fill="#fff1f2" rx="6"/><rect x="24" y="104" width="220" height="12" fill="#fff1f2" rx="6"/></svg>`;

export const THUMBNAILS: Record<string, string> = {
  'tareas-kanban': `data:image/svg+xml;utf8,${encodeURIComponent(todoSvg)}`,
  'proyecto': `data:image/svg+xml;utf8,${encodeURIComponent(projectSvg)}`,
  'diario': `data:image/svg+xml;utf8,${encodeURIComponent(todoSvg)}`,
  'portafolio': `data:image/svg+xml;utf8,${encodeURIComponent(projectSvg)}`,
  'base-datos': `data:image/svg+xml;utf8,${encodeURIComponent(projectSvg)}`,
  'crm-leads': `data:image/svg+xml;utf8,${encodeURIComponent(todoSvg)}`,
  'social-calendar': `data:image/svg+xml;utf8,${encodeURIComponent(projectSvg)}`,
  'viaje': `data:image/svg+xml;utf8,${encodeURIComponent(todoSvg)}`,
};

export default THUMBNAILS;
