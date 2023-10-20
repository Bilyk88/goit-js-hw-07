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


galleryList.addEventListener('click', onClick);

let instance;

function onClick(evt) {
  
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
  
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
       onClose: instance => {
      window.removeEventListener('keydown', closeModal);
    },
    })
    
   instance.show();
   
}

function closeModal(evt) {
  
    if (evt.code === 'Escape') {
   
      instance.close();

    }

}









// function onClick(evt) {
  
//     evt.preventDefault();
//     document.addEventListener('keydown', closeModal);
//     if (!evt.target.classList.contains('gallery__image')) {
//         return;
//     }
  
//     instance = basicLightbox.create(`
//     <img src="${evt.target.dataset.source}">
// `)
    
//    instance.show();
   
// }

// function closeModal(evt) {
  
//     if (evt.code === 'Escape') {
   
//       instance.close();

//     }

// }