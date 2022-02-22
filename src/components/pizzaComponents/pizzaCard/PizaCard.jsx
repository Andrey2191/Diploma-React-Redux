import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../common/button/Button";
import { BsPlus } from "react-icons/bs";
import { IconContext } from "react-icons";

function PizzaBlock({
  _id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) {
  const obj = {
    thin: "тонкое",
    traditional: "традиционное",
  };

  const availableTypes = [obj.thin, obj.traditional];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      _id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className={classNames("pizza-block")}>
      <img
        className={classNames("pizza-block__image")}
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className={classNames("pizza-block__title")}>{name}</h4>
      <div className={classNames("pizza-block__selector")}>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames("pizza-block__bottom")}>
        <div className={classNames("pizza-block__price")}>от {price} руб.</div>
        <Button
          onClick={onAddPizza}
          className={classNames("button--add")}
          outline
        >
          <IconContext.Provider value={{ color: "black", size: "20px" }}>
            <BsPlus />
          </IconContext.Provider>

          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: "---",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
