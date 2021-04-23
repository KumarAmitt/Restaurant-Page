import createElement from "./tools";



const cover = ({appendTo}) => {
  const coverDiv = createElement({ appendTo: appendTo, tag: 'div', cls: 'cover' });
  const coverContent = createElement({ appendTo: coverDiv, tag: 'div', cls: 'cover-content' });
  const coverP1 = createElement({
    appendTo: coverContent, tag: 'p', cls: 'cover-p1', txt: 'Welcome to ',
  });
  createElement({ appendTo: coverP1, tag: 'span', txt: 'zaika' });
  createElement({
    appendTo: coverContent, tag: 'p', cls: 'cover-p2', txt: 'Where Food Speaks with your plate!',
  });
}

export default cover