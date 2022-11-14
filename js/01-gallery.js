import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(image => `<div class="gallery__item">
                    <a class="gallery__link" href="${image.original}">
                      <img
                        class="gallery__image"
                        src="${image.preview}"
                        data-source="${image.original}"
                        alt="${image.description}"
                      />
                    </a>
                  </div>
               `)
  .join('')

galleryEl.insertAdjacentHTML('afterbegin', markup)

galleryEl.addEventListener('click', onImageClick)

function onImageClick(event) {

  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  window.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  }, { once: true });
}


 

