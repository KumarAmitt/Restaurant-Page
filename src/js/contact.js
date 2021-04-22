import {createElement} from "./tools";

const contactDesc = '24 ABC Street, XYZ Road, JAMSHEDPUR'

export const contact = ({appendTo}) => {
  const contactPage = createElement({appendTo: appendTo, tag: 'div'})
  createElement({appendTo: contactPage, tag: 'h1', cls: 'title', txt: 'Contact Us'})
  createElement({appendTo: contactPage, tag: 'p', cls: 'desc', txt: contactDesc})
}

