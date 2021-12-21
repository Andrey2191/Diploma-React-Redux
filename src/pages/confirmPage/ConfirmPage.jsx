import React, { useState } from "react";
import Input from "../../components/common/input/Input";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../components/common/button/Button";
import classNames from "classnames";
import { Link } from "react-router-dom";
import OrderInput from "../../components/common/formik/formik";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Must have a character")
    .max(15, "Must be shorter than 15")
    .required("Must enter a name"),
  address: yup
    .string()
    .min(1, "Must have a character")
    .max(25, "Must be shorter than 25")
    .required("Must enter a address"),
  telephone: yup
    .number()
    .min(1, "Must have a character")
    .max(10, "Must be shorter than 15")
    .required("Must enter a telephone"),
});

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
        {/* <OrderInput /> */}
        <Formik
          initialValues={{ name: "", address: "", telephone: "" }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                name="name"
                id="name"
                // className={classNames("modal--input", "input")}
                className={classNames(
                  touched.name && errors.name ? "has-error" : "modal--input",
                  "input"
                )}
                // ДОделать ошибку инпута 12:28
                placeholder="Ваше имя"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label htmlFor="address">address</label>
              <Input
                type="text"
                name="address"
                id="address"
                className={classNames("modal--input", "input")}
                placeholder="Введите ваш адрес"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <label htmlFor="telephone">telephone</label>
              <Input
                type="tel"
                name="telephone"
                id="telephone"
                className={classNames("modal--input", "input")}
                placeholder="Ваш номер телефона"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telephone}
              />

              <Button onClick={sendOrder} className={classNames("pay-btn")}>
                <span>Подтвердить</span>
              </Button>
            </Form>
          )}
        </Formik>
        {/* <Input
          type="text"
          name="name"
          className={classNames("modal--input", "input")}
          placeholder="Ваше имя"
          value={valueName}
          onChange={(e) => setValueName(e.target.value)}
        />
        <Input
          className={classNames("modal--input", "input")}
          type="text"
          name="address"
          placeholder="Введите ваш адрес"
          value={valueAddress}
          onChange={(e) => setValueAddress(e.target.value)}
        />
        <Input
          type="text"
          name="telephone"
          className={classNames("modal--input", "input")}
          placeholder="Ваш номер телефона"
          value={valueTelephone}
          onChange={(e) => setValueTelephone(e.target.value)}
        /> */}
      </div>
      <div className={classNames("confirm--page-button")}>
        <Link to="/cart">
          <span>Вернуться назад</span>
        </Link>
        {/* <Button onClick={sendOrder} className={classNames("pay-btn")}>
          <span>Подтвердить</span>
        </Button> */}
      </div>
    </div>
  );
};

export default ConfirmPage;
