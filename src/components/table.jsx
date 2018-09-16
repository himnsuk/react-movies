import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";

export default class Table extends Component {
  state = {
    movies: getMovies(),
    size: 4
  };

  handleDelete = movie => {
    console.log("Movie", movie);
    const movies = this.state.movies.filter(_movie => movie._id !== _movie._id);
    this.setState({ movies });
  };

  handlePageChange = () => {
    console.log("This page got changed");
  };

  render() {
    const remain = this.state.movies.length ? this.state.movies.length : "no";
    const remClass = this.state.movies.length
      ? "alert alert-primary"
      : "alert alert-danger";
    return (
      <React.Fragment>
        <div className={remClass + " mt-2"}>
          There are {remain} movies in the table
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th> {movie._id} </th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={this.state.movies.length}
          pageSize={this.state.size}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
