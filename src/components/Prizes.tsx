import '../styles/Prizes.css';

const Prizes = () => {
  const prizes = [
    {
      title: "グランプリ",
      prize: "賞金10万円 + 特別副賞",
      description: "総合的に最も優れたプロジェクト"
    },
    {
      title: "技術賞",
      prize: "副賞あり",
      description: "最も技術的に洗練されたプロジェクト"
    },
    {
      title: "アイデア賞",
      prize: "副賞あり",
      description: "最も革新的なアイデアを持つプロジェクト"
    },
    {
      title: "地域貢献賞",
      prize: "副賞あり",
      description: "地域課題の解決に最も貢献するプロジェクト"
    }
  ];

  const criteria = [
    {
      title: "技術力",
      description: "AI技術の適切さと実装の完成度"
    },
    {
      title: "革新性",
      description: "アイデアの独自性と革新性"
    },
    {
      title: "実現可能性",
      description: "ビジネスとしての実現可能性と持続性"
    },
    {
      title: "プレゼンテーション",
      description: "デモの質とプレゼンのわかりやすさ"
    },
    {
      title: "社会的影響",
      description: "社会や地域に与える潜在的な正の影響"
    }
  ];

  return (
    <div className="prizes">
      <h2 data-aos="fade-up">賞品・審査基準</h2>
      
      <div className="prizes-section">
        <h3 data-aos="fade-up" data-aos-delay="100">賞品</h3>
        <div className="prize-cards">
          {prizes.map((prize, index) => (
            <div className="prize-card" key={index} data-aos="flip-up" data-aos-delay={150 * (index + 1)}>
              <h4>{prize.title}</h4>
              <div className="prize-value animate-pulse">{prize.prize}</div>
              <p>{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="criteria-section">
        <h3 data-aos="fade-up" data-aos-delay="100">審査基準</h3>
        <div className="criteria-list">
          {criteria.map((criterion, index) => (
            <div className="criterion hover-scale" key={index} data-aos="fade-right" data-aos-delay={150 * (index + 1)}>
              <h4>{criterion.title}</h4>
              <p>{criterion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prizes;
