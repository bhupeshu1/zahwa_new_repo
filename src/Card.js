import React from "react";
import './card.css';
import Button from "./Components/Button";
import image from './Components/image/Combined Shape.png'
import Text from "./Components/Text/TextComponent";

function Card({ content }) {
  return (
    <div>
      <div className="card-container">

        {content && <><img src={image} id="circleimg" /><div className="top-circle">
          <h1 className="number">168</h1>
          <p className="text">Total orders</p>
        </div><div className="item">
            <div className="sale">
              <p className="text">Item for sale</p>
              <h1 className="number">168</h1>
            </div>
            <div className="sale">
              <p className="text">Item sold</p>
              <h1 className="number">20</h1>y
              {/* <Text text={"Bhupesh"} styles={"Number"} /> */}
            </div>
          </div><p id="bottompara">See inventory</p></>}
        { /* <Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Click me"} /> */}
      </div>



    </div>
  )
}

export default Card;