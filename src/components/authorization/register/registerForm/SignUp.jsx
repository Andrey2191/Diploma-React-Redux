import { FormAuth } from "../../authorizationForm/Form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../slice/registerSlice";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = (email, password) => {
    dispatch(register({ email, password }));
  };

  return (
    <div>
      <FormAuth title="Зарегестрироваться" handleClick={handleRegister} />
    </div>
  );
};
