import axios from "axios";

const saucesApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });



  export const fetchSauces