import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../containers/ingredientsSlice";
import PizzaIngredients from "./PizzaIngredients";

export default function CreatePizza() {
  const items = [1, 2, 3];
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div className="create-pizza">
      <div className="create-pizza-header">
        <h1>Создай свою пиццу</h1>
      </div>
      <div className="create-pizza-ingredients">
        {ingredients.map((ingredient) => {
          return (
            <PizzaIngredients
              img={ingredient.imageUrl}
              name={ingredient.name}
              price={ingredient.price}
            />
          );
        })}
      </div>
    </div>
  );
}
