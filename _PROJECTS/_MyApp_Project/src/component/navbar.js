import React, { Component } from "react";
import { Link } from "react-router-dom";

import Meue from "./menue";



const Navbar = () => {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item activ">
          <Link class="nav-link" to="/menue">
          Meue
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link class="nav-link" to="/shop">
            Shoping Card
          </Link>
        </li> */}


      </ul>

      <span className="btn btn-warning justify-content-end nav-item">
        ffffffffffffffffffffffffff
      </span>
      
    </nav>
  </React.Fragment>
  );
};

export default Navbar;
