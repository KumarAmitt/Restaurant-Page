import './stylesheets/style.scss'
import alooPuri from './images/aloo_puri.jpg'


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


// feature-recipe

const featRecipe = createElement('div');
featRecipe.classList.add('feat-recipe')
content.appendChild(featRecipe)

let featRecipeImg = createElement('img')
featRecipeImg.src = alooPuri

featRecipe.appendChild(featRecipeImg)



