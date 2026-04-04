const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// 读取 dist/index.html 获取最新的资源文件名
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// 提取 JS 和 CSS 文件名
const jsMatch = indexHtml.match(/src="\/article-tutorial-site\/assets\/([^"]+\.js)"/);
const cssMatch = indexHtml.match(/href="\/article-tutorial-site\/assets\/([^"]+\.css)"/);
const vendorJsMatch = indexHtml.match(/href="\/article-tutorial-site\/assets\/([^"]+\.js)"\s+crossorigin/);

if (!jsMatch || !cssMatch) {
  console.error('❌ 无法从 index.html 中提取资源文件名');
  process.exit(1);
}

const jsFile = jsMatch[1];
const cssFile = cssMatch[1];
const vendorJsFile = vendorJsMatch ? vendorJsMatch[1] : 'vendor.js';

// 创建 404.html
const html404 = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/article-tutorial-site/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="优质文章教学平台 - 分享知识与经验" />
    <meta name="keywords" content="教程，文章，学习，技术，知识分享" />
    <title>文章教学平台</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      // GitHub Pages 404 处理 - 将所有 404 请求重定向到正确的路由
      var path = window.location.pathname.replace(/\\/article-tutorial-site/, '');
      window.history.replaceState({}, '', '/article-tutorial-site' + path + window.location.search);
    </script>
    <script type="module" crossorigin src="/article-tutorial-site/assets/${jsFile}"></script>
    <link rel="modulepreload" crossorigin href="/article-tutorial-site/assets/${vendorJsFile}">
    <link rel="stylesheet" crossorigin href="/article-tutorial-site/assets/${cssFile}">
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, '404.html'), html404);
console.log('✓ 404.html generated with latest asset filenames');
