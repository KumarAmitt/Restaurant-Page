import createElement from './tools';

const footerText = '&copy; 2021 zaika';

const footer = ({ appendTo }) => {
  const footerDiv = createElement({ appendTo, tag: 'footer' });
  const footerP = createElement({ appendTo: footerDiv, tag: 'p' });
  footerP.innerHTML = footerText;
};

export default footer;
