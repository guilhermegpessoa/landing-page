import { useState, useEffect } from 'react';
import Accordion from './components/Accordion';
import BackToTopButton from './components/BackToTopButton';
import Button from './components/Button';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import accordionData from './data/accordionData';
import heroImage from './assets/hero.webp';
import heroImageMobile from './assets/heroMobile.webp';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <Hero
            title="Tranquilidade para viver mais"
            text="Viva mais e melhor com os benefícios que um serguro de vida te
            oferece"
            buttonText="Faça sua cotação"
            backgroundImage={heroImage}
            backgroundImageMobile={heroImageMobile}
          />
        </section>

        <section className="quote">
          <div className="quote-container">
            <div className="quote-image">
              <img
                src="src/assets/sectionQuote.webp"
                alt="Planos personalizados"
              />
            </div>
            <div className="quote-text">
              <h2>Planos personalizados e sem burocracia</h2>
              <ul>
                <li>
                  <span>1.</span> Informe seus dados
                </li>
                <li>
                  <span>2.</span> Descubra o plano ideal para o seu perfil
                </li>
                <li>
                  <span>3.</span> Escolha sua forma de pagamento e contrate 100%
                  online
                </li>
              </ul>
              <p className="quote-highlight">
                Pronto! Agora você e sua família têm todos os benefícios de
                viver com segurança total
              </p>
              {!isMobile && (
                <button className="quote-btn">Faça sua cotação</button>
              )}
            </div>
            {isMobile && (
              <button className="quote-btn">Faça sua cotação</button>
            )}
          </div>
        </section>

        <section className="coverage">
          <div className="coverage-text">
            <h2>Nossas coberturas</h2>
            {isMobile && <p>Contratar um Seguro de Vida garante que:</p>}
            {!isMobile && <p>Veja mais detalhes de cada proteção!</p>}
          </div>
          <CardsSection />
          <Button text="Faça sua cotação" />
        </section>

        <section className="why-insurance" id="why">
          <div className="why-insurance-text">
            <h2 className="desktop-text">Mas por que ter um seguro de vida?</h2>
            <h2 className="mobile-text">Por que ter um seguro de vida?</h2>
          </div>
          <div className="accordion-wrapper">
            <Accordion items={accordionData} />
          </div>
          <div className="why-insurance-image">
            <img src="src/assets/sectionWhy.webp" alt="Seguro de vida" />
          </div>
          <Button text="Faça sua cotação" />
        </section>

        <section className="questions">
          {isMobile && <h2>Ainda tem dúvidas sobre seguro de vida?</h2>}
          {!isMobile && <h2>Ainda não sabe qual seguro contratar?</h2>}
          <div className="questions-content">
            {isMobile && (
              <p>
                Entre em contato e receba uma consultoria personalizada
                gratuitamente
              </p>
            )}
            {!isMobile && (
              <p>
                Ligue pra gente e receba uma consultoria personalizada
                gratuitamente!
              </p>
            )}
            <p>(99) 99999.9999</p>
            <p>Atendemos pelo telefone de seg. a sex., das 9h às 17h.</p>
          </div>
          {isMobile && (
            <button>
              <img src="src/assets/iconWhatsapp.png" />
              Também respondemos pelo Whatsapp!
            </button>
          )}
          {!isMobile && (
            <button>
              <img src="src/assets/iconWhatsapp.png" />
              Se preferir, entre em contato pelo Whatsapp
            </button>
          )}
        </section>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
