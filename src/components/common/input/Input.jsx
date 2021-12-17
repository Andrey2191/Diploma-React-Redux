import React from "react";
import classNames from "classnames";
// import {Formik} from 'formik'
// import yup from 'yup'
// import

// function Input({ type, value, onChange, placeholder, className }) {
//   const classes = classNames("input", "modal--input");
//   return (
//    <Formik
//     initialValues={{
//       name:'',
//       address:'',
//       telephone:'',

//     }}
//     validateOnBlur
//     onSubmit={(values) => {console.log(values)}}
//    >
//      {({values, errors, touched, handleChange, handeBlur, isValid, handleSubmit}) => (
//        <input type={type} name={name} onChange={handleChange} onBlur={handeBlur} value={value.name} />
//      )}
//    </Formik>
//   );
// }

// export default Input;
function Input({ type, value, onChange, placeholder, className }) {
  const classes = classNames("input", "modal--input");
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default Input;

// <input
// className={className}
// type={type}
// value={value}
// placeholder={placeholder}
// onChange={onChange}
// />
