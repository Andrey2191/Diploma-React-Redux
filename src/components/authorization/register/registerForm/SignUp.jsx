import { FormAuth } from "../../authorizationForm/Form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../redux/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = (email, password) => {
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(({ user }) => {
    //     console.log(user);
    //     dispatch(
    //       setUser({
    //         email: user.email,
    //         id: user.uid,
    //         token: user.accessToken,
    //       })
    //     );
    //     push("/");
    //   })
    //   .catch(console.error);
  };

  return (
    <div>
      <FormAuth title="Зарегестрироваться" handleClick={handleRegister} />
    </div>
  );
};
