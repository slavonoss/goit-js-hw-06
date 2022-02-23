const ulEl = document.querySelector('ul')
// console.log(ulEl)
const listEl = document.querySelector('ul').children
const numberCategory = [...listEl].length
console.log(`Number of categories: ${numberCategory}`)
const liArr = document.querySelectorAll("li.item")
// console.log(liArr)
for (const item of liArr) {
    const selectH2 = item.querySelector('h2')
    console.log(`Category: ${selectH2.textContent}`)
    const itemChildren = item.querySelectorAll("li")
    const itemChildrenArrLength = [...itemChildren].length
    console.log(`Elements: ${itemChildrenArrLength}`)
}
