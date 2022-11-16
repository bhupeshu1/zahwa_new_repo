import React from 'react'
import './Homepage.css'
import image from './image/icon.png'
import image1 from './image/Group 9.svg'
import image2 from './image/Oval.png'

const HomePage = () => {
  return (
    <div>
      <div class="home-heading">
        <h1>Home</h1>
        <img src={image} id="notificatin-img" />
      </div>
      {/*top Home and icon close*/}
      <div class="active-box">
        <img src={image1} />
        <div class="circle-content">
          <h1>287</h1>
          <h5>Total orders</h5>
          <p>This week</p>
        </div>
        <div class="box">
          <div class="box-property">
            <p>Currently active</p>
            <h3>42</h3>
          </div>
        </div>
        <div class="box">
          <div class="box-property">
            <p>Completed</p>
            <h3>127</h3>
          </div>
        </div>
        <div class="box">
          <div class="box-property">
            <p>Cancelled</p>
            <h3>18</h3>
          </div>
        </div>
      </div>
      {/*circle and box end*/}
      <div class="order-box">
        <div class="button-text">
          <div class="text">
            <h1>Currently active orders</h1>
            <h1>See all orders</h1>
          </div>
          <div class="btn-div">
            {/*<Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Order placed"} />*/}
            <button class="btn-dark">Order placed</button>
            <button class="btn Confirned">Confirmed</button>
            <button class="btn process">On process</button>
            <button class="btn completed">Completed</button>
          </div>
        </div>
        <div class="order-list">
          <div>
            <h3>Elise Beverley</h3>
            <p>Wedding & anniversary</p>
          </div>
          <div>
            <h3>$240.00.4 items</h3>
            <p>Ordered on Jan 2nd, 2021</p>
          </div>

        </div>
        <div class="order-list">
          <div>
            <h3>Elise Beverley</h3>
            <p>Wedding & anniversary</p>
          </div>
          <div>
            <h3>$240.00.4 items</h3>
            <p>Ordered on Jan 2nd, 2021</p>
          </div>

        </div>
        <div class="order-list">
          <div>
            <h3>Elise Beverley</h3>
            <p>Wedding & anniversary</p>
          </div>
          <div>
            <h3>$240.00.4 items</h3>
            <p>Ordered on Jan 2nd, 2021</p>
          </div>

        </div>
        <div class="order-list">
          <div>
            <h3>Elise Beverley</h3>
            <p>Wedding & anniversary</p>
          </div>
          <div>
            <h3>$240.00.4 items</h3>
            <p>Ordered on Jan 2nd, 2021</p>
          </div>

        </div>
      </div>
    </div>
  )
}
export default HomePage;
