import createElement from './tools';
import about from './about';

const main = ({ appendTo }) => {
  const mainSection = createElement({ appendTo, tag: 'main' });
  about({ appendTo: mainSection });
};

export default main;