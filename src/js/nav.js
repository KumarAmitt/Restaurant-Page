import createElement from './tools';

import { logoText, navTabs } from './texts';
import about from './about';
import menu from './menu';
import contact from './contact';

import golgappa from '../images/golgappa.jpg';
import dosa from '../images/dosa.jpg';
import puri from '../images/aloo_puri.jpg';

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const updateFeatAndMain = (link) => {
  const main = document.querySelector('main');
  const pic = document.querySelector('.feat-recipe-img');
  removeAllChildNodes(main);

  switch (link) {
    case 'Menu':
      menu({ appendTo: main });
      pic.src = golgappa;
      break;
    case 'Contact':
      contact({ appendTo: main });
      pic.src = dosa;
      break;
    default:
      about({ appendTo: main });
      pic.src = puri;
      break;
  }
};

const nav = ({ appendTo }) => {
  const nav = createElement({ appendTo, tag: 'nav' });
  createElement({
    appendTo: nav, tag: 'div', cls: 'logo', txt: logoText,
  });
  const navLinks = createElement({ appendTo: nav, tag: 'ul', cls: 'nav-links' });

  navTabs.forEach((el) => {
    const navLink = createElement({
      appendTo: navLinks, tag: 'li', cls: 'nav-link', txt: el,
    });

    navLink.addEventListener('click', () => {
      updateFeatAndMain(el);
    });
  });
};

export default nav;
