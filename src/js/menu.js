import {createElement} from "./tools";

const menuDesc = '24 ABC Street, XYZ Road, JAMSHEDPUR'

export const menu = ({appendTo}) => {
  const menuPage = createElement({appendTo: appendTo, tag: 'div'})
  createElement({appendTo: menuPage, tag: 'h1', cls: 'title', txt: 'Menu'})
  createElement({appendTo: menuPage, tag: 'p', cls: 'desc', txt: menuDesc})
}
