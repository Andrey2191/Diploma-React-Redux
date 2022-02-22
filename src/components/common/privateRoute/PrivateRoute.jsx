import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../authorization/authorizationHook/use-auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();
  console.log(231231);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
