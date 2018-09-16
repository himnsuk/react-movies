import React, { Component } from "react";

export default class Pagination extends Component {
  state = {};
  render() {
    const { itemCount, pageSize, onPageChange } = this.props;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link">previous</a>
          </li>
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">next</a>
          </li>
        </ul>
      </nav>
    );
  }
}
