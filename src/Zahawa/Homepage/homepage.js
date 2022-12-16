import React, { useState } from 'react'
import './Homepage.css'
import image1 from "./../image/orangecircle.svg"
import image3 from "./../image/notification.png"
import Selectbox from "../../Components/SelectBox/index"
import Notification from '../../Components/Notification/index'
import Hamburger from './../image/Hamburger.png'
import HamburgerMenu from '../../Components/HamburgerMenu/hamburgermenu'
import Button from '../../Components/Button'
import Text from '../../Components/Text'
import Home from '../../Data/Home.json'

// import Sidebar from '../../Components/Sidebar'
const HomePage = () => {
  const [hamburger, setHamburger] = useState(false);
  const [notification, setNotification] = useState(false);
  const [tableLabel, setTabLabel] = useState("OrderPlaced");
  // const [tableLabel, setTabLabel] = useState("confirm");

  return (
    <div className="homepage">
      <div className="home-heading">
        <div className='hamburger-Menu'>
          <img onClick={() => setHamburger(true)} src={Hamburger} alt="S" height="40px" width="40px" />
          <HamburgerMenu hamburger={hamburger} onClose={() => setHamburger(false)} />
        </div>

        <h1>Home</h1>
        <img onClick={() => setNotification(true)} src={image3} alt={"s"} className="bell-icon" />
        <Notification notification={notification} onClose={() => setNotification(false)} />

      </div>
      {/*top Home and icon close*/}
      <div className="Active-box-circle">
        <div className='order-circle'>
          <img src={image1} className="circle" alt="sdsd" />
          <div className="circle-content">
            <h2>287</h2>
            <p>Total order</p>
            <Selectbox classsName={'Select-Box'} EventName1={'Today'} EventName2={'this week'} EventName3={'This month'} EventName4={'This year'} />
          </div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div className='dot-icon'></div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div className="dot-icon-2"></div>
        </div>
        <div className="active-box">
          <p>Currently active</p>
          <h3>42</h3>
          <div className="dot-icon-3"></div>
        </div>
      </div>
      <div className="order-box-container">
        <div className="price-list">

          <div class="order-placed">
            <span className="order-details">Currently active orders</span>
            <Text className='order-details' text={'See all orders'} />
          </div>
          <div className="btn-serise">
            <Button className="btn" buttonText="Order placed" buttonClass="order-btn" onClick={() => {
              setTabLabel("OrderPlaced")
            }} />
            <Button className="btn" buttonText="Confirmed" buttonClass="order-btn" onClick={() => {
              setTabLabel("Confirmed")
            }} />
            <Button buttonText="On process" onClick={() => {
              setTabLabel("On process")
            }} buttonClass="order-btn" />
            <Button buttonText="Completed" buttonClass="order-btn" onClick={() => {
              setTabLabel("Completed")
            }} />
          </div>

          <div>
            {tableLabel == "OrderPlaced" && <>
              {Home['order placed'].map((item, id) => (

                <div className="order-list" key={`first+${id}`}>
                  <div className="item">
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                  <div className="item">
                    <h3>{item.price}</h3>
                    <p>{item.orderdate}</p>
                  </div>
                </div>

              ))}
            </>}
            {tableLabel == "Confirmed" &&
              <>
                {Home['Confirmed'].map((item, id) => (

                  <div className="order-list" key={`first+${id}`}>
                    <div className="item">
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                    <div className="item">
                      <h3>{item.price}</h3>
                      <p>{item.orderdate}</p>
                    </div>
                  </div>

                ))}
              </>}
            {tableLabel == "On process" &&
              <>
                {Home['On process'].map((item, id) => (

                  <div className="order-list" key={`first+${id}`}>
                    <div className="item">
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                    <div className="item">
                      <h3>{item.price}</h3>
                      <p>{item.orderdate}</p>
                    </div>
                  </div>

                ))}
              </>}
          </div>
          {tableLabel == "Completed" &&
            <>
              {Home['Completed'].map((item, id) => (

                <div className="order-list" key={`first+${id}`}>
                  <div className="item">
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                  <div className="item">
                    <h3>{item.price}</h3>
                    <p>{item.orderdate}</p>
                  </div>
                </div>

              ))}
            </>}

        </div>
        <div className="card-menu">
          <div className="oval-img">
            <div className="oval-content">
              <h1 className="card-heading">168</h1>
              <p>Total orders</p></div>
          </div>
          <div className="sale-item">
            <div className="card-item">
              <p>Item for sale</p>
              <h1 className="card-heading">168</h1>
            </div>
            <div><p>Item sold</p>
              <h1 className="card-heading">20</h1>
            </div>
          </div>
          <p className="card-text">see inventory</p>

        </div>
      </div>
    </div>



  )
}
export default HomePage;