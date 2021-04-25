import createElement from './tools';
import { aboutTitle, aboutDesc } from './texts';

const about = ({ appendTo }) => {
  const aboutPage = createElement({ appendTo, tag: 'div' });
  createElement({
    appendTo: aboutPage, tag: 'h1', cls: 'title', txt: aboutTitle,
  });
  createElement({
    appendTo: aboutPage, tag: 'p', cls: 'desc', txt: aboutDesc,
  });
};

export default about;