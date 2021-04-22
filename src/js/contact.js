import {createElement} from "./tools";

const timeTxt = '9:00 AM - 10:00 PM (All day)';
const addressTxt = '23, ABC street, XYZ market, JSR';
const phoneTxt = '+91 222 333 4444';
const mailTxt = 'dine.zaika@gmail.com';
const instaTxt = '@dine_zaika'

export const contact = ({appendTo}) => {
  const contactPage = createElement({appendTo: appendTo, tag: 'div'})
  createElement({appendTo: contactPage, tag: 'h1', cls: 'title', txt: 'Contact Us'})
  const desc = createElement({appendTo: contactPage, tag: 'p', cls: 'desc'})

  const time = createElement({appendTo: desc, tag: 'p', cls: 'cInfo', txt: 'Time: '})
  createElement({appendTo: time, tag: 'span', txt: timeTxt})

  const address = createElement({appendTo: desc, tag: 'p', cls: 'cInfo', txt: 'Address: '})
  createElement({appendTo: address, tag: 'span', txt: addressTxt})

  const phone = createElement({appendTo: desc, tag: 'p', cls: 'cInfo', txt: 'Phone: '})
  createElement({appendTo: phone, tag: 'span', txt: phoneTxt})

  const mail = createElement({appendTo: desc, tag: 'p', cls: 'cInfo', txt: 'Email: '})
  createElement({appendTo: mail, tag: 'span', txt: mailTxt})

  const insta = createElement({appendTo: desc, tag: 'p', cls: 'cInfo', txt: 'Instagram: '})
  createElement({appendTo: insta, tag: 'span', txt: instaTxt})

}

