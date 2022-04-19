import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../containers/ingredientsSlice";
import PizzaIngredients from "./PizzaIngredients";
import { addIngredient } from "../containers/ingredientsSlice";
import Button from "../../common/button/Button";
import classNames from "classnames";
import { BsPlus } from "react-icons/bs";
import { IconContext } from "react-icons";
import { addCustomPizzaToCart } from "../../cartComponents/containers/cartReducer/cartReducer";

export default function CreatePizza() {
  const dispatch = useDispatch();
  const { ingredients, addedIngredients, totalPrice } = useSelector(
    (state) => state.ingredients
  );

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const handleAddIngredient = (ingredient) => {
    dispatch(addIngredient(ingredient));
  };

  const handleAddCustomPizzaToCart = (pizza) => {
    dispatch(addCustomPizzaToCart(pizza));
  };

  console.log(addedIngredients);

  return (
    <div className="create-pizza">
      <div className="added__ingredients">
        <div className="added__ingredients-header">
          <h2>Выбранные ингредиенты:</h2>
          <span className="ingredient__price"> Price: {totalPrice}</span>
          <Button
            className={classNames("button--add")}
            onClick={handleAddCustomPizzaToCart}
            outline
          >
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <BsPlus />
            </IconContext.Provider>

            <span>Добавить</span>
          </Button>
        </div>
        {Object.keys(addedIngredients).map((key) => (
          <span className="added__ingredient">
            {addedIngredients[key].name},
          </span>
        ))}
        <div className="ingredients__footer"></div>
      </div>
      <div className="create-pizza-header">
        <h1>Создай свою пиццу</h1>
      </div>
      <div className="create-pizza-ingredients">
        {ingredients.map((ingredient) => {
          return (
            <PizzaIngredients
              _id={ingredient._id}
              key={ingredient._id}
              img={ingredient.imageUrl}
              name={ingredient.name}
              price={ingredient.price}
              onClickAddIngredient={handleAddIngredient}
            />
          );
        })}
      </div>
    </div>
  );
}
