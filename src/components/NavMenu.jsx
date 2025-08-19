import { useState, useEffect } from 'react';
import './NavMenu.css';

export default function NavMenu({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const scrollY = -parseInt(document.body.style.top || '0');
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navmenu-container" aria-label="Menu principal">
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu <span className={`arrow ${menuOpen ? 'open' : ''}`}>▼</span>
      </button>

      <ul id="menu" className={`menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
