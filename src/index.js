import './stylesheets/style.scss';
import alooPuri from './images/aloo_puri.jpg';

import { nav } from './js/nav'
import { about } from './js/about'
import { footer } from './js/footer'


let createElement = element => document.createElement(element);


const content = document.getElementById('content');

content.appendChild(nav())


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

//About

const main = createElement('main')
content.appendChild(main)

main.appendChild(about())

//Footer

content.appendChild(footer())

