import './stylesheets/style.scss';
import alooPuri from './images/aloo_puri.jpg';

import { createElement } from './js/tools'
import { nav } from './js/nav'
import { about } from './js/about'
import { footer } from './js/footer'


// let createElement = element => document.createElement(element);


const content = document.getElementById('content');

//Nav
content.appendChild(nav())


//cover

const coverDiv = createElement({tag: 'div', cls: 'cover'})
content.appendChild(coverDiv)

const coverContent = createElement({tag: 'div', cls: 'cover-content'})
coverDiv.appendChild(coverContent)

const coverP1 = createElement({tag: 'p', cls: 'cover-p1', txt: 'Welcome to '})
coverContent.appendChild(coverP1)

const p1Span = createElement({tag: 'span', txt: 'zaika'})
coverP1.appendChild(p1Span)

const coverP2 = createElement({tag: 'p', cls: 'cover-p2', txt: 'Where Food Speaks with your plate!'})
coverContent.appendChild(coverP2)


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

