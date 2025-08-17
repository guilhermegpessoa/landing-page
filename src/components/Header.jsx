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
      <div className="header-bar">
        <p>
          CENTRAL DE VENDAS: <img src="src/assets/iconPhone.png" />{' '}
          <span> (31)4000-1667 </span>
          <img src="src/assets/iconWhatsapp.png" /> <span>(31) 2534-2115</span>
        </p>
      </div>
      <nav className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <NavMenu links={links} />
        <div className="customer">
          <a>
            <img src="src/assets/iconCustomer.png" /> Área do Cliente &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
