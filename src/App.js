import "./App.css";

import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setPizza(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizza} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
