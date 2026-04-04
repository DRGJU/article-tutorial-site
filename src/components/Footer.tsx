import { useMemo } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

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
