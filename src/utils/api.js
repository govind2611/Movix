import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";


// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWVmNWMxNWU0ZmI1ZDIxYTEwZTI5NzY1YjM1OTA3NSIsInN1YiI6IjY0N2UwOTU5OTM4MjhlMDBhNzY1OTg0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gUbAEDhB-hm1D-Hv0bMWgA3NH6BMFFSgRHDx56CQ10A";

  
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
