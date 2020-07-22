import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-danger mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Bashar's Movie &  Series Info App
            </Link>
			<a target="_blank" className="btn btn-success mr-5" href="https://bashar-movie-documentation.herokuapp.com/index.html">Documentation</a>
			<a target="_blank" className="btn btn-success mr-5" href="https://www.youtube.com/watch?v=TnBF6gfLLBk&t=86s">Site Tour</a>
			<a target="_blank" className="btn btn-success" href="https://findbashar.com/">Bashar's Portfolio</a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
