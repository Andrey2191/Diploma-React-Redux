import classNames from "classnames";
import React from "react";
import Button from "../common/button/Button";

export default function SaucesCard({
  _id,
  name,
  imageUrl,
  price,
  onClickAddSauces,
}) {
  const onAddSauces = () => {
    const obj = {
      _id,
      name,
      imageUrl,
      price,
    };
    onClickAddSauces(obj);
  };

  return (
    <div className={classNames("sauces--card")}>
      <div className={classNames("sauces--card-header")}>
        <img className={classNames("sauces--image")} src={imageUrl} alt="" />
      </div>
      <div className={classNames("sauces--card-title")}>
        <span>{name}</span>
      </div>
      <div className={classNames("sauces--card-footer")}>
        <span>{`${price} руб`}</span>
        <Button
          onClick={onAddSauces}
          className={classNames("button--circle")}
          outline
        >
          +
        </Button>
      </div>
    </div>
  );
}
