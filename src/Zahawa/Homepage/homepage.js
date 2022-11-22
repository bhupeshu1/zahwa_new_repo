import React from 'react'
import './Homepage.css'
import image1 from './../image/orangecircle.svg'
import image2 from "./../image/greencircle.png"
import image3 from "./../image/notification.png"
import Selectbox from '../../Components/SelectBox/Selectbox'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-heading">
        <h1>Home</h1>
        <img
          src={image3}
          alt={"s"}
        />
      </div>
      {/*top Home and icon close*/}
      <div className="Active-box-circle">
        <div className='order-circle'><img src={image1} className="circle" />
          <div className="circle-content">
            <h2>287</h2>
            <p>Total order</p>
            <p>This week</p>
          </div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
        </div>
      </div>




      {/*
        <div className="box">
          <div className="box-property">
            <p>Currently active</p>
            <h3>42</h3>
          </div>
        </div>
        <div className="box">
          <div className="box-property">
            <p>Completed</p>
            <h3>127</h3>
          </div>
        </div>
        <div className="box">
          <div className="box-property">
            <p>Cancelled</p>
            <h3>18</h3>
          </div>
        </div>
        </div>
  </div>*/}
      {/*circle and box end*/}
      <div className="mid-homepage">
        <div className="order-box">
          <div className="button-text">
            <div className="text">
              <h3>Currently active orders</h3>
              <h3 id="see">See all orders</h3>
            </div>
            <div className="btn-div">
              {/*<Button textStyle={"submitButtonText"} buttonStyle={"btn"} buttonText={"Order placed"} />*/}
              <button className="btn-dark">Order placed</button>
              <button className="btn Confirned">Confirmed</button>
              <button className="btn process">On process</button>
              <button className="btn completed">Completed</button>
            </div>
          </div>
          <div className="order-list">
            <div class="item">
              <h3>Elise Beverley</h3>
              <p>Wedding & anniversary</p>
            </div>
            <div>
              <div class="item">
                <h3>$240.00.4 items</h3>
                <p>Ordered on Jan 2nd, 2021</p>
              </div>
            </div>


          </div>
          <div className="order-list">
            <div class="item">
              <h3>Elise Beverley</h3>
              <p>Wedding & anniversary</p>
            </div>
            <div class="item"acti>
              <h3>$240.00.4 items</h3>
              <p>Ordered on Jan 2nd, 2021</p>
            </div>

          </div>
          <div className="order-list">
            <div class="item">
              <h3>Elise Beverley</h3>
              <p>Wedding & anniversary</p>
            </div>
            <div class="item">
              <h3>$240.00.4 items</h3>
              <p>Ordered on Jan 2nd, 2021</p>
            </div>

          </div>
          <div className="order-list">
            <div class="item">
              <h3>Elise Beverley</h3>
              <p>Wedding & anniversary</p>
            </div>
            <div class="item">
              <h3>$240.00.4 items</h3>
              <p>Ordered on Jan 2nd, 2021</p>
            </div>

          </div>
        </div>
        {/*card components start*/}
        <div className="card-components">
          <img src={image2} id="combined-shape" />
          <div className="card-component-content">
            <h1>168</h1>
            <p>Total orders</p>
          </div>
          <div className="card-sale">
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
    </div>


  )
}
export default HomePage;
