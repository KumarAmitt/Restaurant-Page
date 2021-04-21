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


//cover

const coverDiv = createElement('div')
coverDiv.classList.add('cover')
content.appendChild(coverDiv)


const coverContent = createElement('div')
coverContent.classList.add('cover-content')
coverDiv.appendChild(coverContent)

const coverP1 = createElement('p')
coverP1.classList.add('cover-p1')
coverContent.appendChild(coverP1)
coverP1.textContent = 'Welcome to '

const p1Span = createElement('span')
coverP1.appendChild(p1Span)
p1Span.textContent = 'zaika'

const coverP2 = createElement('p')
coverP2.classList.add('cover-p2')
coverContent.appendChild(coverP2)
coverP2.textContent = 'Where Food Speaks with your plate!'


// feature-recipe

const featRecipe = createElement('div');
featRecipe.classList.add('feat-recipe')
content.appendChild(featRecipe)

let featRecipeImg = createElement('img')
featRecipeImg.src = alooPuri

featRecipe.appendChild(featRecipeImg)


//Footer

const footerDiv = createElement('footer')
content.appendChild(footerDiv)
const footerText = createElement('p')
footerDiv.appendChild(footerText)
footerText.innerHTML = '&copy; 2021 zaika'


