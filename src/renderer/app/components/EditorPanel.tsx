import React, { useEffect, useState } from 'react';

const EditorPanel: React.FC = () => {
  const [ping, setPing] = useState<string>('...');

  useEffect(() => {
    // call main process example
    // @ts-ignore
    window.electron.invoke('ping').then((res: string) => setPing(res));
  }, []);

  return (
    <main className="editor-panel">
      <h1>Editor</h1>
      <p>IPC ping: {ping}</p>
      <div className="editor-placeholder">Aquí irá el editor TipTap</div>
    </main>
  );
};

export default EditorPanel;

