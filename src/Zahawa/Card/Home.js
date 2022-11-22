import React from "react";
import './Home.css';
import image from './image/icon.png'
import image1 from './image/Group 9.svg'
import Button from "../../Components/Button";
const Home = () => {
  {console.log("home")}
  return (
    <div>
    <div className="header">
          <div className="Homepage-heading">
            <h1>Home</h1>
            <img src={image} />
          </div>
          <div className="circle-div">
            <div className="image"><img src={image1} />
              <div className="circle-content">
                <h1>287</h1>
                <p>Total orders</p>
                <p>This week</p>
              </div></div>
            <div className="circle-right-box">
              <p>Currently active</p>
              <h1>42</h1>
            </div>
            <div className="circle-right-box">
              <p>Completed</p>
              <h1>127</h1></div>
            <div className="circle-right-box">
              <p>Cancelled</p>
              <h1>18</h1></div>
          </div>
        </div>
        <div className="order">
          <h1>Currently active orders</h1>
          <h1>See all orders</h1>
        </div>
        <div className="button-div">
          <Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Order placed"} />

        </div>
      </div>

  
  )
}
export default Home;