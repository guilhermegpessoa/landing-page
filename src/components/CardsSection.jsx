import Card from './Card';
import cardsData from '../data/cardsData';
import Slider from 'react-slick';
import './CardsSection.css';

export default function CardsSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="cards-container">
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
    </div>
  );
}
