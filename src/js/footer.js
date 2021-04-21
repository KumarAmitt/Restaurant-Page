import { createElement } from './tools'
import { footerText } from "./constants";


export const footer = ({appendTo}) => {
  const footerDiv = createElement({appendTo: appendTo, tag: 'footer'})
  const footerP = createElement({appendTo: footerDiv, tag: 'p'})
  footerP.innerHTML = footerText

}


