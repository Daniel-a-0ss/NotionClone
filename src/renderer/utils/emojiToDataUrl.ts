export default function emojiToDataUrl(emoji: string, size = 140, bg = '#ffffff') {
  // Create a canvas and draw the emoji centered
  try {
    const canvas = document.createElement('canvas');
    const scale = window.devicePixelRatio || 1;
    canvas.width = size * scale;
    canvas.height = size * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    // background
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // set font large
    const fontSize = Math.floor(size * 0.6 * scale);
    ctx.font = `${fontSize}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL();
  } catch (e) {
    return '';
  }
}

