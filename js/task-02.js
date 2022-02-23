const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector('ul#ingredients');

const createIngredients = ingredients.map(el => {
  const ingridientsItem = document.createElement('li');
  ingridientsItem.classList.add('item');
  ingridientsItem.textContent = el;
  return ingridientsItem;
})
ingredientsEL.append(...createIngredients);

// console.log(ingredientsEL)