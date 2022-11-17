import React from 'react'
import './Homepage.css'

import image1 from './image/orangecircle.svg'
import image2 from './image/greencircle.png'
import image3 from './image/notification.png'
const HomePage = () => {
  return (
    <div>
      <div class="home-heading">
        <h1>Home</h1>
        <img src={image3} />
      </div>
      {/*top Home and icon close*/}
      <div class="active-box">
        <img src={image1} />
        <div class="circle-content">
          <h1>287</h1>
          <h5 id="total-order">Total orders</h5>
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
            <h1 id="see">See all orders</h1>
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
            <div>
            <h3>$240.00.4 items</h3>
            <p>Ordered on Jan 2nd, 2021</p>
            </div>
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
      {/*card components start*/}
      <div class="card-components">
        <img src={image3} id="combined-shape" />
        <div class="card-component-content">
          <h1>168</h1>
          <p>Total orders</p>
        </div>
        <div class="card-sale">
          <div>
            <p>Item for sale</p>
            <h1>168</h1>
          </div>
          <div>
            <p>Item sold</p>
            <h1>20</h1>
          </div>
        </div>
        <p id="text">See inventory</p>
      </div>
    </div>
  )
}
export default HomePage;
