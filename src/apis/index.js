import api from "../lib/axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchNetflixOriginals = () =>
  api
    .get(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko-KR`)
    .then((res) => res.data);

export const fetchTrending = () =>
  api
    .get(`/trending/all/week?api_key=${API_KEY}&language=ko-KR`)
    .then((res) => res.data);
export const fetchTopRated = () =>
  api
    .get(`/movie/top_rated?api_key=${API_KEY}&language=ko-KR`)
    .then((res) => res.data);
export const fetchActionMovies = () =>
  api
    .get(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko-KR`)
    .then((res) => res.data);
export const fetchComedyMovies = () =>
  api
    .get(`/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko-KR`)
    .then((res) => res.data);
export const fetchHorrorMovies = () =>
  api
    .get(`/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko-KR`)
    .then((res) => res.data);
export const fetchRomanceMovies = () =>
  api
    .get(`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko-KR`)
    .then((res) => res.data);
export const fetchDocumentaries = () =>
  api
    .get(`/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko-KR`)
    .then((res) => res.data);
