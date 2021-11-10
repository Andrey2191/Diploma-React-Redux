import React, { useCallback, useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaCard,
  PizzaLoader,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/action/filter";
import { fetchPizzas } from "../redux/action/pizzas";
import { addPizzaToCart } from "../redux/action/cart";

console.log(setCategory());
const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярность", type: "popular" },
  { name: "цена", type: "price" },
  { name: "алфавит", type: "alphabet" },
];

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  useEffect(() => {
    // console.log(setPizzas());
    // axios.get("http://localhost:3333/db.json").then(({ data }) => {
    //   dispatch(setPizzas(data.pizzas));
    // }, []);
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart());
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClick={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaCard
                onClickAddPizza={handleAddPizza}
                key={obj.id}
                isLoading={true}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  );
}
