import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const errorElement = document.querySelector('.error');
const catInfoElement = document.querySelector('.cat-info');
const loaderElement = document.querySelector('.loader');

const fetchBreedsBtn = document.querySelector('.btn');
const breedSelect = document.querySelector('.breed-select');

fetchBreedsBtn.addEventListener('click', () => {
  try {
      fetchBreeds().then(data => renderSelect(data));
  } catch (error) {
    console.log(error);
  }
});

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
}