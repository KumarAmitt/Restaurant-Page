export const createElement = ({tag, cls, txt}) => {
  const element = document.createElement(tag);
  element.classList.add(cls);
  element.textContent = txt;

  return element;
}