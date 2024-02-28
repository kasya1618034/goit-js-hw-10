import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

const errorElem = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('.breed-select');

try {
  loader.classList.remove('hidden');
  fetchBreeds().then(data => renderSelect(data));
} catch (error) {
  Notiflix.Notify.failure(`${error}`);
  handleFetchError();
};

function handleFetchError() {
  errorElem.classList.remove('hidden');
  loader.classList.add('hiddden');
}

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  loader.classList.add('hidden');
  errorElem.classList.add('hidden');

  new SlimSelect({
    select: '.breed-select',
  });
}

breedSelect.addEventListener('change', e => {
  loader.classList.remove('hidden');
  fetchCatByBreed(e.target.value)
    .then(data => renderCat(data[0]), errorElem.classList.add('hidden'))
    .catch(error => {
      Notiflix.Notify.failure(`${error}`, handleFetchError());
    });
});

function renderCat(catData) {
  const { url } = catData;
  const { name, description, temperament } = catData.breeds[0];
  catInfo.insertAdjacentHTML(
    'beforeend',
    `<div>
      <h2>${name}</h2>
      <img src="${url}" alt="${name}"/>
      <p>${description}</p>
      <p>${temperament}</p>
    </div>`
  );
  loader.classList.add('hidden');
}