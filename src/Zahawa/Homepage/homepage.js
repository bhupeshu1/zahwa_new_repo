import React from 'react'
import './Homepage.css'
import image1 from './../image/orangecircle.svg'
import image3 from "./../image/notification.png"
// import Selectbox from '../../Components/SelectBox/Selectbox'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-heading">
        <h1>Home</h1>
        <img src={image3} alt={"s"} class="bell-icon" />
        {/* <i class="bi bi-bell-fill"></i> */}

      </div>
      {/*top Home and icon close*/}
      <div className="Active-box-circle">
        <div className='order-circle'>
          <img src={image1} className="circle" alt="sdsd" />
          <div className="circle-content">
            <h2>287</h2>
            <p>Total order</p>
            <p>This week</p>
          </div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div class="dot-icon"></div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div class="dot-icon-2"></div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div class="dot-icon-3"></div>
        </div>
      </div>
      <div className="order-box-container">
        <div className="price-list">
          {/*
        <div class="order-btn">
        <div class="total-order">
          <h1 class="order-details">Currently active orders</h1>
          <h1 class="order-details">See all orders</h1>
          </div>
          <div class="btn-serise"></div>
  </div>*/}
          {[1, 2, 3, 4].map((item, id) => (

            <div className="order-list" key={`first+${id}`}>
              <div className="item">
                <h3>Elise Beverley</h3>
                <p>Wedding & anniversary</p>
              </div>
              <div>
                <div className="item">
                  <h3>$240.00.4 items</h3>
                  <p>Ordered on Jan 2nd, 2021</p>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="card-menu">
          <div className="oval-img">
            <div className="oval-content">
              <h1 className="card-heading">168</h1>
              <p>Total orders</p></div>
          </div>
          <div className="sale-item">
            <div class="card-item">
              <p>Item for sale</p>
              <h1 class="card-heading">168</h1>
            </div>
            <div><p>Item sold</p>
              <h1 class="card-heading">20</h1>
            </div>
          </div>
          <p class="card-text">see inventory</p>

        </div>
      </div>
    </div>



  )
}
export default HomePage;
