import '../styles/Venue.css';

const Venue = () => {
  return (
    <div className="venue">
      <h2 data-aos="fade-up">会場情報</h2>
      
      <div className="venue-container">
        <div className="venue-info" data-aos="fade-right">
          <h3 className="venue-title">エキマエチャレンジハウス Chill in (チリン)</h3>
          <p className="venue-address">
            〒418-0067 静岡県富士宮市宮町14-12
          </p>
          
          <div className="facility-info">
            <h4>設備・環境</h4>
            <ul>
              <li>高速Wi-Fi完備</li>
              <li>電源コンセント豊富</li>
              <li>開放的なワークスペース</li>
              <li>プレゼンテーション用設備</li>
              <li>コーヒー・軽食の提供</li>
              <li>リラックスできるチルアウトエリア</li>
            </ul>
          </div>
        </div>
        
        <div className="venue-map" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8!2d138.61494937628726!3d35.2236598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bf3dc77e29187%3A0x42a4a2901d05661f!2z44Ko44Kt44Oe44Ko44OB44Oj44Os44Oz44K444OP44Km44K544CA5oCl6Lu644G444KK44KS!5e0!3m2!1sja!2sjp!4v1699500000000!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="エキマエチャレンジハウス Chill in (チリン)の地図"
            className="map-frame"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Venue;
