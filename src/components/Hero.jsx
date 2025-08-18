import { useState, useEffect } from 'react';
import './Hero.css';
import Button from './Button.jsx';

export default function Hero({
  title,
  text,
  buttonText,
  onButtonClick,
  backgroundImage,
  backgroundImageMobile,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${isMobile ? backgroundImageMobile : backgroundImage})`,
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>{title}</h1>
        <div className="hero-content-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="hero-button-container">
        <Button
          onClick={onButtonClick}
          text={buttonText}
          className="btn-hero"
        />
      </div>
    </section>
  );
}
