import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

const articleContents: Record<number, string> = {
  1: `
    <h2>Docker 安装与配置完全指南</h2>
    <p>本教程将带你从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践。</p>
    
    <h3>1. Docker 简介</h3>
    <p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中。</p>
    
    <h3>2. 安装 Docker</h3>
    <pre><code># Ubuntu 安装
sudo apt-get update
sudo apt-get install docker.io

# 验证安装
docker --version</code></pre>
    
    <h3>3. 配置 Docker</h3>
    <p>配置 Docker 镜像加速器可以提高下载速度。</p>
    
    <h3>4. 常用 Docker 命令</h3>
    <pre><code># 运行容器
docker run hello-world

# 查看容器
docker ps

# 停止容器
docker stop &lt;container_id&gt;</code></pre>
  `,
  2: `
    <h2>计算机科学导论</h2>
    <p>全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构等核心知识。</p>
    
    <h3>1. 计算机基础</h3>
    <p>了解计算机的工作原理、硬件组成和软件系统。</p>
    
    <h3>2. 编程基础</h3>
    <p>学习编程的基本概念、变量、循环、函数等。</p>
    
    <h3>3. 数据结构</h3>
    <p>数组、链表、栈、队列、树等基本数据结构。</p>
    
    <h3>4. 算法</h3>
    <p>排序、搜索、动态规划等经典算法。</p>
  `,
  3: `
    <h2>编码：隐匿在计算机软件背后的语言</h2>
    <p>从零开始系统讲解编码、二进制、逻辑电路到计算机工作原理的完整知识体系。</p>
    
    <h3>1. 编码的历史</h3>
    <p>从摩尔斯电码到现代计算机编码的发展历程。</p>
    
    <h3>2. 二进制系统</h3>
    <p>理解计算机如何使用 0 和 1 表示所有信息。</p>
    
    <h3>3. 逻辑电路</h3>
    <p>与门、或门、非门等基本逻辑电路的工作原理。</p>
  `,
  4: `
    <h2>网络是怎样连接的</h2>
    <p>系统讲解从输入 URL 到网页显示的完整网络过程，涵盖 HTTP、DNS、TCP/IP 等核心知识。</p>
    
    <h3>1. 浏览器的工作原理</h3>
    <p>当你在浏览器中输入 URL 后会发生什么？</p>
    
    <h3>2. DNS 解析</h3>
    <p>域名如何转换为 IP 地址。</p>
    
    <h3>3. HTTP 协议</h3>
    <p>超文本传输协议的工作原理。</p>
    
    <h3>4. TCP/IP 协议栈</h3>
    <p>网络通信的基础协议。</p>
  `,
  5: `
    <h2>Python 编程：从入门到实践</h2>
    <p>从零开始系统讲解 Python 编程的基础知识和实践项目。</p>
    
    <h3>1. Python 基础语法</h3>
    <pre><code># Hello World
print("Hello, World!")

# 变量
name = "Python"
version = 3.9

# 循环
for i in range(5):
    print(i)</code></pre>
    
    <h3>2. 函数和模块</h3>
    <p>学习如何定义函数和导入模块。</p>
    
    <h3>3. 实践项目</h3>
    <p>通过实际项目巩固所学知识。</p>
  `,
  6: `
    <h2>深入理解计算机系统</h2>
    <p>基于 CSAPP 经典教材，系统讲解计算机系统的核心概念和原理。</p>
    
    <h3>1. 数据的表示</h3>
    <p>整数、浮点数的机器级表示。</p>
    
    <h3>2. 汇编语言</h3>
    <p>理解程序的机器级执行过程。</p>
    
    <h3>3. 处理器架构</h3>
    <p>CPU 设计、流水线技术。</p>
    
    <h3>4. 存储器层次结构</h3>
    <p>Cache、主存、虚拟内存的工作原理。</p>
    
    <h3>5. 系统编程</h3>
    <p>链接、异常控制流、进程、I/O、网络、并发编程。</p>
  `
};

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || '0');
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>文章未找到</h1>
      <Link to="/articles" style={{ color: '#e94560', marginTop: '20px', display: 'inline-block' }}>
        ← 返回文章列表
      </Link>
    </div>;
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/articles" style={{ color: '#888', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← 返回文章列表
      </Link>
      
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>{article.image}</div>
      <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>{article.title}</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', color: '#888', fontSize: '14px' }}>
        <span>分类：{article.category}</span>
        <span>日期：{article.date}</span>
      </div>
      
      <div 
        style={{ lineHeight: '1.8', fontSize: '16px' }}
        dangerouslySetInnerHTML={{ __html: articleContents[articleId] || '<p>文章内容加载中...</p>' }}
      />
    </article>
  );
}

export default ArticleDetail;
