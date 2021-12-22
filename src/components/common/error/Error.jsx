import React from "react";
import classNames from "classnames";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={classNames("form-message invalid")}>&nbsp;</div>;
  }
  if (message) {
    return <div className={classNames("form-message invalid")}>{message}</div>;
  }
  return <div className={classNames("form-message valid")}>all good</div>;
};

export default Error;
