import { createElement } from './tools'
import { footerText } from "./constants";


export const footer = () => {
  const footerDiv = createElement({tag: 'footer'})
  const footerP = createElement({tag: 'p'})
  footerP.innerHTML = footerText

  footerDiv.appendChild(footerP)

  return footerDiv
}


