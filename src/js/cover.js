import createElement from './tools';
import { logoText, greetings, tagline } from './texts';

const cover = ({ appendTo }) => {
  const coverDiv = createElement({ appendTo, tag: 'div', cls: 'cover' });
  const coverContent = createElement({ appendTo: coverDiv, tag: 'div', cls: 'cover-content' });
  const coverP1 = createElement({
    appendTo: coverContent, tag: 'p', cls: 'cover-p1', txt: greetings,
  });
  createElement({ appendTo: coverP1, tag: 'span', txt: logoText });
  createElement({
    appendTo: coverContent, tag: 'p', cls: 'cover-p2', txt: tagline,
  });
};

export default cover;