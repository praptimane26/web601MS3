import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //helps not showing the button on refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Kayla Jolly Hairdresser
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/*React Navbar Dropdown Menu Responsive Tutorial—Beginner React JS Project. (n.d.). Retrieved September 15, 2020, from https://www.youtube.com/watch?v=T2MhVxJxsL0
 */
// import React, { useState } from "react";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   window.addEventListener("resize", showButton);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo">
//             Kayla Jolly Hairdresser <i className="fab fa-firstdraft" />
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Services <i className="nav-links" />
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/portfolio"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Portfolio
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/contact-us"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Contact Us
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle="btn--outline">Login</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
