import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Navbar from "./navbar";
import Menue from "./menue";
import ShopingCard from "./shopingcard";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Bruger", price: 12, isCart: false },
      { id: 2, name: "fries", price: 54, isCart: false },
      { id: 3, name: "cola", price: 45, isCart: false },
    ],
  };

  handelIncrease = (num) => {
    const products = [...this.state.products];
    let indexProduct = products.indexOf(num);
    products[indexProduct] ={...products[indexProduct]}

    products[indexProduct].price ++;

    this.setState({ products: products });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route
            path="/menue"
            exact
            render={(props) => (
              <Menue products={this.state.products} {...props} />
            )}
          />
          <Route
            path="/produt/:id"
            render={(props) => (
              <ShopingCard
                onClick={this.handelIncrease}
                products={this.state.products}
                {...props}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
