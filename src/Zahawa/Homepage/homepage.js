import React, { useState } from 'react'
import './Homepage.css'
import image1 from "./../image/orangecircle.svg"
import Selectbox from "../../Components/SelectBox/index"
import Button from '../../Components/Button'
import Home from '../../Data/Home.json'
import {AiFillCaretRight} from 'react-icons/ai';
import Header from '../../Components/Header/index'
import { NavLink } from 'react-router-dom'
const HomePage = () => {
  const [tableLabel, setTabLabel] = useState("OrderPlaced");
  
  return (
    <div className="homepage">
      <div>
        <Header title="Home"/>
        </div>
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
            <div className="order-details">Currently active orders</div>
            <NavLink to='/MyOrder' className='navlink'>
            <div className='order-details'>See all order<AiFillCaretRight/></div>
            </NavLink>
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