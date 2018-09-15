import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Table extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log("Movie", movie);
    const movies = this.state.movies.filter(_movie => movie._id !== _movie._id);
    this.setState({ movies });
  };

  render() {
    return (
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
    );
  }
}

export default Table;
