import React, { useState } from 'react'
import './Homepage.css'
import image1 from "./../image/orangecircle.svg"
import image3 from "./../image/notification.png"
import Selectbox from "../../Components/SelectBox/index"
import Notification from '../../Components/Notification/index'
import Hamburger from './../image/Hamburger.png'
import HamburgerMenu from '../../Components/HamburgerMenu/hamburgermenu'
import Sidebar from '../../Components/Sidebar'
const HomePage = () => {
  const [hamburger, setHamburger] = useState(false)

  const [notification, setNotification] = useState(false);
  return (
    <div className="homepage">
      <div className="home-heading">
        <div className='hamburger-Menu' >
          {/* <Sidebar/> */}

          <img onClick={() => setHamburger(true)} src={Hamburger} alt="" height="40px" width="40px" />
          <HamburgerMenu hamburger={hamburger} />
        </div>

        <h1>Home</h1>
        <img onClick={() => setNotification(true)} src={image3} alt={"s"} class="bell-icon" />
        <Notification notification={notification} onClose={() => setNotification(false)} />
        {/* <i class="bi bi-bell-fill"></i> */}

      </div>
      {/*top Home and icon close*/}
      <div className="Active-box-circle">
        <div className='order-circle'>
          <img src={image1} className="circle" alt="sdsd" />
          <div className="circle-content">
            <h2>287</h2>
            <p>Total order</p>
            <Selectbox />


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

          <div class="order-placed">
            <span class="order-details">Currently active orders</span>
            <span class="order-details">See all orders</span>
          </div>
          <div class="btn-serise">
            <button class="btn">Order placed</button>
            <button class="btn-text">Confirmed</button>
            <button class="btn-text">On process</button>
            <button class="btn-text">Completed</button>
          </div>

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
