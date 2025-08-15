import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            aria-expanded={activeIndex === index}
            onClick={() => toggleIndex(index)}
          >
            {item.title}
          </button>
          <hr />
          <div
            className={`accordion-content ${
              activeIndex === index ? 'open' : ''
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
