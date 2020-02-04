import React from 'react';

import './index.css';

function Form(props) {
  return (
    <div className="form__wrapper">
      {props.formFields.map(field => {
        return field.textArea ? (
          <div>
            <label>{field.title}</label>
            <textarea onChange={props.handleChange} />
          </div>
        ) : (
          <div>
            <label>{field.title}</label>
            <input onChange={props.handleChange} />
          </div>
        );
      })}
    </div>
  );
}

export default Form;
