import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout Kayla's Instagram Page!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-6.png"
              text="Unbelievable Balayage Packages with great discounts waiting for you!"
              label="Hair Color"
              path="/portfolio"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Blayage Service"
              label="Hair Color"
              path="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Blayage Service"
              label="Hair Color"
              path="/portfolio"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Blayage Service"
              label="Hair Color"
              path="/Portfolio"
            />
            <CardItem
              src="images/img-5.png"
              text="Blayage Service"
              label="Hair Color"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

// import React from "react";
// import CardItem from "./CardItem";

// function Cards() {
//   return (
//     <div className="cards">
//       <h1>Check Out these Hair Deals</h1>
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <ul className="cards__items">
//               <CardItem></CardItem>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

// import React from "react";
// import CardItem from "./CardItem";

// function Cards() {
//   return (
//     <div className="cards">
//       <h1>Check Out these Hair Deals</h1>
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <ul className="cards__items">
//               <CardItem></CardItem>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
