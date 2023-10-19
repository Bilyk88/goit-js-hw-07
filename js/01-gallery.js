import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');



galleryList.insertAdjacentHTML('beforeend', markup);

 const instance = basicLightbox.create(`
    <img src="evt.target.dataset.source" width="800" height="600">
`)

galleryList.addEventListener('click', onClick);


function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    // console.log(evt.target.dataset.source);
    console.dir(evt.target.src);
//     const instance = basicLightbox.create(`
//     <img src="evt.target.src" width="800" height="600">
// `)
    
//    instance.show();
   
 
}

