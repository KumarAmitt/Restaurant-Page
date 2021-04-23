import createElement from './tools';
import { footerText } from './texts';

const footer = ({ appendTo }) => {
  const footerDiv = createElement({ appendTo, tag: 'footer' });
  const footerP = createElement({ appendTo: footerDiv, tag: 'p' });
  footerP.innerHTML = footerText;
};

export default footer;
