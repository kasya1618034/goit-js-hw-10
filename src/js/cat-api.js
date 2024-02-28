import axios from 'axios';

export const fetchBreeds = () => {
  axios
    .defaults.headers.common['x-api-key'] = 'live_hTCUFKKuGbr18NYer9qO0D5pvRF9W5w0NXtTelXtY4DYNUhFDYQfQBPW3zIKJUOg';

  return axios.get('https://api.thecatapi.com/v1/breeds').then((res) => res.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
}