import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../common/button/Button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Input from "../common/input/Input";

export default function CartModal({
  active,
  setActive,
  onCancel,
  onSubmit,
  // valueName,
  // valueAddress,
  // valueTelephone,
  // setValueTelephone,
  // setValueAddress,
  // setValueName,
  // sendOrder,
}) {
  const [valueName, setValueName] = useState("");
  const [valueAddress, setValueAddress] = useState("");
  const [valueTelephone, setValueTelephone] = useState("");

  const sendOrder = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: valueName,
        address: valueAddress,
        telephone: valueTelephone,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log(valueName, valueAddress, valueTelephone);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="cart--modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal--header">
          <span>Введите ваши данные</span>
          <div className="cart__item-remove">
            <Button onClick={onCancel} className="button--circle" outline>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="modal--body">
          <div className="info">
            <Input
              type="text"
              className="modal--input"
              placeholder="Ваше имя"
              value={valueName}
              onChange={(e) => setValueName(e.target.value)}
            />
            <Input
              className="modal--input"
              type="text"
              placeholder="Введите ваш адрес"
              value={valueAddress}
              onChange={(e) => setValueAddress(e.target.value)}
            />
            <Input
              type="text"
              className="modal--input"
              placeholder="Ваш номер телефона"
              value={valueTelephone}
              onChange={(e) => setValueTelephone(e.target.value)}
            />
          </div>
        </div>
        <div className="modal--footer">
          <Button onClick={sendOrder} className="pay-btn">
            <span>Подтвердить</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

CartModal.defaultProps = {
  isOpen: false,
};
