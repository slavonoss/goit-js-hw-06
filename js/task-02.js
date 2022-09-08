const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngridients = document.querySelector('ul#ingredients')
const createIngridients = ingredients.map(el => {
  const ingridient = document.createElement("li")
  ingridient.classList.add('item')
  ingridient.textContent = el
  return ingridient
})
ulIngridients.append(...createIngridients);