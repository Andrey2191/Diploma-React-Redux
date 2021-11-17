import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  //   axios
  //     .get(
  //       `http://localhost:3333/pizzas?${
  //         category !== null ? `category=${category}` : ""
  //       }&_sort=${sortBy}&_order=desc`
  //     )
  //     .then(({ data }) => {
  //       dispatch(setPizzas(data));
  //     });
  // };
  api
    .get(
      `pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
