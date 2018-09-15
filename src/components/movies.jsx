import React, { Component } from "react";
import NavBar from "./navbar";
import Table from "./table";
export default class Movies extends Component {
  state = {};
  render() {
    console.log("Movies", this.state.movies);
    return (
      <React.Fragment>
        <NavBar />
        <Table />
      </React.Fragment>
    );
  }
}
