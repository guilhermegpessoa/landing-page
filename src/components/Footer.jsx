import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../assets/logoFooter.png';
import footerMenuData from '../data/footerMenuData';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className="social-icons">
            <a href="#">
              <img src="src/assets/Facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="src/assets/Twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="src/assets/Instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <hr />

        <div className="footer-col sales-support">
          <h4>CENTRAL DE VENDAS:</h4>
          <div className="sales-buttons">
            <a href="tel:+553140001667" className="btn-green">
              <img src="src/assets/iconPhone.png" /> (31) 4000-1667
            </a>
            <a href="tel:+5531982042542" className="btn-green">
              <img src="src/assets/iconWhatsapp.png" /> (31) 98204-2542
            </a>
          </div>

          <h4>ATENDIMENTO:</h4>
          <div className="sales-buttons">
            <a href="tel:+553140001667" className="btn-green">
              <img src="src/assets/iconPhone.png" /> (31) 4000-1667
            </a>
            <a href="#" className="btn-green">
              Central de Ajuda
            </a>
            <a
              href="mailto:atendimento@segurospromo.com.br"
              className="btn-green"
            >
              <FaEnvelope /> atendimento@segurospromo.com.br
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
            <img src="src/assets/logoMastercard.png" alt="Mastercard" />
            <img src="src/assets/logoVisa.png" alt="Visa" />
            <img src="src/assets/logoAmex.png" alt="Amex" />
            <img src="src/assets/logoElo.png" alt="Elo" />
            <img src="src/assets/logoDiners.png" alt="Diners" />
            <img src="src/assets/logoHiper.png" alt="Hipercard" />
          </div>
          <p>Boleto bancário</p>
          <img src="src/assets/logoBoleto.png" alt="Boleto" />
          <img src="src/assets/logoDesconto.png" alt="Desconto" />
          <p>Transferência bancária</p>
          <img src="src/assets/logoBancos.png" alt="Bancos" />
          <p>Pagamento com pix</p>
          <img src="src/assets/logoPix.svg" alt="PIX" />
        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º
            andar - Belo Horizonte - MG © 2017
          </p>
          <p> Seguros Promo - Emitir Shop | By - 2XT Tecnologia</p>
        </div>
        <img src="src/assets/footer.png" />
      </div>
    </footer>
  );
};

export default Footer;
