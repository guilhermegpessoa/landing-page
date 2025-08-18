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
            <span
              className={`accordion-arrow ${activeIndex === index ? 'open' : ''}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          <div
            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
          >
            <p>{item.content}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
