import {createElement} from "./tools";

const menuItems = {
  starter: {
    'Hot and Sour soup': 99,
    'Sweet corn soup': 89,
    'Crispy babycorn chilly': 159,
    'Garlic Paneer': 159
  },
  tandoor: {
    'Paneer Angaara tikka': 189,
    'Tandoori chicken': 169,
    'Achari fish tikka': 209
  },
  rice: {
    'chicken fried rice': 159,
    'egg fried rice': 129,
    'veg fried rice': 99
  }
}

export const menu = ({appendTo}) => {
  const menuPage = createElement({appendTo: appendTo, tag: 'div'})
  createElement({appendTo: menuPage, tag: 'h1', cls: 'title', txt: 'Menu'})

  for(let ctg in menuItems){
    const desc = createElement({appendTo: menuPage, tag: 'p', cls: 'desc'})
    createElement({appendTo: desc, tag: 'h3', cls: 'category', txt: ctg});
    const ul = createElement({appendTo: desc, tag: 'ul'})

    for(let item in menuItems[ctg]){
      const li = createElement({appendTo: ul, tag: 'li'})
      createElement({appendTo: li, tag: 'span', txt: item})
      createElement({appendTo: li, tag: 'span', txt: menuItems[ctg][item]})
    }
  }
}
