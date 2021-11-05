import "./App.css";

import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { setPizzas } from "./redux/action/pizzas";
import { connect } from "react-redux";

// function App() {
//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.dispatch(setPizzas(data.pizzas));
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    setPizzas: () => dispatch(setPizzas),
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
