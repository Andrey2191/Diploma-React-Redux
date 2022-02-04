import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../authorization/authorizationHook/use-auth";
import { Redirect } from "react-router-dom";
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../..";
import { setCategory, setSortBy } from "../../../redux/actions/filter";
import { fetchPizzas } from "../../pizzaComponents/pizzaSlice/pizzaSlice";
import { addPizzaToCart } from "../../cartComponents/cartReducer/cartReducer";

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
  // const cartItems = useSelector(({ cart }) => cart.items);
  const cart = useSelector((state) => state.cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const { isAuth } = useAuth();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
  };

  return isAuth ? (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cart?.count?.[obj.id]}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Home;
