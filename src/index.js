import './stylesheets/style.scss';
import alooPuri from './images/aloo_puri.jpg';

import { footer } from './js/footer'


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

  navLink.addEventListener('click', () => {
    alert(`From ${el}`)
  })
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

//About

const main = createElement('main')
content.appendChild(main)

const aboutPage = createElement('div')
main.appendChild(aboutPage)

const title = createElement('h1')
title.classList.add('title')
aboutPage.appendChild(title)
title.textContent = 'About Us'

const desc = createElement('p')
desc.classList.add('desc')
aboutPage.appendChild(desc)
desc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad.'


//Footer

content.appendChild(footer())

