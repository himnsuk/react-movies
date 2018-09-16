import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Switch } from "react-router-dom";
import Product from "./components/products";
import Posts from "./components/posts";
import Dashboard from "./components/dashboard";
import Navbar from "./components/common/navbar";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/product" component={Product} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Movies} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
