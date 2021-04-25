import createElement from './tools';
import puri from '../images/aloo_puri.jpg';

const feature = ({ appendTo }) => {
  const featRecipe = createElement({ appendTo, tag: 'div', cls: 'feat-recipe' });
  const featRecipeImg = createElement({ appendTo: featRecipe, cls: 'feat-recipe-img', tag: 'img' });
  featRecipeImg.src = puri;
};

export default feature;