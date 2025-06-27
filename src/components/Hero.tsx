import '../styles/Hero.css';
import testImage from './images/yousu.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content" data-aos="fade-right">
        <div className="hero-catchphrase" data-aos="fade-down">
          <span className="catchphrase-text">🌟 夏休みでAI力を鍛えよう！</span>
        </div>
        <h1 className="animate-text">富士宮AIハッカソン 2025 Summer</h1>
        <p className="hero-subtitle" data-aos="fade-right" data-aos-delay="200">言葉とアイデアがアプリになる！
          <br /> 君も未来のプログラマーだ！</p>
        <p className="hero-description" data-aos="fade-right" data-aos-delay="400">
          2025年8月3日(日)開始 
          <br />@エキマエチャレンジハウス Chill in (チリン)
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <a href="#contact" className="btn primary-btn animate-pulse">参加申し込み</a>
          <a href="#about" className="btn secondary-btn">詳細を見る</a>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
        <img src={testImage} alt="富士宮AIハッカソン" className="animate-float" />
      </div>
    </div>
  );
};

export default Hero;
