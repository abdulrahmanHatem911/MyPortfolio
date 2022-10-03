import React, { Component } from "react";
import { Link } from "react-router-dom";
import companyLogo from "./img/cart.svg";

class Meue extends Component {
  state = {
  };
  render() {

    
    return (
      <React.Fragment>
        <div className="mt-5 container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col"> price </th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((p) => (
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Link to={`/produt/${p.id}`}>{p.name}</Link>
                  </td>
                  <td>{p.price}</td>
                  <td>
                    <img src={companyLogo} alt="" width="3%" />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Meue;
