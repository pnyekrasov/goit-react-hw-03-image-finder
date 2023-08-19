import axios from 'axios';

const API_KEY = '38184574-73f03994b4792e0e0e3ddcdab';
const PARAMETERS = 'image_type=photo&orientation=horizontal&safesearch=true';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export const fetchPhotos = async () => {
  const response = await axios.get(
    'q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data;
};

// `${this.#BASE_URL}?key=${this.#API_KAY}&q=${this.query}&${
//   this.#CONST_PARAMETERS
// }&page=${this.page}&per_page=${this.per_page}`;
