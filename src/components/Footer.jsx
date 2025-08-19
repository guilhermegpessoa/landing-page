import { FaEnvelope } from 'react-icons/fa';
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
  return (
    <footer className="footer">
      <div className="color-footer">
        <div className="color-block green"></div>
        <div className="color-block purple"></div>
        <div className="color-block yellow"></div>
        <div className="color-block darkGreen"></div>
      </div>
      <div className="footer-container">
        <div className="footer-col">
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

        <hr />

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

        <div className="footer-col">
          <p>FORMAS DE PAGAMENTO:</p>
          <p>Crédito em até 12 vezes</p>
          <div className="payment-icons">
            <img src={logoMastercard} alt="Mastercard" />
            <img src={logoVisa} alt="Visa" />
            <img src={logoAmex} alt="Amex" />
            <img src={logoElo} alt="Elo" />
            <img src={logoDiners} alt="Diners" />
            <img src={logoHiper} alt="Hipercard" />
          </div>
          <p>Boleto bancário</p>
          <img src={logoBoleto} alt="Boleto" />
          <img src={logoDesconto} alt="Desconto" />
          <p>Transferência bancária</p>
          <img src={logoBancos} alt="Bancos" />
          <p>Pagamento com pix</p>
          <img src={logoPix} alt="PIX" />
        </div>

        <hr className="hr-green" />

        <div className="footer-bottom">
          <p>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º
            andar - Belo Horizonte - MG © 2017
          </p>
          <p> Seguros Promo - Emitir Shop | By - 2XT Tecnologia</p>
        </div>
        <img src={footerImg} />
      </div>
    </footer>
  );
};

export default Footer;
