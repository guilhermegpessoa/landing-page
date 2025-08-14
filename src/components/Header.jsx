import logo from '../assets/logo.png';
import NavMenu from './NavMenu';
import './Header.css';

export default function Header() {
  const links = [
    { label: 'Seguro de Vida', href: '#seguro' },
    { label: 'Multi-trip', href: '#multitrip' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Afiliados', href: '#afiliados' },
    { label: 'Blog', href: '#blog' },
    { label: 'Área do Cliente', href: '#areadocliente' },
  ];

  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <NavMenu links={links} />
      </nav>
    </header>
  );
}
