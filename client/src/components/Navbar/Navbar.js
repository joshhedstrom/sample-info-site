import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Navbar(props) {
  return (
    <div className="header__wrapper">
      <div>
        <Link className="header__link" to="/">home</Link>
        <Link className="header__link" to="/about">about</Link>
        <Link className="header__link" to="/contact">contact</Link>
      </div>
      <div>
        <span className="header__subtitle">
         a sampling of informational pages
        </span>
      </div>
    </div>
  );
}

export default Navbar;
