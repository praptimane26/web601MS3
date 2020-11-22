//Brian Design. (2020, August 31). React Form Validation Using Custom Hooks Tutorial—Beginner React JS Project. https://www.youtube.com/watch?v=KGFG-yQD7Dw

import React, { useState } from 'react';
import './Form.css';
import FormSignup from './SignUp';
import FormSuccess from './FormSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;

// import React, { useState } from "react";
// import SignUp from "./SignUp";
// import FormSuccess from "./FormSuccess";
// import "./Form.css";

// const Form = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }
//   return (
//     <>
//       <div className="form-container">
//         <span className="close-btn"></span>
//         <div className="form-content-left">
//           <img src="img/img-2.svg" alt="spaceship" className="form-img"></img>
//         </div>

//         {!isSubmitted ? (
//           <SignUp submitForm={submitForm}></SignUp>
//         ) : (
//           <FormSuccess></FormSuccess>
//         )}
//       </div>
//     </>
//   );
// };

// export default Form;
