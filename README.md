# Landing Page Seguros Promo

Landing page desenvolvida em **React** com **Vite**, criada como desafio técnico.

O projeto foi implementado com foco em:

- Responsividade (desktop e mobile)
- Código limpo, semântico e de fácil manutenção
- Métodos simples e funcionais
- SEO básico
- Acessibilidade (ARIA, alt em imagens, navegação por teclado)
- Performance otimizada (lazy loading de imagens, CSS eficiente)

O projeto está **deployado no Vercel**: [Clique aqui para acessar](https://landing-page-one-iota-39.vercel.app/)

---

## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS3
- react-slick (slider/carrossel de cards)
- react-icons (ícones)

---

## Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/guilhermegpessoa/landing-page.git
cd landing-page
```

2. **Instale as dependências**

```bash
npm install
```

ou

```bash
yarn
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

ou

```bash
yarn dev
```

4. **Abra o projeto no navegador**

Após executar o comando acima, o terminal irá mostrar a URL local (ex: http://localhost:5173).

Acesse para visualizar a landing page.

## Estrutura do projeto

```bash
src/
│
├─ assets/          # Imagens e ícones
├─ components/      # Componentes React reutilizáveis (Header, Hero, Footer, Cards, Accordion, etc.)
├─ data/            # Dados utilizados pelos componentes (ex: cardsData, accordionData)
├─ App.jsx          # Componente principal que organiza toda a landing page
├─ index.css        # Estilos globais
└─ main.jsx         # Entrada principal do React
```

## Atualizações do design

- **Seção "Nossas coberturas":** No layout desktop, adicionei um carrossel para os cards. Isso permite exibir mais cards, mantendo a consistência com o design mobile, mas mostrando apenas 3 por vez na tela.
- **Seção "Mas por que ter um seguro de vida":** O botão "Faça sua cotação" foi centralizado em relação à imagem, melhorando a simetria visual e a experiência do usuário.
- **Footer:** No layout desktop, o design original do Figma não incluía o footer. Acrescentei o footer, utilizando como referência o site em produção, garantindo que a página ficasse completa e funcional.
