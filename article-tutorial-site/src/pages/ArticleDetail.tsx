import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';

// 模拟文章数据 - 后续可以根据实际需要从 API 获取
const ARTICLES_DATA: Record<string, any> = {
  '1': {
    title: 'Docker 安装与配置完全指南',
    content: `
      <h2 id="intro">🐳 Docker 安装与配置完全指南</h2>
      
      <p>Docker 是一个开源的容器化平台，它让开发者可以将应用及其依赖打包到一个轻量级、可移植的容器中。本文将详细介绍 Docker 的安装、配置和使用方法。</p>
      
      <h3 id="what-is-docker">1️⃣ 什么是 Docker？</h3>
      <p>Docker 使用容器化技术，让应用可以在隔离的环境中运行。与虚拟机相比，容器更加轻量级，启动速度更快，资源利用率更高。</p>
      
      <h3 id="windows-install">2️⃣ Windows 系统安装 Docker</h3>
      
      <h4 id="wsl2-requirement">前置要求：WSL 2</h4>
      <p>Docker Desktop 需要 WSL 2（Windows Subsystem for Linux）支持。首先检查并安装 WSL 2：</p>
      
      <pre><code class="language-powershell"># 以管理员身份打开 PowerShell，执行：
wsl --install

# 查看已安装的 WSL 版本
wsl --list --verbose

# 设置 WSL 默认版本为 2
wsl --set-default-version 2</code></pre>

      <h4 id="docker-desktop-install">安装 Docker Desktop</h4>
      <ol>
        <li>访问 <a href="https://www.docker.com/products/docker-desktop" target="_blank">Docker 官网</a> 下载 Docker Desktop</li>
        <li>运行安装程序，按照提示完成安装</li>
        <li>启动 Docker Desktop，等待初始化完成</li>
        <li>在终端验证安装：
        <pre><code class="language-powershell">docker --version
docker compose version</code></pre>
        </li>
      </ol>

      <h3 id="macos-install">3️⃣ macOS 系统安装 Docker</h3>
      
      <h4 id="mac-intel">Intel 芯片 Mac</h4>
      <pre><code class="language-bash"># 使用 Homebrew 安装
brew install --cask docker

# 或者从官网下载 .dmg 文件安装</code></pre>

      <h4 id="mac-apple-silicon">Apple Silicon (M1/M2/M3) Mac</h4>
      <pre><code class="language-bash"># 下载支持 Apple Silicon 的 Docker Desktop 版本
# 官网会自动识别并提供对应版本</code></pre>

      <h3 id="linux-install">4️⃣ Linux 系统安装 Docker</h3>
      
      <h4 id="ubuntu-install">Ubuntu/Debian</h4>
      <pre><code class="language-bash"># 更新包索引
sudo apt-get update

# 安装必要的依赖
sudo apt-get install ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 添加 Docker 仓库
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 验证安装
sudo docker run hello-world</code></pre>

      <h4 id="centos-install">CentOS/RHEL</h4>
      <pre><code class="language-bash"># 移除旧版本
sudo yum remove docker docker-common docker-selinux docker-engine

# 安装 yum 工具包
sudo yum install -y yum-utils

# 添加 Docker 仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
sudo docker run hello-world</code></pre>

      <h3 id="configuration">5️⃣ Docker 配置优化</h3>
      
      <h4 id="mirror-config">配置镜像加速器（中国大陆）</h4>
      <p>编辑 Docker 配置文件 <code>/etc/docker/daemon.json</code>：</p>
      <pre><code class="language-json">{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ],
  "log-driver": "json-file",
  "log-level": "warn",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "bip": "172.18.0.1/24",
  "exec-opts": ["native.cgroupdriver=systemd"],
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}</code></pre>

      <h4 id="restart-docker">重启 Docker 服务</h4>
      <pre><code class="language-bash"># Linux
sudo systemctl daemon-reload
sudo systemctl restart docker

# Windows/Mac
# 在 Docker Desktop 中点击 Restart 按钮</code></pre>

      <h3 id="basic-commands">6️⃣ 常用 Docker 命令</h3>
      
      <h4 id="image-commands">镜像管理</h4>
      <pre><code class="language-bash"># 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 删除镜像
docker rmi &lt;image_id&gt;

# 构建镜像
docker build -t myimage:tag .</code></pre>

      <h4 id="container-commands">容器管理</h4>
      <pre><code class="language-bash"># 创建并启动容器
docker run -d -p 8080:80 --name mycontainer nginx

# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止）
docker ps -a

# 停止容器
docker stop &lt;container_id&gt;

# 启动已停止的容器
docker start &lt;container_id&gt;

# 重启容器
docker restart &lt;container_id&gt;

# 删除容器
docker rm &lt;container_id&gt;

# 查看容器日志
docker logs &lt;container_id&gt;

# 进入容器
docker exec -it &lt;container_id&gt; bash</code></pre>

      <h3 id="best-practices">7️⃣ 最佳实践</h3>
      
      <ul>
        <li><strong>使用官方镜像：</strong>优先选择官方维护的镜像，安全性更有保障</li>
        <li><strong>指定版本标签：</strong>避免使用 latest 标签，明确指定版本号</li>
        <li><strong>多阶段构建：</strong>减小最终镜像体积，提高安全性</li>
        <li><strong>清理无用资源：</strong>定期清理停止的容器和悬空镜像
        <pre><code class="language-bash"># 清理所有停止的容器
docker container prune

# 清理悬空镜像
docker image prune

# 清理所有未使用的资源
docker system prune</code></pre>
        </li>
        <li><strong>使用 .dockerignore：</strong>排除不需要的文件，加快构建速度</li>
        <li><strong>限制资源使用：</strong>为容器设置 CPU 和内存限制
        <pre><code class="language-bash">docker run -d --memory="512m" --cpus="1.0" nginx</code></pre>
        </li>
      </ul>

      <h3 id="troubleshooting">8️⃣ 常见问题解决</h3>
      
      <h4 id="permission-error">权限错误（Linux）</h4>
      <pre><code class="language-bash"># 将当前用户添加到 docker 组
sudo usermod -aG docker $USER

# 重新登录或执行
newgrp docker</code></pre>

      <h4 id="wsl-error">WSL 2 相关错误（Windows）</h4>
      <pre><code class="language-powershell"># 更新 WSL
wsl --update

# 重启 WSL
wsl --shutdown

# 在 Docker Desktop 中重新启用 WSL 2 集成</code></pre>

      <h3 id="conclusion">📝 总结</h3>
      <p>通过本文，您已经完成了 Docker 的安装和基础配置。接下来可以：</p>
      <ul>
        <li>学习编写 Dockerfile 创建自定义镜像</li>
        <li>使用 Docker Compose 管理多容器应用</li>
        <li>探索 Docker 网络和数据卷管理</li>
        <li>了解容器编排工具如 Kubernetes</li>
      </ul>
      
      <blockquote>
        "容器化是现代化应用部署的关键技术，Docker 让这一切变得简单。"
      </blockquote>
      
      <p>祝您使用 Docker 愉快！🎉</p>
    `,
    category: '技术',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '15 分钟',
    image: '🐳',
    tags: ['Docker', '容器化', 'DevOps', '教程'],
    views: 0
  }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = useMemo(() => ARTICLES_DATA[id || '1'] || ARTICLES_DATA['1'], [id]);
  const [tableOfContents, setTableOfContents] = useState<Array<{id: string, text: string, level: number}>>([]);
  const [activeSection, setActiveSection] = useState('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
              <div className="article-header-top">
                <span className="article-category-badge">{article.category}</span>
                <h1 className="article-title">{article.title}</h1>
              </div>
              
              <div className="article-meta">
                <div className="meta-actions">
                  <div className="share-section">
                    <button 
                      className="share-btn"
                      onClick={() => setIsShareOpen(!isShareOpen)}
                      aria-label="分享文章"
                    >
                      <span className="share-icon-btn">🔗</span>
                      <span>分享</span>
                    </button>
                    {isShareOpen && (
                      <div className="share-menu slide-in">
                        {shareLinks.map(link => (
                          <button
                            key={link.id}
                            className="share-option"
                            onClick={() => handleShare(link.id)}
                            type="button"
                          >
                            <span className="share-icon">{link.icon}</span>
                            <span>{link.name}</span>
                          </button>
                        ))}
                        {copied && (
                          <div className="copy-success" role="status">✅ 已复制链接</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
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
          </div>
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
            {Object.entries(ARTICLES_DATA)
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
