import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2 data-aos="fade-up">ハッカソン概要</h2>
      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <p>
            富士宮AIハッカソンは、富士山の麓にある美しい富士宮市で開催される計3日間のイベントです。
            参加者はAI技術を活用して、地域が抱える課題解決や新たなサービスの開発に取り組みます。
            
          </p>
          <p>
            初心者からベテランまで、AIに興味がある方なら誰でも参加可能です。
            技術的スキルだけでなく、アイデアの革新性や実現可能性も重視されるため、
            様々なバックグラウンドを持つ方々の参加をお待ちしています。
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-item hover-scale" data-aos="fade-up" data-aos-delay="100">
            <h3>参加対象</h3>
            <p>目安は中学生~大学生です。
              <br />ただし、AIに関心のある全ての方は大歓迎！</p>
          </div>
          <div className="highlight-item hover-scale" data-aos="fade-up" data-aos-delay="200">
            <h3>開催日程</h3>
            <p>2025年8月3日(日) 〜 8月30日(日)
              <br />毎週日曜に開催予定です。
            </p>
          </div>
          <div className="highlight-item hover-scale" data-aos="fade-up" data-aos-delay="300">
            <h3>参加費</h3>
            <p>1000円（事前申し込み制）</p>
          </div>
          <div className="highlight-item hover-scale" data-aos="fade-up" data-aos-delay="400">
            <h3>定員</h3>
            <p>20名程度</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
