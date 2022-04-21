import React from "react";
import "./App.css";

import { Header } from "./components";
import { Home, Cart } from "./components/index";
import Login from "./components/authorization/components/loginPage/Login";
import Register from "./components/authorization/components/registerPage/Register";
import OrderPage from "./components/OrderHistoryComponents/components/OrderPage";
import ConfirmPage from "./components/confirmComponents/ConfirmPage";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/common/privateRoute/PrivateRoute";
import AdminPage from "./components/adminPanel/components/AdminPage";
import CreatePizza from "./components/createPizza/components/CreatePizza";
import AdminOrders from "./components/adminPanel/components/AdminOrders";
import AdminUsers from "./components/adminPanel/components/AdminUsers";

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
          <PrivateRoute path="/admin" component={AdminPage} exact />
          <PrivateRoute path="/create" component={CreatePizza} exact />
          <PrivateRoute path="/adminorders" component={AdminOrders} exact />
          <PrivateRoute path="/adminusers" component={AdminUsers} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
