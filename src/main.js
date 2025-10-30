import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, showLoader, hideLoader } from './js/render-functions';

const searchForm = document.querySelector('.form');

const toastOptions = {
  title: 'Error',
  message: 'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: '#EF4040',
  messageColor: '#FFFFFF',
  position: 'topRight',
};

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {

    const data = await getImagesByQuery(query);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.error(toastOptions);
      return;
    }

    createGallery(images);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while fetching images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchForm.reset();
  }
}