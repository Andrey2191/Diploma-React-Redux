import { Form } from "../form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="Sign in" handleClick={handleLogin} />
    </div>
  );
};
