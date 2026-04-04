# 文章教学平台

一个现代化、安全、高性能的文章教学网站，使用 React + TypeScript + Vite 构建。

## ✨ 特性

### 🎨 优秀的 UI 设计
- 现代化渐变设计和卡片式布局
- 流畅的动画效果和过渡
- 完全响应式，适配各种设备
- 支持亮色/暗色主题切换

### 🔒 安全性
- React 18 默认防止 XSS 攻击
- TypeScript 提供类型安全
- Vite 构建优化和代码压缩
- ErrorBoundary 错误边界处理

### 📱 功能模块

#### Header 组件
- 响应式导航菜单
- 实时搜索功能
- 主题切换（亮色/暗色）
- 滚动时自动改变样式

#### Footer 组件
- 社交媒体链接
- 邮件订阅功能
- 快速导航链接
- 资源链接

#### Home 页面
- 精美的英雄区域
- 统计数据展示（文章数、用户数等）
- 精选文章卡片
- 平台特性展示
- 用户评价区域

#### ArticleList 页面
- 分类筛选
- 全文搜索（标题、内容、作者）
- 多种排序方式（日期、阅读量、阅读时间）
- 分页功能
- 结果统计

#### ArticleDetail 页面
- 自动生成文章目录
- 滚动高亮当前章节
- 评论系统（支持添加评论）
- 分享功能（微博、Twitter、复制链接）
- 点赞和收藏按钮
- 相关文章推荐

#### 通用组件
- **Loading**: 优雅的加载动画
- **ErrorBoundary**: 错误边界处理
- **ScrollToTop**: 路由切换自动滚动到顶部
- **BackToTop**: 返回顶部按钮（滚动后显示）

## 🚀 技术栈

- **React 18.3.1** - 最新版本，性能更优
- **TypeScript 5.6** - 类型安全
- **Vite 6.0** - 快速构建和热更新
- **React Router 6.26** - 路由管理
- **CSS 变量** - 主题化和易维护

## 📦 项目结构

```
article-tutorial-site/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # 头部组件（搜索、主题切换）
│   │   ├── Footer.tsx          # 页脚组件（订阅、社交链接）
│   │   └── common/             # 通用组件
│   │       ├── Loading.tsx     # 加载组件
│   │       ├── ErrorBoundary.tsx  # 错误边界
│   │       ├── ScrollToTop.tsx    # 滚动到顶部
│   │       └── BackToTop.tsx      # 返回顶部按钮
│   ├── pages/
│   │   ├── Home.tsx            # 首页
│   │   ├── ArticleList.tsx     # 文章列表（搜索、筛选、分页）
│   │   └── ArticleDetail.tsx   # 文章详情（目录、评论、分享）
│   ├── App.tsx                 # 主应用组件
│   └── main.tsx                # 入口文件
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 添加新文章

### 1. 在 ArticleList.tsx 中添加文章数据：

```typescript
{
  id: 9,
  title: '文章标题',
  excerpt: '文章简介...',
  category: '分类',
  author: '作者',
  date: '2024-01-01',
  readTime: '5 分钟',
  image: '🎨',
  views: 1000
}
```

### 2. 在 ArticleDetail.tsx 中添加文章详情：

```typescript
'9': {
  title: '文章标题',
  content: `
    <h2 id="intro">章节标题</h2>
    <p>章节内容...</p>
  `,
  category: '分类',
  author: '作者',
  date: '2024-01-01',
  readTime: '5 分钟',
  image: '🎨',
  tags: ['标签 1', '标签 2'],
  views: 1000
}
```

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```

## 🎨 主题定制

在 `src/index.css` 中修改 CSS 变量来自定义主题：

```css
:root {
  --primary-color: #2563eb;      /* 主色调 */
  --background: #f8fafc;         /* 背景色 */
  --surface: #ffffff;            /* 表面色 */
  /* ... */
}
```

## 📱 响应式支持

- 桌面端：> 768px
- 移动端：≤ 768px

所有组件都针对移动端进行了优化。

## 🔐 安全特性

1. **XSS 防护**: React 默认转义所有用户输入
2. **类型安全**: TypeScript 编译时检查
3. **错误处理**: ErrorBoundary 捕获运行时错误
4. **安全链接**: 外部链接使用 `rel="noopener noreferrer"`

## 🚀 性能优化

1. **代码分割**: Vite 自动进行代码分割
2. **懒加载**: 路由级别代码分割
3. **CSS 变量**: 减少 CSS 文件大小
4. **构建优化**: ESBuild 压缩和 Tree Shaking

## 📝 后续扩展建议

- [ ] 连接后端 API 获取文章
- [ ] 添加用户认证系统
- [ ] 实现文章收藏功能
- [ ] 添加阅读历史记录
- [ ] 实现文章搜索建议
- [ ] 添加 Markdown 编辑器
- [ ] 支持文章打赏功能
- [ ] 添加数据统计分析

## 📄 License

MIT
