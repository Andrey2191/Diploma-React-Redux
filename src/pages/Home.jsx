import React, { useCallback, useEffect } from "react";
import { Categories, SortPopup, PizzaCard } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/action/filter";

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

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaCard key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
