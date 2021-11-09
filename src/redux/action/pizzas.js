import axios from "axios";

export const fetchPizzas = () => {
  axios.get("http://localhost:3333/db.json").then(({ data }) => {
    setPizzas(data.pizzas);
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
