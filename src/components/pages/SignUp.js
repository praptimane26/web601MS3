//Brian Design. (2020, August 31). React Form Validation Using Custom Hooks Tutorial—Beginner React JS Project. https://www.youtube.com/watch?v=KGFG-yQD7Dw

import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Footer from '../Footer';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Please fill in your details to Subscribe and get alerts for all the exciting offers!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default FormSignup;

// /*React Navbar Dropdown Menu Responsive Tutorial—Beginner React JS Project. (n.d.). Retrieved September 15, 2020, from https://www.youtube.com/watch?v=T2MhVxJxsL0
//  */
// import React from "react";
// import "../../App.css";
// import useForm from "./useForm";
// import validate from "./validateInfo";
// import "./Form.css";

// // export default function SignUp() {
// //   return (
// //     <>
// //       <h1 className="sign-up">Sign Up Form</h1>
// //     </>
// //   );
// // }

// const SignUp = (submitForm) => {
//   const { handleChange, values, handleSubmit, errors } = useForm(
//     submitForm,
//     validate
//   );

//   return (
//     <div className="form-content-right">
//       <form className="form" onSubmit={handleSubmit}>
//         <h1>
//           Get Started with us Today! Create your account by filling out the
//           information below
//         </h1>
//         <div className="form-inputs">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             name="username"
//             className="form-input"
//             placeholder="Enter your username"
//             value={values.username}
//             onChange={handleChange}
//           ></input>
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="email" className="form-label">
//             Email Address
//           </label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Enter your email"
//             value={values.email}
//             onChange={handleChange}
//           ></input>
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             className="form-input"
//             placeholder="Enter your password"
//             value={values.password}
//             onChange={handleChange}
//           ></input>
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="password2" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             id="password2"
//             type="password"
//             name="password2"
//             className="form-input"
//             placeholder="Please confirm Password"
//             value={values.password2}
//             onChange={handleChange}
//           ></input>
//           {errors.password2 && <p>{errors.password2}</p>}
//         </div>
//         <button className="form-input-btn" type="submit">
//           Sign Up
//         </button>
//         <span className="form-input-login">
//           Already have an Account? Login <a href="#">here</a>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
