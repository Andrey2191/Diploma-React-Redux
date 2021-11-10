import "./App.css";

import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
