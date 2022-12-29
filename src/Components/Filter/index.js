import React from 'react'
import './item.css'
import Selectbox from '../SelectBox'
import image from '../Image/image'

const index = ({filter,onclose}) => {
  if (!filter) {
    return null;
  }
  return (
    <div className="filter-container">
      <h2><img className='filter-aero' onClick={onclose} src={image.symbol} alt="aero"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filter</h2>
      <h4>item type</h4>
      <div class="service-product-btn">
        <button className="text-btn">Service only</button>
        <button className="text-btn">Product only</button>
      </div>
      <h2>Event suitability</h2>
      <Selectbox
        EventName1={'Event name here'} EventName2={'Event name here'} EventName3={'Event name here'} EventName4={'Event name here'} EventName5={'Event name here'} EventName6={'Event name here'} EventName7={'Event name here'} EventName8={'Event name here'}
      />

      <h2>Service or product type</h2>
      <Selectbox
        EventName1={'Type name here'} EventName2={'Type name here'} EventName3={'Type name here'} EventName4={'Type name here'} EventName5={'Type name here'}
      />
      <h2>Targeted item</h2>
      <div class="item-div">
        <button className="item-buttom">Below 3</button>
        <button className="item-buttom">Above 3</button>
        <button className="item-buttom">5 only</button>
      </div>
      <h2>price</h2>
      <div class="price-btn">
        <button className="buy-btn">Min.price</button>
        <button className="buy-btn">Max.price</button>
      </div>
      <div className="apply">
        <button className="apply-btn">Apply</button>
      </div>
      </div>
      


  )
}

export default index
