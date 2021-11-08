// unsplash API
const count = 10;
const apiKey = 'nWwL-YXPbL6NDY_QBxVV0fVIBc1nYGP8m1oLqUwIqPI';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPhotos();
