import React from "react";
import "./App.css";

import { Header } from "./components";
import { Home, Cart } from "./components/index";
import Login from "./components/authorization/login/loginPage/Login";
import Register from "./components/authorization/register/registerPage/Register";
import OrderPage from "./components/OrderHistoryComponents/OrderPage";
import ConfirmPage from "./components/confirmComponents/ConfirmPage";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/common/privateRoute/PrivateRoute";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/cart" component={Cart} exact />
          <PrivateRoute path="/order" component={OrderPage} exact />
          <PrivateRoute path="/confirm" component={ConfirmPage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
