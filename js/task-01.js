const ulEl = document.querySelector('ul');
const liEl = ulEl.children
const numberCategory = [...liEl].length;
console.log(`Number of categories: ${numberCategory}`);
const liArr = document.querySelectorAll("li.item")

for (const item of liArr) {
    const titleLi = item.querySelector('h2')
    console.log(`Category: ${titleLi.textContent}`)
    const liCategoryArr = item.querySelectorAll('li')
    const qtyCategoryItem = [...liCategoryArr].length
    console.log(`Elements: ${qtyCategoryItem}`)
}