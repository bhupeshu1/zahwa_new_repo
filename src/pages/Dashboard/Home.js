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
          <div class="Homepage-heading">
            <h1>Home</h1>
            <img src={image} />
          </div>
          <div class="circle-div">
            <div class="image"><img src={image1} />
              <div class="circle-content">
                <h1>287</h1>
                <p>Total orders</p>
                <p>This week</p>
              </div></div>
            <div class="circle-right-box">
              <p>Currently active</p>
              <h1>42</h1>
            </div>
            <div class="circle-right-box">
              <p>Completed</p>
              <h1>127</h1></div>
            <div class="circle-right-box">
              <p>Cancelled</p>
              <h1>18</h1></div>
          </div>
        </div>
        <div class="order">
          <h1>Currently active orders</h1>
          <h1>See all orders</h1>
        </div>
        <div class="button-div">
          <Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Order placed"} />

        </div>
      </div>
{/* <h1>workig=ng</h1> */}
    </div>
  )
}
export default Home;