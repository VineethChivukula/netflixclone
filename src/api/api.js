import axios from "axios";
const URL = "https://api.themoviedb.org/3";
const API_KEY = "dd13114bd186b510d8104618a4f45ebf";
const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
};
