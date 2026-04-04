const fs = require('fs');
const path = require('path');

// 复制 404.html 到 dist 目录
fs.copyFileSync(
  path.join(__dirname, 'public', '404.html'),
  path.join(__dirname, 'dist', '404.html')
);

console.log('✓ 404.html copied to dist directory');
