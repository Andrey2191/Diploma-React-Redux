import { Field, Formik, Form } from "formik";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

const orderInputValidate = (values) => {
  const errors = {};
  return errors;
};

const OrderInput = () => {
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 400);
  };

  //   const sendOrder = async () => {
  //     try {
  //       const docRef = await addDoc(collection(db, "users"), {
  //         name: valueName,
  //         address: valueAddress,
  //         telephone: valueTelephone,
  //       });
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }

  //     console.log(valueName, valueAddress, valueTelephone);
  //   };

  return (
    <div>
      <Formik
        initialValues={{ name: "", address: "", telephone: "" }}
        validate={orderInputValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <Field type="text" name="address" />
            <Field type="text" name="telephone" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderInput;
