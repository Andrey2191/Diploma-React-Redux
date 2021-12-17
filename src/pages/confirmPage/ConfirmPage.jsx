import React, { useState } from "react";
import Input from "../../components/common/input/Input";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../components/common/button/Button";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ConfirmPage = () => {
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
    <div className={classNames("confirm--page")}>
      <div className={classNames("confirm--header")}>
        <h1>Введите ваши данные</h1>
      </div>
      <div className={classNames("confirm--input")}>
        <Input
          type="text"
          className={classNames("modal--input", "input")}
          placeholder="Ваше имя"
          value={valueName}
          onChange={(e) => setValueName(e.target.value)}
        />
        <Input
          className={classNames("modal--input", "input")}
          type="text"
          placeholder="Введите ваш адрес"
          value={valueAddress}
          onChange={(e) => setValueAddress(e.target.value)}
        />
        <Input
          type="text"
          className={classNames("modal--input", "input")}
          placeholder="Ваш номер телефона"
          value={valueTelephone}
          onChange={(e) => setValueTelephone(e.target.value)}
        />
      </div>
      <div className={classNames("confirm--page-button")}>
        <Link to="/cart">
          <span>Вернуться назад</span>
        </Link>
        <Button onClick={sendOrder} className={classNames("pay-btn")}>
          <span>Подтвердить</span>
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPage;
