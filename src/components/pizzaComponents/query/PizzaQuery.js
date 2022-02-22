import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzasApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getPizzas: build.query({
      query: () => `pizzas`,
    }),
  }),
});

export const { useGetPizzasQuery } = pizzasApi;
