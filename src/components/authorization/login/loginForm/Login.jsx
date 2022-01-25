import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormAuth } from "../../authorizationForm/Form";
import { login } from "../../slice/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (email, password) => {
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      history.push("/");
    } else {
      alert("Пользователь не найден!");
    }
  };

  return (
    <div>
      <FormAuth title="Войти" handleClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
