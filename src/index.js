import './stylesheets/style.scss';
import alooPuri from './images/aloo_puri.jpg';

import { createElement } from './js/tools'
import { nav } from './js/nav'
import { about } from './js/about'
import { footer } from './js/footer'


const content = document.getElementById('content');

//Nav
nav({appendTo: content})


//cover

const coverDiv = createElement({appendTo: content, tag: 'div', cls: 'cover'})
const coverContent = createElement({appendTo: coverDiv, tag: 'div', cls: 'cover-content'})
const coverP1 = createElement({appendTo: coverContent, tag: 'p', cls: 'cover-p1', txt: 'Welcome to '})
const p1Span = createElement({appendTo: coverP1, tag: 'span', txt: 'zaika'})
const coverP2 = createElement({appendTo: coverContent, tag: 'p', cls: 'cover-p2', txt: 'Where Food Speaks with your plate!'})


// feature-recipe

const featRecipe = createElement({appendTo: content, tag: 'div', cls: 'feat-recipe'});
let featRecipeImg = createElement({appendTo: featRecipe, tag: 'img'})
featRecipeImg.src = alooPuri


//About

const main = createElement({appendTo: content, tag: 'main'})
about({appendTo: main})

//Footer

footer({appendTo: content})


