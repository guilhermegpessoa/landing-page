import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../assets/logoFooter.png';
import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/Twitter.svg';
import instagramIcon from '../assets/Instagram.svg';
import iconEmail from '../assets/iconEmail.svg';
import iconMobile from '../assets/iconMobile.png';
import iconWhatsapp from '../assets/iconWhatsapp.png';
import logoMastercard from '../assets/logoMastercard.png';
import logoVisa from '../assets/logoVisa.png';
import logoAmex from '../assets/logoAmex.png';
import logoElo from '../assets/logoElo.png';
import logoDiners from '../assets/logoDiners.png';
import logoHiper from '../assets/logoHiper.png';
import logoBoleto from '../assets/logoBoleto.png';
import logoDesconto from '../assets/logoDesconto.png';
import logoBancos from '../assets/logoBancos.png';
import logoPix from '../assets/logoPix.svg';
import footerImg from '../assets/footer.png';
import footerMenuData from '../data/footerMenuData';

import './Footer.css';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SalesSupport = () => (
    <div className="footer-col sales-support">
      <h4>CENTRAL DE VENDAS:</h4>
      <div className="sales-buttons">
        <a href="tel:+553140001667" className="btn-green">
          <img src={iconMobile} /> (31) 4000-1667
        </a>
        <a href="tel:+5531982042542" className="btn-green">
          <img src={iconWhatsapp} /> (31) 98204-2542
        </a>
      </div>

      <h4>ATENDIMENTO:</h4>
      <div className="sales-buttons">
        <a href="tel:+553140001667" className="btn-green">
          <img src={iconMobile} /> (31) 4000-1667
        </a>
        <a href="#" className="btn-green">
          Central de Ajuda
        </a>
        <a
          href="mailto:atendimento@segurospromo.com.br"
          className="btn-green btn-email"
        >
          <img src={iconEmail} /> atendimento@segurospromo.com.br
        </a>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      <div className="color-footer">
        <div className="color-block green"></div>
        <div className="color-block purple"></div>
        <div className="color-block yellow"></div>
        <div className="color-block darkGreen"></div>
      </div>
      <div className="footer-container">
        <div className="footer-col footer-social">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className="social-icons">
            <a href="#">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        {!isMobile && (
          <div className="footer-main">
            {footerMenuData.map((menu, index) => (
              <div key={index} className="footer-menu-column">
                <h4>{menu.title}</h4>
                {menu.items.length > 0 && (
                  <ul>
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <SalesSupport />
          </div>
        )}

        <hr />

        {isMobile && (
          <>
            <SalesSupport />
            <hr />
            <div className="footer-menus">
              {footerMenuData.map((menu, index) => (
                <div key={index}>
                  <details>
                    <summary>
                      {menu.title} <IoIosArrowDown />
                    </summary>
                    {menu.items.length > 0 && (
                      <ul>
                        {menu.items.map((item, i) => (
                          <li key={i}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </details>
                  <hr />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="footer-col footer-payments">
          <p>FORMAS DE PAGAMENTO:</p>

          <div>
            <p>Crédito em até 12 vezes</p>
            <div className="payment-icons">
              <img src={logoMastercard} alt="Mastercard" />
              <img src={logoVisa} alt="Visa" />
              <img src={logoAmex} alt="Amex" />
              <img src={logoElo} alt="Elo" />
              <img src={logoDiners} alt="Diners" />
              <img src={logoHiper} alt="Hipercard" />
            </div>
          </div>

          <div>
            <p>Boleto bancário</p>
            <div className="payment-icons">
              <img src={logoBoleto} alt="Boleto" />
              <img src={logoDesconto} alt="Desconto" />
            </div>
          </div>

          <div>
            <p>Transferência bancária</p>
            <div className="payment-icons">
              <img src={logoBancos} alt="Bancos" />
            </div>
          </div>

          <div>
            <p>Pagamento com pix</p>
            <div className="payment-icons">
              <img src={logoPix} alt="PIX" />
            </div>
          </div>
        </div>

        <hr className="hr-green" />

        <div className="footer-bottom">
          <p>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º
            andar - Belo Horizonte - MG © 2017 <br />
            Seguros Promo - Emitir Shop | By - 2XT Tecnologia
          </p>
          <img src={footerImg} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
