import logo from '../assets/logo.png';
import iconWhatsapp from '../assets/iconWhatsapp.png';
import iconCostumer from '../assets/iconCustomer.png';
import iconPhone from '../assets/iconPhone.png';
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
          CENTRAL DE VENDAS: <img src={iconPhone} />{' '}
          <span> (31)4000-1667 </span>
          <img src={iconWhatsapp} /> <span>(31) 2534-2115</span>
        </p>
      </div>
      <nav className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <NavMenu links={links} />
        <div className="customer">
          <a href="#areadocliente">
            <img src={iconCostumer} alt="Área do Cliente" /> Área do Cliente
            &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
