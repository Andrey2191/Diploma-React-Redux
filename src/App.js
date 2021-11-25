import React from "react";
import "./App.css";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </div>
    </div>
  );
}

export default App;
