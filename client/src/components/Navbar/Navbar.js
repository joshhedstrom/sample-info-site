import React from 'react';

import './index.css';

function Navbar(props) {
  return (
    <div className="header__wrapper">
      <div>
        <span className="header__title">infoLogo</span>
      </div>
      <div>
        <span className="header__subtitle">
          tech lead - full stack web dev - react and node
        </span>
      </div>
    </div>
  );
}

export default Navbar;
