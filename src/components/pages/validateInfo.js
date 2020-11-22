//Brian Design. (2020, August 31). React Form Validation Using Custom Hooks Tutorial—Beginner React JS Project. https://www.youtube.com/watch?v=KGFG-yQD7Dw

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
// export default function validateInfo(values) {
//   let errors = {};

//   //username validation
//   if (!values.username.trim()) {
//     errors.username = "Username Required";
//   }

//   //email validation
//   if (!values.email) {
//     errors.email = "Email Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Email Address is invalid";
//   }

//   //validation password
//   if (!values.password) {
//     errors.password = "Password is Required";
//   } else if (values.password.length < 8) {
//     errors.password = "Password needs to be 8 characters or more";
//   }

//   //validation for re-entering password
//   if (!values.password2) {
//     errors.password2 = "Password is required";
//   } else if (values.password2 !== values.password) {
//     errors.password2 = "Passwords do not match";
//   }
//   return errors;
// }
