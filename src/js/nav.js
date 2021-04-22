import { createElement } from './tools'

import { about } from './about'
import { menu } from './menu'
import { contact } from "./contact";

import golgappa from '../images/golgappa.jpg';
import dosa from '../images/dosa.jpg';
import puri from '../images/aloo_puri.jpg';

export const nav = ({appendTo}) => {
  const nav = createElement({appendTo: appendTo, tag: 'nav'});
  const logoDiv = createElement({appendTo: nav, tag: 'div', cls: 'logo',txt: 'zaika'});
  const navLinks = createElement({appendTo: nav, tag: 'ul', cls: 'nav-links'});

  const linkText = ['About', 'Menu', 'Contact'];

  linkText.forEach(el => {
    const navLink = createElement({appendTo: navLinks, tag: 'li', cls: 'nav-link', txt: el});

    navLink.addEventListener('click', () => {
      displayMainSection(el);
      setRecipeImg(el);
    })
  })
}

function setRecipeImg(link){
  let pic = document.querySelector('.feat-recipe-img')
  if(link === 'Menu'){
    pic.src = golgappa
  }else if (link === 'Contact'){
    pic.src = dosa
  }else {
    pic.src = puri
  }
}

function displayMainSection(link){
  const main = document.querySelector('main')
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
