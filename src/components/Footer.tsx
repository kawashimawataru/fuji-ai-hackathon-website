import '../styles/Footer.css';
import kawashimaImage from './images/kawashima.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-about">
          <h3>富士宮AIハッカソン</h3>
          <p>
            AIの力で地域の課題を解決し、イノベーションを推進するハッカソンイベント。
            初心者からベテランまで、誰でも参加できます。
          </p>
        </div>

        <div className="footer-links">
          <h4>リンク</h4>
          <ul>
            <li><a href="#home">ホーム</a></li>
            <li><a href="#about">概要</a></li>
            <li><a href="#schedule">スケジュール</a></li>
            <li><a href="#prizes">賞品・審査</a></li>
            <li><a href="#venue">会場情報</a></li>
            <li><a href="#faq">よくある質問</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>フォローする</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/fujinomiya_hackathon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link-icon">
              <img src="/assets/instagram-icon.svg" alt="Instagram" />
            </a>
            <a href="https://www.city.fujinomiya.lg.jp/1015100000/p002985.html" target="_blank" rel="noopener noreferrer" aria-label="地域おこし協力隊サイト" className="social-link-icon">
              <img src="/assets/website-icon.svg" alt="地域おこし協力隊サイト" />
            </a>
          </div>
        </div>

        <div className="footer-organizer">
          <h4>主催者</h4>
          <div className="organizer-info">
            <div className="organizer-image">
              <img 
                src={kawashimaImage} 
                alt="主催者 河島航" 
                className="organizer-photo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="organizer-placeholder" style={{display: 'none'}}>
                <span className="organizer-icon">👨‍💻</span>
              </div>
            </div>
            <div className="organizer-details">
              <p className="organizer-name">河島航</p>
              <p className="organizer-title">富士宮市地域おこし協力隊インターン</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; 2025 富士宮AIハッカソン 主催 河島航. All Rights Reserved.</p>
          <div className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ↑ トップに戻る
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
