import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const errorElement = document.querySelector('.error');
const catInfoElement = document.querySelector('.cat-info');
const breedSelect = document.querySelector('.breed-select');
const loaderElement = document.querySelector('.loader');

