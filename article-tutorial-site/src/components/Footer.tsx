import { useState, useCallback, useMemo } from 'react';
import './Footer.css';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: '🐙', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: '微信', icon: '💬', url: '#' },
  { name: '微博', icon: '🌐', url: '#' },
];

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  }, [email]);

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="footer-icon">📚</span>
              知识学堂
            </h3>
            <p className="footer-description">
              分享优质文章与教程，让学习变得更简单。
              我们致力于提供高质量的学习内容，帮助您在各个领域快速成长。
            </p>
            <div className="social-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">订阅更新</h4>
            <p className="footer-contact">
              订阅我们的通讯，获取最新文章和教程通知
            </p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="输入您的邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
                required
                aria-label="邮箱地址"
              />
              <button type="submit" className="subscribe-btn">
                订阅
              </button>
            </form>
            {isSubscribed && (
              <div className="subscribe-success" role="status">
                ✅ 订阅成功！感谢您的关注
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 知识学堂。All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
