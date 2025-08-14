import Header from './components/Header';
import Accordion from './components/Accordion';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import Card from './components/Card';
import accordionData from './data/accordionData';
import './index.css';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <h1>Tranquilidade para viver mais</h1>
          <p>
            Viva mais e melhor com os benefícios que um serguro de vida te
            oferece
          </p>
        </section>

        <section className="quote">
          <h2>Planos personalizados e sem burocracia</h2>
          <p>1. Informe seus dados</p>
          <p>2. Descubra o plano ideal para o seu perfil</p>
          <p>3. Escolha sua forma de pagamento e contrate 100% online</p>
          <p>
            Pronto! Agora você e sua família têm todos os benefícios de viver
            com segurança total
          </p>
        </section>

        <section className="coverage">
          <h2>Nossas coberturas</h2>
          <p>Veja mais detalhes de cada proteção!</p>
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        <section className="why-insurance" id="why">
          <h2>Mas por que ter um seguro de vida?</h2>
          <Accordion items={accordionData} />
        </section>
      </main>

      <section className="questions">
        <h2>Ainda não sabe qual seguro contratar?</h2>
        <p>
          Ligue pra gente e receba uma consultoria personalizada gratuitamente!
        </p>
        <p>(99) 99999.9999</p>
        <button>Se preferir, entre em contato pelo Whatsapp</button>
      </section>

      <BackToTopButton />
      <Footer />
    </>
  );
}
