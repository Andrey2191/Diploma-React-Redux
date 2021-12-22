import { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Error from "../../common/error/Error";
import Input from "../../common/input/Input";
import classNames from "classnames";
import Button from "../../common/button/Button";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(1, "Must have a character")
    .max(25, "Must be shorter than 25")
    .required("Must enter a email"),
  password: yup
    .string()
    .min(1, "Must have a character")
    .max(25, "Must be shorter than 25")
    .required("Must enter a password"),
});

export const FormAuth = ({ title, handleClick }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetForm();
          setSubmitting(false);
          handleClick(values.email, values.password);
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
                type="email"
                name="email"
                id="email"
                className={classNames(
                  touched.email && errors.email ? "has-error" : "modal--input",
                  "input"
                )}
                placeholder="Ваш Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Error touched={touched.email} message={errors.email} />
            </div>
            <div className={classNames("input-row")}>
              <Input
                type="password"
                name="password"
                id="password"
                className={classNames(
                  touched.password && errors.password
                    ? "has-error"
                    : "modal--input",
                  "input"
                )}
                placeholder="Введите ваш пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Error touched={touched.password} message={errors.password} />
            </div>

            <Button
              type="submit"
              // className={classNames("pay-btn")}
              disabled={isSubmitting}
            >
              <span>{title}</span>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
