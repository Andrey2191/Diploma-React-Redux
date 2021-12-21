import React from "react";
import classNames from "classnames";

function Input({ id, type, value, onChange, placeholder, className }) {
  const classes = classNames("input", "modal--input");
  return (
    <input
      id={id}
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default Input;
