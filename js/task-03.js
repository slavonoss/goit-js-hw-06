const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galery = document.querySelector('ul.gallery')
// console.log(galery)
const creatImages = images.map(el => {

  
  const a = `<li class="item">
        <img src="${el.url}" alt="${el.alt}" width="400">
    </li>`
  return a;

  // const liItem = document.createElement('li');
  // const imageItem = document.createElement('img');
  // imageItem.src = el.url;
  // imageItem.alt = el.alt;
  // imageItem.width = 500;
  // liItem.append(imageItem);
  // return liItem

})
galery.insertAdjacentHTML('beforeend', creatImages.join(' '))
// galery.append(...creatImages)
galery.style.display = 'flex';
galery.style.flexDirection = 'column';


