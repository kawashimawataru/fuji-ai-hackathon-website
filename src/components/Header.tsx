import { useState, useEffect } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo" onClick={() => handleClick('home')}>
          <span className="logo-text">富士宮AIハッカソン</span>
        </div>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => handleClick('home')}
            >ホーム</a></li>
            <li><a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => handleClick('about')}
            >概要</a></li>
            <li><a 
              href="#schedule" 
              className={activeSection === 'schedule' ? 'active' : ''} 
              onClick={() => handleClick('schedule')}
            >スケジュール</a></li>
            <li><a 
              href="#prizes" 
              className={activeSection === 'prizes' ? 'active' : ''} 
              onClick={() => handleClick('prizes')}
            >賞品・審査</a></li>
            <li><a 
              href="#venue" 
              className={activeSection === 'venue' ? 'active' : ''} 
              onClick={() => handleClick('venue')}
            >会場</a></li>
            <li><a 
              href="#faq" 
              className={activeSection === 'faq' ? 'active' : ''} 
              onClick={() => handleClick('faq')}
            >FAQ</a></li>
            <li><a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => handleClick('contact')}
            >申し込み</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
