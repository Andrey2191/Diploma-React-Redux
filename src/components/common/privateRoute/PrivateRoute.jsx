import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../authorization/containers/authorizationHook/use-auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();

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
