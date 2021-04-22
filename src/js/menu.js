import createElement from './tools';

const menuItems = {
  starter: {
    'Hot and Sour soup': 99,
    'Sweet corn soup': 89,
    'Crispy babycorn chilly': 159,
    'Garlic Paneer': 159,
  },
  tandoor: {
    'Paneer Angaara tikka': 189,
    'Tandoori chicken': 169,
    'Achari fish tikka': 209,
  },
  rice: {
    'chicken fried rice': 159,
    'egg fried rice': 129,
    'veg fried rice': 99,
  },
};

const menu = ({ appendTo }) => {
  const menuPage = createElement({ appendTo, tag: 'div' });
  createElement({
    appendTo: menuPage, tag: 'h1', cls: 'title', txt: 'Menu',
  });

  Object.entries(menuItems).forEach((item) => {
    const desc = createElement({ appendTo: menuPage, tag: 'p', cls: 'desc' });
    createElement({
      appendTo: desc, tag: 'h3', cls: 'category', txt: item[0],
    });
    const ul = createElement({ appendTo: desc, tag: 'ul' });

    Object.entries(item[1]).forEach((dish) => {
      const li = createElement({ appendTo: ul, tag: 'li' });
      createElement({ appendTo: li, tag: 'span', txt: dish[0] });
      const price = createElement({ appendTo: li, tag: 'span' });
      price.innerHTML = `&#8377; ${dish[1]}`;
    });
  });
};

export default menu;
