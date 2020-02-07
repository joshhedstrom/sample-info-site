import React from 'react';

import './index.css';

function Banner(props) {
  return <div className="banner__image" style={{ backgroundImage: `url(${props.image})` }} />;
}

export default Banner;
