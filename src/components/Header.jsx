import logo from '../assets/logo.png';
import iconWhatsapp from '../assets/iconWhatsapp.png';
import iconCostumer from '../assets/iconCustomer.png';
import iconMobile from '../assets/iconMobile.png';
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
      <div role="region" aria-label="Central de vendas" className="header-bar">
        <p>
          CENTRAL DE VENDAS:{' '}
          <img src={iconMobile} alt="Telefone" loading="lazy" />{' '}
          <span aria-label="Ligar para (31) 4000-1667">(31)4000-1667</span>
          <img src={iconWhatsapp} alt="WhatsApp" loading="lazy" />
          <span aria-label="Ligar para WhatsApp (31) 2534-2115">
            (31) 2534-2115
          </span>
        </p>
      </div>

      <nav className="container" aria-label="Menu principal">
        <a href="#" className="logo" aria-label="Página inicial">
          <img src={logo} alt="Seguros Promo" />
        </a>
        <NavMenu links={links} />
        <div className="customer">
          <a href="#areadocliente" aria-label="Acessar Área do Cliente">
            <img src={iconCostumer} alt="Área do Cliente" loading="lazy" /> Área
            do Cliente &rarr;
          </a>
        </div>
      </nav>
    </header>
  );
}
