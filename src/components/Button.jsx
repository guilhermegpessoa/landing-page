import './Button.css';

export default function Button({
  text,
  onClick,
  type = 'button',
  className = '',
}) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
