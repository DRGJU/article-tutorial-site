import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  date: string;
  likes: number;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, text: string, level: number}>>([]);
  const [activeSection, setActiveSection] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: '小明',
      avatar: '👨‍💻',
      content: '这篇文章写得很好，学到了很多！感谢分享！',
      date: '2024-01-16',
      likes: 12
    },
    {
      id: 2,
      author: '李华',
      avatar: '👩‍🎓',
      content: '内容很实用，希望能多出一些这样的教程。',
      date: '2024-01-15',
      likes: 8
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 模拟文章数据 - 后续可以根据实际需要从 API 获取
  const articles: Record<string, any> = {
    '1': {
      title: '欢迎来到知识学堂',
      content: `
        <h2 id="welcome">🎉 欢迎来到知识学堂！</h2>
        
        <p>这是一个专注于分享优质文章和教程的平台。我们致力于为您提供高质量的学习内容，帮助您在各个领域快速成长。</p>
        
        <h3 id="mission">📚 我们的使命</h3>
        <p>知识学堂的使命是让学习变得更加简单和高效。我们相信，通过分享优质的内容，可以帮助更多的人获取知识、提升技能。</p>
        
        <h3 id="features">✨ 平台特色</h3>
        <ul>
          <li><strong>高质量内容：</strong>每篇文章都经过精心筛选和审核</li>
          <li><strong>多样化主题：</strong>涵盖技术、生活、学习等多个领域</li>
          <li><strong>持续更新：</strong>定期发布新的教程和文章</li>
          <li><strong>易于理解：</strong>用简洁明了的语言讲解复杂概念</li>
        </ul>
        
        <h3 id="explore">🚀 开始探索</h3>
        <p>现在就开始探索我们的文章库吧！无论您是想学习新技术，还是想提升生活质量，这里都会有您需要的内容。</p>
        
        <blockquote>
          "知识就是力量，分享让力量传递。"
        </blockquote>
        
        <p>感谢您的访问，祝您学习愉快！</p>
      `,
      category: '公告',
      author: '管理员',
      date: '2024-01-15',
      readTime: '2 分钟',
      image: '🎉',
      tags: ['公告', '介绍', '欢迎'],
      views: 1200
    },
    '2': {
      title: '如何高效学习编程',
      content: `
        <h2 id="intro">💻 如何高效学习编程</h2>
        
        <p>学习编程是一段充满挑战但也极其有价值的旅程。本文将分享一些经过验证的高效学习方法，帮助您更快地掌握编程技能。</p>
        
        <h3 id="language">1️⃣ 选择合适的入门语言</h3>
        <p>对于初学者，我推荐从以下语言开始：</p>
        <ul>
          <li><strong>Python：</strong>语法简洁，应用广泛</li>
          <li><strong>JavaScript：</strong>Web 开发必备</li>
          <li><strong>Java：</strong>企业级应用常用</li>
        </ul>
        
        <h3 id="basics">2️⃣ 建立扎实的基础</h3>
        <p>不要急于求成，要花时间理解基本概念：</p>
        <ul>
          <li>变量和数据类型</li>
          <li>控制结构（条件语句、循环）</li>
          <li>函数和方法</li>
          <li>数据结构和算法</li>
        </ul>
        
        <h3 id="practice">3️⃣ 实践项目驱动学习</h3>
        <p>理论结合实践是最高效的学习方式。从小项目开始，逐步增加难度：</p>
        <ul>
          <li>待办事项列表应用</li>
          <li>简单的计算器</li>
          <li>个人博客网站</li>
          <li>数据分析项目</li>
        </ul>
        
        <h3 id="continuous">4️⃣ 保持持续学习</h3>
        <p>技术日新月异，要保持学习的习惯：</p>
        <ul>
          <li>每天至少编码 30 分钟</li>
          <li>阅读技术博客和文档</li>
          <li>参与开源项目</li>
          <li>加入技术社区</li>
        </ul>
        
        <blockquote>
          "编程不是关于你知道多少，而是关于你能用代码创造什么。"
        </blockquote>
        
        <h3 id="tips">💡 小贴士</h3>
        <ul>
          <li>不要害怕犯错，错误是最好的老师</li>
          <li>学会使用调试工具</li>
          <li>多阅读他人的代码</li>
          <li>教别人是巩固知识的最好方式</li>
        </ul>
        
        <p>记住，每个人都是从零开始的。保持耐心，持续练习，您一定能够掌握编程技能！</p>
      `,
      category: '教程',
      author: '张老师',
      date: '2024-01-14',
      readTime: '5 分钟',
      image: '💻',
      tags: ['编程', '学习', '教程'],
      views: 3500
    }
  };

  const article = articles[id || '1'] || articles['1'];

  // 提取目录
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(article.content, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2, h3'));
    const toc = headings.map(heading => ({
      id: heading.getAttribute('id') || '',
      text: heading.textContent || '',
      level: heading.tagName === 'H2' ? 2 : 3
    }));
    setTableOfContents(toc);
  }, [article.content]);

  // 监听滚动，高亮当前章节
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.article-content h2, .article-content h3');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddComment = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: '访客',
        avatar: '👤',
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments(prev => [comment, ...prev]);
      setNewComment('');
    }
  }, [newComment]);

  const handleShare = useCallback((platform: string) => {
    const url = window.location.href;
    const text = `推荐这篇文章：${article.title}`;
    
    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
      case 'weibo':
        window.open(`https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank', 'width=600,height=400');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=400');
        break;
    }
    setIsShareOpen(false);
  }, [article.title]);

  const shareLinks = [
    { name: '微博', icon: '🌐', id: 'weibo' },
    { name: 'Twitter', icon: '🐦', id: 'twitter' },
    { name: '复制链接', icon: '🔗', id: 'copy' },
  ];

  return (
    <div className="article-detail-page">
      <div className="detail-layout container">
        {/* 主内容区 */}
        <article className="article-detail">
          {/* 文章头部 */}
          <header className="article-header">
            <Link to="/articles" className="back-link">
              ← 返回文章列表
            </Link>
            
            <div className="article-header-content">
              <span className="article-category-badge">{article.category}</span>
              <h1 className="article-title">{article.title}</h1>
              
              <div className="article-meta">
                <div className="meta-item">
                  <span className="meta-icon">👤</span>
                  <span>{article.author}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>{article.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <span>{article.readTime}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">👁️</span>
                  <span>{article.views}</span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="share-section">
                <button 
                  className="share-btn"
                  onClick={() => setIsShareOpen(!isShareOpen)}
                >
                  🔗 分享文章
                </button>
                {isShareOpen && (
                  <div className="share-menu slide-in">
                    {shareLinks.map(link => (
                      <button
                        key={link.id}
                        className="share-option"
                        onClick={() => handleShare(link.id)}
                      >
                        <span className="share-icon">{link.icon}</span>
                        <span>{link.name}</span>
                      </button>
                    ))}
                    {copied && (
                      <div className="copy-success">✅ 已复制链接</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* 文章封面 */}
          <div className="article-cover">
            <span className="cover-emoji">{article.image}</span>
          </div>

          {/* 文章内容 */}
          <div className="article-content-wrapper">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* 标签 */}
            <div className="article-tags">
              <span className="tags-label">标签：</span>
              {article.tags.map((tag: string, index: number) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            {/* 点赞和收藏 */}
            <div className="article-actions">
              <button className="action-btn-like">
                👍 赞 ({article.views})
              </button>
              <button className="action-btn-collect">
                ⭐ 收藏
              </button>
            </div>
          </div>

          {/* 评论区 */}
          <section className="comments-section">
            <h2 className="comments-title">💬 评论 ({comments.length})</h2>
            
            {/* 发表评论 */}
            <form onSubmit={handleAddComment} className="comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="写下你的评论..."
                className="comment-input"
                rows={4}
                required
              />
              <div className="comment-form-footer">
                <span className="comment-hint">支持 Markdown 语法</span>
                <button type="submit" className="comment-submit">
                  发表评论
                </button>
              </div>
            </form>

            {/* 评论列表 */}
            <div className="comments-list">
              {comments.map(comment => (
                <div key={comment.id} className="comment-item fade-in">
                  <div className="comment-avatar">{comment.avatar}</div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-date">{comment.date}</span>
                    </div>
                    <p className="comment-text">{comment.content}</p>
                    <div className="comment-actions">
                      <button className="comment-action-btn">
                        👍 {comment.likes}
                      </button>
                      <button className="comment-action-btn">
                        💬 回复
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* 侧边栏目录 */}
        {tableOfContents.length > 0 && (
          <aside className="toc-sidebar">
            <div className="toc-content">
              <h3 className="toc-title">📑 目录</h3>
              <nav className="toc-nav">
                {tableOfContents.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link level-${item.level} ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>

      {/* 相关文章推荐 */}
      <section className="related-section">
        <div className="container">
          <h2 className="related-title">相关阅读</h2>
          <div className="related-grid">
            {Object.entries(articles)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedArticle]: [string, any]) => (
                <Link to={`/article/${key}`} key={key} className="related-card">
                  <span className="related-emoji">{relatedArticle.image}</span>
                  <h3 className="related-title-text">{relatedArticle.title}</h3>
                  <span className="related-category">{relatedArticle.category}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
