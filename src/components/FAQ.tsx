import { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqItems = [
    {
      question: "プログラミングの経験がなくても参加できますか？",
      answer: "はい、参加可能です。アイデアさえあればそれを形にすることができるので、必要なのは飛び込む勇気だけです！。"
    },
    {
      question: "必要な持ち物はありますか？",
      answer: "ノートパソコン等、充電器、筆記用具をご持参くださると助かります！もし難しい場合は事前にインスタでご相談いただけると、主催者側で用意できるものもあります。"
    },
    {
      question: "食事はどうなりますか？",
      answer: "ランチは各自でご用意いただくことをお勧めします。"
    },
    {
      question: "使用できるAI技術に制限はありますか？",
      answer: "基本的に制限はありませんが、有料のAPI等を使用する場合は各チームでご負担ください。主催者側からは基本的なクラウド環境とAI開発ツールのクレジットを提供します。推奨はGoogle Ai studioです。"
    },
    {
      question: "知的財産権はどうなりますか？",
      answer: "開発された成果物の知的財産権は、原則として開発したチームに帰属します。ただし、イベントの記録や広報活動のために、主催者が成果物を紹介する場合があります。"
    },
    {
      question: "参加費用はかかりますか？",
      answer: "参加費は無料~1000円(年齢によって変化します)です。ただし、交通費は各自でご負担ください。"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 data-aos="fade-up">よくある質問</h2>
      
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <div className="faq-icon">{activeIndex === index ? '−' : '＋'}</div>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
