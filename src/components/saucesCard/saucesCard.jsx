import React from "react";
import Button from "../button/Button";

export default function SaucesCard({
  id,
  name,
  imageUrl,
  price,
  onClickAddSauces,
}) {
  const onAddSauces = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    };
    onClickAddSauces(obj);
  };

  return (
    <div className="sauces--card">
      <div className="sauces--card-header">
        <img className="sauces--image" src={imageUrl} alt="" />
      </div>
      <div className="sauces--card-title">
        <span>{name}</span>
      </div>
      <div className="sauces--card-footer">
        <span>{`${price} руб`}</span>
        <Button onClick={onAddSauces} className="button--circle" outline>
          +
        </Button>
      </div>
    </div>
  );
}
