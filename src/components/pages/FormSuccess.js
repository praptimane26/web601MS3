//Brian Design. (2020, August 31). React Form Validation Using Custom Hooks Tutorial—Beginner React JS Project. https://www.youtube.com/watch?v=KGFG-yQD7Dw

import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;
