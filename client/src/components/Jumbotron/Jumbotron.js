import React from 'react';

import './index.css';

function Jumbotron(props) {
  return (
    <div className="jumbotron__wrapper">
      <span className="jumbotron__text">{props.text}</span>
    </div>
  );
}

export default Jumbotron;
