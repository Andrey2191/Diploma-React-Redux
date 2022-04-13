import React from "react";
import Button from "../../common/button/Button";
import classNames from "classnames";
import { BsPlus } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function PizzaIngredients({ img, name, price }) {
  return (
    <div className="ingredients-card">
      <div className="ingredients-img">
        <img src={img} alt="" />
      </div>
      <div className="ingredients-name">{name}</div>
      <div className="ingredients-price">Цена: {price} р.</div>
      <Button className={classNames("button--add")} outline>
        <IconContext.Provider value={{ color: "black", size: "20px" }}>
          <BsPlus />
        </IconContext.Provider>

        <span>Добавить</span>
      </Button>
    </div>
  );
}
