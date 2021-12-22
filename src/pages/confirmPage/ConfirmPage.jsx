import React from "react";
import Input from "../../components/common/input/Input";
import { db } from "../../firebase";
import { collection, addDoc, getDoc } from "firebase/firestore";
import Button from "../../components/common/button/Button";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Error from "../../components/common/error/Error";

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
    .min(0, "Must have a character")
    .max(10, "Must be shorter than 10")
    .required("Must enter a telephone"),
});

const ConfirmPage = () => {
  const sendOrder = async (valueName, valueAddress, valueTelephone) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: valueName,
        address: valueAddress,
        telephone: valueTelephone,
      });

      const result = await getDoc(docRef);
      console.log({ result: result.data() });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={classNames("confirm--page")}>
      <div className={classNames("confirm--header")}>
        <h1>Введите ваши данные</h1>
      </div>
      <div className={classNames("confirm--input")}>
        <Formik
          initialValues={{ name: "", address: "", telephone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            resetForm();
            setSubmitting(false);
            sendOrder(values.name, values.address, values.telephone);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className={classNames("input-row")}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className={classNames(
                    touched.name && errors.name ? "has-error" : "modal--input",
                    "input"
                  )}
                  placeholder="Ваше имя"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error touched={touched.name} message={errors.name} />
              </div>
              <div className={classNames("input-row")}>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  className={classNames(
                    touched.address && errors.address
                      ? "has-error"
                      : "modal--input",
                    "input"
                  )}
                  placeholder="Введите ваш адрес"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <Error touched={touched.address} message={errors.address} />
              </div>
              <div className={classNames("input-row")}>
                <Input
                  type="text"
                  name="telephone"
                  id="telephone"
                  className={classNames(
                    touched.telephone && errors.telephone
                      ? "has-error"
                      : "modal--input",
                    "input"
                  )}
                  placeholder="Ваш номер телефона"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephone}
                />
                <Error touched={touched.telephone} message={errors.telephone} />
              </div>

              <Button
                type="submit"
                className={classNames("pay-btn")}
                disabled={isSubmitting}
              >
                <span>Подтвердить</span>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={classNames("confirm--page-button")}>
        <Link to="/cart">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPage;
