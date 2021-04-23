import createElement from './tools';

const descText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad.';

const about = ({ appendTo }) => {
  const main = createElement({ appendTo: appendTo, tag: 'main' });
  const aboutPage = createElement({ appendTo: main, tag: 'div' });
  createElement({
    appendTo: aboutPage, tag: 'h1', cls: 'title', txt: 'About Us',
  });
  createElement({
    appendTo: aboutPage, tag: 'p', cls: 'desc', txt: descText,
  });
};

export default about;