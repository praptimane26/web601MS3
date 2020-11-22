//Brian Design. (2020, August 31). React Form Validation Using Custom Hooks Tutorial—Beginner React JS Project. https://www.youtube.com/watch?v=KGFG-yQD7Dw

import { object } from "prop-types";
import { useState, useEffect } from "react";


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
 

   
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
       callback();
      
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

// import { useState, useEffect } from "react";

// const useForm = (validate) => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password2: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     //e short for events function
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setErrors(validate(values));
//     setIsSubmitting(true);
//   };

//   return { handleChange, values, handleSubmit, errors };
// };

// export default useForm;
