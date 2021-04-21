export const createElement = ({appendTo, tag, cls, txt}) => {
  const element = document.createElement(tag);
  element.classList.add(cls);
  element.textContent = txt;

  if (appendTo){
    appendTo.appendChild(element)
  }

  return element;
}