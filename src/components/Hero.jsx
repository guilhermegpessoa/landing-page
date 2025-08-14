import './Hero.css';

export default function Hero({
  title,
  text,
  buttonText,
  onButtonClick,
  backgroundImage,
}) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </section>
  );
}
