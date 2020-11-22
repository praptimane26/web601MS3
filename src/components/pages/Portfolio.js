/*React Navbar Dropdown Menu Responsive Tutorial—Beginner React JS Project. (n.d.). Retrieved September 15, 2020, from https://www.youtube.com/watch?v=T2MhVxJxsL0
 */
import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";

export default function Portfolio() {
  return (
    <>
      <h1 className="portfolio">Portfolio</h1>
      <Cards />
      <Footer />
    </>
  );
}
