import './stylesheets/style.scss'


let createElement = element => document.createElement(element);


const content = document.getElementById('content');

const nav = createElement('nav');
const logoDiv = createElement('div');
const navLinks = createElement('ul');

content.appendChild(nav)
nav.appendChild(logoDiv)
nav.appendChild(navLinks)

logoDiv.classList.add('logo');
navLinks.classList.add('nav-links')

logoDiv.innerText = 'zaika';

const linkText = ['Home', 'Menu', 'Contact'];

linkText.forEach(el => {
  const navLink = createElement('li');
  navLink.classList.add('nav-link')
  navLinks.appendChild(navLink)

  navLink.innerText = el;

})