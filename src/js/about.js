import {createElement} from "./tools";

const descText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore itaque officia et magni voluptatibus aliquam nihil cupiditate nemo. Explicabo iure ullam quis quo distinctio quod voluptatem corporis, similique eveniet inventore expedita dolorem repellendus animi, facere aut ipsum veniam ad.'


export const about = () => {
  const aboutPage = createElement({tag: 'div'})

  const title = createElement({tag: 'h1', cls: 'title', txt: 'About Us'})
  aboutPage.appendChild(title)

  const desc = createElement({tag: 'p', cls: 'desc', txt: descText})
  aboutPage.appendChild(desc)

  return  aboutPage;
}