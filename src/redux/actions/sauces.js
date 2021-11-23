import axios from "axios";

const saucesApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchSauces = (dispatch) => {
  saucesApi.get(`sauces`).then(({ data }) => {
    dispatch(setSauces(data));
  });
};

export const setSauces = (saucesItems) => ({
  type: "SET_SAUCES",
  payload: saucesItems,
});
