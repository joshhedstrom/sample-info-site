import React from 'react';

import './index.css';

function Form(props) {
  return (
    <div className='form__wrapper'>
      {props.formFields.map(field => {
        return field.textArea ? (
          <>
            <label>{field.title}</label>
            <textarea name={field.name} onChange={props.handleChange} />
          </>
        ) : (
          <>
            <label>{field.title}</label>
            <input name={field.name} onChange={props.handleChange} />
          </>
        );
      })}
      <button className='form__submit' onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Form;
