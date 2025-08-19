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
import sectionQuoteImg from './assets/sectionQuote.webp';
import sectionWhyImg from './assets/sectionWhy.webp';
import iconWhatsapp from './assets/iconWhatsapp.png';
import iconPhone from './assets/iconPhone.png';
import sectionQuestionsBg from './assets/sectionQuestions.webp';
import sectionQuestionsMobileBg from './assets/sectionQuestionsMobile.webp';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const questionsBgImg = isMobile
    ? sectionQuestionsMobileBg
    : sectionQuestionsBg;

  return (
    <>
      <Header />

      <main>
        <Hero
          title="Tranquilidade para viver mais"
          text="Viva mais e melhor com os benefícios que um seguro de vida te oferece"
          buttonText="Faça sua cotação"
          backgroundImage={heroImage}
          backgroundImageMobile={heroImageMobile}
        />

        <section
          className="quote"
          role="region"
          aria-label="Planos personalizados"
        >
          <div className="quote-container">
            <div className="quote-image">
              <img
                src={sectionQuoteImg}
                alt="Planos personalizados"
                loading="lazy"
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
                <Button text="Faça sua cotação" className="btn-quote" />
              )}
            </div>
            {isMobile && (
              <Button text="Faça sua cotação" className="btn-quote" />
            )}
          </div>
        </section>

        <section
          className="coverage"
          role="region"
          aria-label="Coberturas disponíveis"
        >
          <div className="coverage-text">
            <h2>Nossas coberturas</h2>
            <p>
              {isMobile
                ? 'Contratar um Seguro de Vida garante que:'
                : 'Veja mais detalhes de cada proteção!'}
            </p>
          </div>
          <CardsSection />
          <Button text="Faça sua cotação" />
        </section>

        <section
          className="why-insurance"
          id="why"
          role="region"
          aria-label="Por que ter um seguro de vida"
        >
          <div className="why-insurance-text">
            <h2 className="desktop-text">Mas por que ter um seguro de vida?</h2>
            <h2 className="mobile-text">Por que ter um seguro de vida?</h2>
          </div>
          <div className="accordion-wrapper">
            <Accordion items={accordionData} />
          </div>
          <div className="why-insurance-image">
            <img src={sectionWhyImg} alt="Seguro de vida" loading="lazy" />
          </div>
          <Button text="Faça sua cotação" className="btn-accordion" />
        </section>

        <section
          className="questions"
          role="region"
          aria-label="Dúvidas sobre seguro de vida"
          style={{ backgroundImage: `url(${questionsBgImg})` }}
        >
          <h2>
            {isMobile
              ? 'Ainda tem dúvidas sobre seguro de vida?'
              : 'Ainda não sabe qual seguro contratar?'}
          </h2>
          <div className="questions-content">
            <p>
              {isMobile
                ? 'Entre em contato e receba uma consultoria personalizada gratuitamente'
                : 'Ligue pra gente e receba uma consultoria personalizada gratuitamente!'}
            </p>
            <p>
              <img src={iconPhone} alt="Telefone" loading="lazy" /> (99)
              99999.9999
            </p>
            <p>Atendemos pelo telefone de seg. a sex., das 9h às 17h.</p>
          </div>
          <button aria-label="Contato via WhatsApp">
            <img src={iconWhatsapp} alt="WhatsApp" loading="lazy" />
            {isMobile
              ? 'Também respondemos pelo Whatsapp!'
              : 'Se preferir, entre em contato pelo Whatsapp'}
          </button>
        </section>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
