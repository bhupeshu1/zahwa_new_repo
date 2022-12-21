import React from 'react'
import './promotion.css'
import Button from '../../Components/Button'

import image from '../../Components/Image/image'
const Index = () => {
  return (
    <div className='container'>
      <div className='top-header'>
        <h1>Promotion</h1>
        <img src={image.Notification} alt="Notification" className='promotion' />
      </div>
      <div className='text-div'>
        <h3>In app advertising</h3>
        <h3>Store promotion</h3>
        <input type="search" placeholder='search' className='search'></input>
        <button type="btn" className='filter-item'>Filter</button>
        <button type="btn" className='sort-btn'>Sort</button>
        <img src={image.plusicon} alt="+" />
      </div>
      <div className='map-promotion'>
      {[1, 2, 3, 4].map(() => (
      <div className='promotion-mid-container'>
      <div className='promotion-div'>
        <h2>Promotion name lorem ipsum dolor sit amet</h2>
        <Button className="btn" buttonClass="current" buttonText="Currently active"/>
      
      
      <div className='customer-information'>
        <div className='name-date'>
          <p>Start & end date</p>
          <p>Jan 30th - Feb 30th 2021</p>
        </div>
        <div className='name-date'>
          <p>Targeted item</p>
          <p>Discounted items</p>
        </div>
        <div className='name-date'>
          <p>Total price</p>
          <p>$32.00</p>
        </div>
      </div>
      </div>

      

    </div>
     ))}
     </div>
  
    </div>





  )
}

export default Index
