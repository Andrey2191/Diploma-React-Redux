import { FormAuth } from "../../authorizationForm/Form";
import { useDispatch } from "react-redux";
import { register } from "../../slice/registerSlice";

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    dispatch(register({ email, password }));
  };

  return (
    <div>
      <FormAuth title="Зарегестрироваться" handleClick={handleRegister} />
    </div>
  );
};
