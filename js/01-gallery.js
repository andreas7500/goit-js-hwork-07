import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector('.gallery');
const galleryRender = galleryItems =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>`,
    ''
  );

const insertImages = string => {
  div.insertAdjacentHTML('beforeend', string);
};

const results = galleryRender(galleryItems);
insertImages(results);

div.addEventListener('click', e => {
  const { target } = e;
  e.preventDefault();

  if (target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600">`,

    {
      onShow: () => window.addEventListener('keydown', onEscKeyPress),
      onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    }
  );

  modal.show();

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      modal.close();
    }
  }
});

console.log(galleryItems);
