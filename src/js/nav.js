import { createElement } from './tools'

import { about } from './about'
import { menu } from './menu'
import { contact } from "./contact";


export const nav = ({appendTo}) => {
  const nav = createElement({appendTo: appendTo, tag: 'nav'});
  const logoDiv = createElement({appendTo: nav, tag: 'div', cls: 'logo',txt: 'zaika'});
  const navLinks = createElement({appendTo: nav, tag: 'ul', cls: 'nav-links'});

  const linkText = ['About', 'Menu', 'Contact'];

  linkText.forEach(el => {
    const navLink = createElement({appendTo: navLinks, tag: 'li', cls: 'nav-link', txt: el});

    navLink.addEventListener('click', () => {
      displayMainSection(el);
    })
  })
}

function displayMainSection(link){
  let main = document.querySelector('main')
  removeAllChildNodes(main)

  if(link === 'Menu'){
    menu({appendTo: main})
  }else if (link === 'Contact'){
    contact({appendTo: main})
  }else {
    about({appendTo: main})
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
