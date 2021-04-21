import { createElement } from './tools'
import { footerText } from "./constants";


export const footer = () => {
  const footerDiv = createElement('footer')
  const footerP = createElement('p')
  footerDiv.appendChild(footerP)
  footerP.innerHTML = footerText

  return footerDiv
}


