import { createElement } from './tools'


export const nav = () => {
  const nav = createElement({tag: 'nav'});
  const logoDiv = createElement({tag: 'div', cls: 'logo',txt: 'zaika'});
  const navLinks = createElement({tag: 'ul', cls: 'nav-links'});

  nav.appendChild(logoDiv)
  nav.appendChild(navLinks)

  const linkText = ['Home', 'Menu', 'Contact'];

  linkText.forEach(el => {
    const navLink = createElement({tag: 'li', cls: 'nav-link', txt: el});
    navLinks.appendChild(navLink)

    navLink.addEventListener('click', () => {
      alert(`From ${el}`)
    })
  })

  return nav;
}
