import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector('.gallery');
const galleryRender = galleryItems =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`,
    ''
  );

const insertImages = string => {
  div.insertAdjacentHTML('beforeend', string);
};

const results = galleryRender(galleryItems);
insertImages(results);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// gallery.on('show.simplelightbox', function () {
//   // do something…
// });
console.log(galleryItems);
