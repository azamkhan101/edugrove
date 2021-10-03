import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary responsive-nav'>
        <Link to='/'>
          <h1 className='logo'>
            <i class='fas fa-seedling'></i> EduGrove
          </h1>
        </Link>
        <div className='nav-tems'>
          <Link to='/roadmaps'>
            <h1>Roadmaps</h1>
          </Link>
          <Link to='/courses'>
            <h1>Courses</h1>
          </Link>
          <Link to='/electives'>
            <h1>Electives</h1>
          </Link>
          <Link>
            <h1>
              <i class='fas fa-leaf'></i> 0
            </h1>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
