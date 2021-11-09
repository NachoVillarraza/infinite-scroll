// selectores
const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');

let photosArray = [];

// Display imagenes y agregarlas al DOM
function displayImages() {
  photosArray.forEach((photo) => {
    // create a Element
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // create img
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // put img inside item and put in imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// unsplash API
const count = 10;
const apiKey = 'nWwL-YXPbL6NDY_QBxVV0fVIBc1nYGP8m1oLqUwIqPI';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayImages();
  } catch (error) {
    console.log(error);
  }
}

// add more photos to de window when scroll down to de bottom

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log('Agregando mas fotos');
  }
});

getPhotos();
