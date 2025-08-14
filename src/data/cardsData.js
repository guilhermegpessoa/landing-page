import iconDeath from '../assets/iconDeath.png';
import iconDisablement from '../assets/iconDisablement.png';
import iconFuneral from '../assets/iconFuneral.png';
import iconPrize from '../assets/iconPrize.png';

const cardsData = [
  {
    image: iconDeath,
    title: 'Morte',
    text: 'Caso a pessoa segurada venha a falecer, seja por causas naturais ou acidentais, a pessoa escolhida como beneficiária recebe uma indenização no valor contratado',
    buttonText: 'Saiba Mais',
  },
  {
    image: iconDisablement,
    title: 'Invalidez por acidente',
    text: 'Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, essa pessoa recebe uma uma indenização no valor contratado',
    buttonText: 'Saiba Mais',
  },
  {
    image: iconFuneral,
    title: 'Assistência funeral',
    text: 'No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação',
    buttonText: 'Saiba Mais',
  },
  {
    image: iconPrize,
    title: 'Sorteios mensais de 10 mil reais',
    text: 'A pessoa segurada concorre a sorteios de R$10.000 todo mês enquanto continuar com seu o plano ativo',
    buttonText: 'Saiba Mais',
  },
];

export default cardsData;
