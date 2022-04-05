import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../..";
import { fetchPizzas } from "../../pizzaComponents/containers/pizzaSlice";
import { addPizzaToCart } from "../../cartComponents/containers/cartReducer/cartReducer";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortIems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const pizzas = useSelector((state) => state.pizzas.pizzas);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const handleAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} />
        <SortPopup items={sortIems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj._id}
                addedCount={cart?.count?.[obj.id]}
                {...obj}
                ingredients={obj.ingredients}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
