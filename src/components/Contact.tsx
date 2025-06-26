import React from 'react';
import '../styles/Contact.css';
import QRImage from './images/QR.png';

const Contact = () => {
  return (
    <div className="contact">
      <h2 data-aos="fade-up">参加申し込み・お問い合わせ</h2>
      
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h3>お気軽にお問い合わせください</h3>
          <p>
            富士宮AIハッカソンについてのご質問や参加に関するお問い合わせは、
            以下のGoogle Formからお送りいただくか、SNSでご連絡ください。
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>主催：</strong> 富士宮市AIイノベーション推進協議会
            </div>
            <div className="contact-item">
              <strong>運営：</strong> 富士宮市地域おこし協力隊
            </div>
            <div className="social-links">
              <h4>関連リンク</h4>
              <div className="links-grid">
                <div className="link-item">
                  <a href="https://www.city.fujinomiya.lg.jp/1015100000/p002985.html" target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="link-icon">
                      <img src="/assets/website-icon.svg" alt="地域おこし協力隊サイト" />
                    </div>
                    <div className="link-text">
                      <span className="link-title">地域おこし協力隊</span>
                      <span className="link-subtitle">公式サイト</span>
                    </div>
                  </a>
                </div>
                <div className="link-item">
                  <a href="https://www.instagram.com/fujinomiya.okoshi/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="link-icon">
                      <img src="/assets/instagram-icon.svg" alt="Instagram" />
                    </div>
                    <div className="link-text">
                      <span className="link-title">地域おこし協力隊</span>
                      <span className="link-subtitle">Instagram</span>
                    </div>
                  </a>
                </div>
                <div className="link-item">
                  <a href="https://www.instagram.com/fujinomiya_hackathon/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="link-icon">
                      <img src="/assets/instagram-icon.svg" alt="Instagram" />
                    </div>
                    <div className="link-text">
                      <span className="link-title">AIハッカソン</span>
                      <span className="link-subtitle">Instagram</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="google-form-container" data-aos="fade-left">
          <h3>参加申し込みはこちら</h3>
          <div className="form-wrapper">
            <div className="qr-code">
              <img src={QRImage} alt="Google Form QR Code" className="hover-scale" />
            </div>
            <div className="form-link">
              <p>QRコードを読み取るか、以下のリンクから申し込みフォームにアクセスしてください。</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSep0p0w_39q6CWQjq_eiJcVgoA0SJyFOyNHxkNlS8Pb0lvdww/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn primary-btn pulse">
                申し込みフォームを開く
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
