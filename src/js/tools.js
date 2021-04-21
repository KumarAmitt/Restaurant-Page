export const createElement = ({tag, cls, txt}) => {
  const element = document.createElement(tag);
  element.classList.add(cls);
  element.textContent = txt;

  // cls !== 'undefined' ? element.classList.add(cls) : null;
  // text !== 'undefined' ? element.textContent = text : null;

  return element;
}