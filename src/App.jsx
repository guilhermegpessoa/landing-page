import Accordion from './components/Accordion';
import BackToTopButton from './components/BackToTopButton';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import accordionData from './data/accordionData';
import heroImage from './assets/hero.webp';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
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
              <button className="quote-btn">Faça sua cotação</button>
            </div>
          </div>
        </section>

        <section className="coverage">
          <div className="coverage-text">
            <h2>Nossas coberturas</h2>
            <p>Veja mais detalhes de cada proteção!</p>
          </div>
          <CardsSection />
        </section>

        <section className="why-insurance" id="why">
          <div className="why-insurance-text">
            <h2>Mas por que ter um seguro de vida?</h2>
          </div>
          <div className="accordion-wrapper">
            <Accordion items={accordionData} />
          </div>
          <div className="why-insurance-image">
            <img src="src/assets/sectionWhy.webp" alt="Seguro de vida" />
          </div>
        </section>

        <section className="questions">
          <h2>Ainda não sabe qual seguro contratar?</h2>
          <div className="questions-content">
            <p>
              Ligue pra gente e receba uma consultoria personalizada
              gratuitamente!
            </p>
            <p>(99) 99999.9999</p>
            <button>Se preferir, entre em contato pelo Whatsapp</button>
          </div>
        </section>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
