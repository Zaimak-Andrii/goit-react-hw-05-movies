import axios from 'axios';
import config from 'config/config';

const axiosInstance = axios.create({
  baseURL: config.urls.theMovies.API,
  params: {
    api_key: '5c93c97bcb9255a0f7d4f05f21130cdf',
  },
});

const TheMovieAPI = {
  async getThrendingByDay(page = 1) {
    return axiosInstance
      .get('trending/movie/day', { params: { page } })
      .then(({ data }) => data);
  },
  async getMoviesBySearchQuery(query, page = 1) {
    return axiosInstance
      .get('search/movie', { params: { query, page } })
      .then(({ data }) => data);
  },
  async getMovieDetailsById(movieId) {
    return axiosInstance.get(`movie/${movieId}`).then(({ data }) => data);
  },
  async getMovieCredits(movieId) {
    return axiosInstance
      .get(`movie/${movieId}/credits`)
      .then(({ data }) => data);
  },
  async getMovieReviews(movieId) {
    return await axiosInstance
      .get(`movie/${movieId}/reviews`)
      .then(({ data }) => data);
  },
};

export default TheMovieAPI;
