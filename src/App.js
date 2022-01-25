import React from "react";
import "./App.css";

import { Header } from "./components";
import { Home, Cart } from "./components/index";
import Login from "./components/authorization/login/loginPage/Login";
import Register from "./components/authorization/register/registerPage/Register";
import OrderPage from "./components/OrderHistoryComponents/OrderPage";
import ConfirmPage from "./components/confirmComponents/ConfirmPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/order" component={OrderPage} exact />
          <Route path="/confirm" component={ConfirmPage} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
