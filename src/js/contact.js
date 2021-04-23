import createElement from './tools';
import {
  contactTitle, contactFields,
} from './texts';

const contactItem = (parent, fieldName, fieldValue) => {
  const item = createElement({
    appendTo: parent, tag: 'p', cls: 'cInfo', txt: fieldName,
  });
  createElement({ appendTo: item, tag: 'span', txt: fieldValue });
};

const contact = ({ appendTo }) => {
  const contactPage = createElement({ appendTo, tag: 'div' });
  createElement({
    appendTo: contactPage, tag: 'h1', cls: 'title', txt: contactTitle,
  });
  const desc = createElement({ appendTo: contactPage, tag: 'p', cls: 'desc' });

  Object.entries(contactFields).forEach((el) => {
    contactItem(desc, el[0], el[1]);
  });
};

export default contact;