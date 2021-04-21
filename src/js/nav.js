import { createElement } from './tools'


export const nav = ({appendTo}) => {
  const nav = createElement({appendTo: appendTo, tag: 'nav'});
  const logoDiv = createElement({appendTo: nav, tag: 'div', cls: 'logo',txt: 'zaika'});
  const navLinks = createElement({appendTo: nav, tag: 'ul', cls: 'nav-links'});

  const linkText = ['Home', 'Menu', 'Contact'];

  linkText.forEach(el => {
    const navLink = createElement({appendTo: navLinks, tag: 'li', cls: 'nav-link', txt: el});

    navLink.addEventListener('click', () => {
      alert(`From ${el}`)
    })
  })
}
