import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../styles/editor.css';

interface RichEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const FONT_FAMILIES = [
  { label: 'Sistema', value: 'system-ui' },
  { label: 'Serif', value: 'Georgia' },
  { label: 'Mono', value: 'monospace' },
  { label: 'Courier', value: 'Courier New' },
];

const FONT_SIZES = [
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '28px', value: '28px' },
  { label: '32px', value: '32px' },
];

const RichEditor: React.FC<RichEditorProps> = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '<p>Comienza a escribir...</p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || '<p></p>');
    }
  }, [content, editor]);

  if (!editor) return <div>Cargando editor...</div>;

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        {/* Formato básico */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'active' : ''}
          title="Bold (Ctrl+B)"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'active' : ''}
          title="Italic (Ctrl+I)"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'active' : ''}
          title="Strikethrough"
        >
          <s>S</s>
        </button>

        <div className="toolbar-divider"></div>

        {/* Encabezados */}
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
          title="Heading 1"
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'active' : ''}
          title="Heading 2"
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'active' : ''}
          title="Heading 3"
        >
          H3
        </button>

        <div className="toolbar-divider"></div>

        {/* Listas */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'active' : ''}
          title="Bullet List"
        >
          •
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'active' : ''}
          title="Ordered List"
        >
          1.
        </button>

        <div className="toolbar-divider"></div>

        {/* Tipo de letra */}
        <select
          className="toolbar-select"
          value="system-ui"
          onChange={(e) => {
            const font = e.target.value;
            document.body.style.fontFamily = font;
          }}
          title="Font Family"
        >
          <option value="system-ui" disabled>
            Fuente
          </option>
          {FONT_FAMILIES.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>

        {/* Tamaño de letra */}
        <select
          className="toolbar-select"
          value="16px"
          onChange={(e) => {
            const size = e.target.value;
            if (editor.isActive('heading', { level: 1 }) ||
                editor.isActive('heading', { level: 2 }) ||
                editor.isActive('heading', { level: 3 })) {
              // Para headings, no cambiar
              return;
            }
            // Aplicar tamaño al párrafo actual
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 })
              .toggleHeading({ level: 1 })
              .run();
          }}
          title="Font Size"
        >
          <option value="16px" disabled>
            Tamaño
          </option>
          {FONT_SIZES.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>


        {/* Más opciones */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'active' : ''}
          title="Blockquote"
        >
          "
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'active' : ''}
          title="Code Block"
        >
          &lt;/&gt;
        </button>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
};

export default RichEditor;

