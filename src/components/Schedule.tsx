import '../styles/Schedule.css';
import yousuImage from './images/yousu2.png';
import skipSmileImage from './images/skip_smile.png';

const Schedule = () => {
  const scheduleItems = [
    {
      day: "Day 1",
      date: "8月3日(日)",
      events: [
        { time: "10:00 - 10:30", title: "受付・開会式" },
        { time: "10:30 - 11:00", title: "協賛・主催者紹介" },
        { time: "11:00 - 12:00", title: "チーム編成・アイデア出し" },
        { time: "12:00 - 13:00", title: "昼食・休憩" },
        { time: "13:00 - 14:00", title: "企画書作成・プランニング" },
        { time: "14:00 - 15:30", title: "開発作業" },
        { time: "15:30 - 16:00", title: "1日目振り返り・進捗共有" }
      ]
    },
    {
      day: "Day 2",
      date: "8月10日(日)",
      events: [
        { time: "10:00 - 10:30", title: "朝礼・進捗確認" },
        { time: "10:30 - 12:00", title: "開発作業" },
        { time: "12:00 - 13:00", title: "昼食・休憩" },
        { time: "13:00 - 15:30", title: "開発作業継続" },
        { time: "15:30 - 16:00", title: "2日目振り返り・進捗共有" }
      ]
    },
    {
      day: "Day 3",
      date: "8月17日(日)",
      events: [
        { time: "10:00 - 11:00", title: "最終開発・仕上げ作業" },
        { time: "11:00 - 12:00", title: "プレゼンテーション準備" },
        { time: "12:00 - 13:00", title: "昼食・休憩" },
        { time: "13:00 - 14:30", title: "プレゼンテーション・審査" },
        { time: "14:30 - 15:00", title: "結果発表・講評" },
        { time: "15:00 - 15:30", title: "表彰式" },
        { time: "15:30 - 16:00", title: "クロージング" },
        { time: "16:00 - 18:00", title: "懇親会・ネットワーキング" }
      ]
    }
  ];

  return (
    <div className="schedule">
      <h2 data-aos="fade-up">イベントスケジュール</h2>
      
      {/* イベント形式の説明 */}
      <div className="event-format" data-aos="fade-up">
        <div className="format-description">
          <h3>🗓️ 開催形式</h3>
          <p>本ハッカソンは<strong>3つの日曜日</strong>に分けて開催されます。各開催日にチリンにお越しいただき、集中的に開発を進めていただきます。(随時更新)</p>
        </div>
      </div>

      <div className="schedule-container">
        {scheduleItems.map((day, index) => (
          <div className="schedule-day" key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <h3>{day.day}<span className="schedule-date">{day.date}</span></h3>
            <div className="timeline">
              {day.events.map((event, eventIndex) => (
                <div className="timeline-item" key={eventIndex} data-aos="fade-left" data-aos-delay={150 * (eventIndex + 1)}>
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-content">
                    <p>{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* サポート情報セクション */}
      <div className="support-section" data-aos="fade-up">
        <h3 className="support-title">開催期間中のサポート</h3>
        
        {/* 楽しく開発している画像 */}
        <div className="support-image-container" data-aos="fade-up">
          <img 
            src={yousuImage} 
            alt="チームで楽しく開発している様子" 
            className="support-image"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'block';
              }
            }}
          />
          <div className="support-image-placeholder" style={{display: 'none'}}>
            <div className="placeholder-content">
              <span className="placeholder-icon">👥💻</span>
              <p>チームで楽しく開発している様子</p>
            </div>
          </div>
        </div>
        
        <div className="support-grid">
          <div className="support-card" data-aos="fade-up" data-aos-delay="100">
            <div className="support-card-image">
              <img 
                src="/assets/support-team.jpg" 
                alt="主催者とサポーター" 
                className="card-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="card-image-placeholder" style={{display: 'none'}}>
                <span className="card-placeholder-icon">🤝</span>
              </div>
            </div>
            <div className="support-card-content">
              <h4>主催者・サポーター在住</h4>
              <p>主催者 河島航とサポーターがチリンに在住するので、チリン開講日にお越しいただければ気軽に尋ねることが可能！</p>
            </div>
          </div>
          
          <div className="support-card" data-aos="fade-up" data-aos-delay="200">
            <div className="support-card-image">
              <img 
                src="/assets/beginner-coding.jpg" 
                alt="初心者でも簡単開発" 
                className="card-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="card-image-placeholder" style={{display: 'none'}}>
                <span className="card-placeholder-icon">🚀</span>
              </div>
            </div>
            <div className="support-card-content">
              <h4>初心者でも簡単開発</h4>
              <p>初心者でも簡単に作ることができる！Google AI Studioで文字を打ち込んで、すぐにアプリができます。
              </p>
            </div>
          </div>
          
          <div className="support-card" data-aos="fade-up" data-aos-delay="300">
            <div className="support-card-image">
              <img 
                src="/assets/idea-to-app.jpg" 
                alt="アイデアからアプリへ" 
                className="card-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <div className="card-image-placeholder" style={{display: 'none'}}>
                <span className="card-placeholder-icon">💡</span>
              </div>
            </div>
            <div className="support-card-content">
              <h4>アイデアからアプリへ</h4>
              <p>アイデアがあれば、それを自然言語に書き起こすことで、簡単にアプリが作れます！
                <br /> 以下のリンクから、Google AI Studioと、それで作ったテトリスを試すことが可能です！
              </p>
              <div className="demo-links">
                <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="demo-link">
                  Google AI Studio を試す
                </a>
                <a href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%2212QKYpGcMv98roAnUYElj0e8Pq82YKtej%22%5D,%22action%22:%22open%22,%22userId%22:%22107285557847694040598%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing" target="_blank" rel="noopener noreferrer" className="demo-link secondary">
                  デモを見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 協賛企業紹介セクション */}
      <div className="sponsors-section" data-aos="fade-up">
        <h3 className="sponsors-title">協賛企業・団体 <span className="coming-soon-badge"></span></h3>
        <div className="sponsors-container">
          <div className="sponsor-card" data-aos="fade-up" data-aos-delay="100">
            <div className="sponsor-logo">
              <div className="sponsor-logo-image">
                <img 
                  src={skipSmileImage} 
                  alt="SKIPスマイル ロゴ" 
                  className="sponsor-logo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="sponsor-logo-placeholder" style={{display: 'none'}}>
                  <span className="sponsor-icon">🎭</span>
                </div>
              </div>
            </div>
            <div className="sponsor-info">
              <h4>SKIPスマイル</h4>
              <p>富士宮市を拠点とする地域密着型のエンターテインメント企業。地域イベントの企画・運営を通じて、富士宮の魅力を発信し、地域コミュニティの活性化に貢献しています。</p>
              <a href="https://www.instagram.com/skipsmile/reels/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                Instagram リールを見る
              </a>
            </div>
          </div>
          
          {/* Coming Soon カード */}
          <div className="sponsor-card coming-soon-card" data-aos="fade-up" data-aos-delay="200">
            <div className="sponsor-logo">
              <div className="sponsor-logo-placeholder coming-soon-logo">
                <span className="sponsor-icon">✨</span>
              </div>
            </div>
            <div className="sponsor-info">
              <h4>Coming Soon...</h4>
              <p>次の協賛企業・団体を準備中です。</p>
              <div className="coming-soon-text">
                近日公開予定 🚀
              </div>
            </div>
          </div>
          
          {/* 2つ目のComing Soon カード */}
          <div className="sponsor-card coming-soon-card" data-aos="fade-up" data-aos-delay="300">
            <div className="sponsor-logo">
              <div className="sponsor-logo-placeholder coming-soon-logo">
                <span className="sponsor-icon">🌟</span>
              </div>
            </div>
            <div className="sponsor-info">
              <h4>Your Company Here</h4>
              <p>あなたの企業・団体もここに掲載されませんか？地域イノベーションを一緒に推進しましょう。</p>
              <div className="coming-soon-text">
                協賛募集中 💫
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 応募情報セクション */}
      <div className="application-section" data-aos="fade-up">
        <h3 className="application-title">参加者・協賛企業 募集中</h3>
        <div className="application-container">
          <div className="application-card" data-aos="fade-right">
            <h4>参加者募集</h4>
            <p>AIの力で地域課題を解決する参加者を募集しています！初心者から上級者まで、どなたでもご参加いただけます。</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSep0p0w_39q6CWQjq_eiJcVgoA0SJyFOyNHxkNlS8Pb0lvdww/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="application-link">
              参加申込フォーム
            </a>
          </div>
          
          <div className="application-card" data-aos="fade-left">
            <h4>協賛企業募集</h4>
            <p>地域のイノベーションを支援していただける企業・団体を募集しています。一緒に富士宮の未来を創造しましょう！</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSep0p0w_39q6CWQjq_eiJcVgoA0SJyFOyNHxkNlS8Pb0lvdww/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="application-link sponsor">
              協賛申込フォーム
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
