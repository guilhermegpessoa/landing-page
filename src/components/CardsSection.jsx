import { useState, useEffect } from 'react';
import Card from './Card';
import cardsData from '../data/cardsData';
import Slider from 'react-slick';
import './CardsSection.css';

export default function CardsSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="cards-container">
      {isMobile ? (
        <div className="cards-mobile">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              onButtonClick={() => {}}
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              onButtonClick={() => {}}
            />
          ))}
        </Slider>
      )}
    </div>
  );
}
