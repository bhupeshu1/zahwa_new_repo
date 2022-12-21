import React from 'react'
import './sort.css'
import image from '../Image/image'

const index = ({ sort, onclose }) => {
  if (!sort) {
    return null;
  }
  return (
    <div class="sort-div">
      <h2>Sort<img onClick={onclose} src={image.symbol} alt="click" /></h2>
      <p><img src={image.Trueimg} alt="select"/> Ascending</p>
      <p> <img src={image.Trueimg} alt="select"/> Descending</p>
      <p> <img src={image.Trueimg} alt="select"/> Higher price - lower price</p>
      <p> <img src={image.Trueimg} alt="select"/> Lower price - higher price</p>
      <p> <img src={image.Trueimg} alt="select"/> Higher period - lower rating</p>
      <p> <img src={image.Trueimg} alt="select"/> Lower period - higher rating</p>
      <p> <img src={image.Trueimg} alt="select"/> Lastly added</p>
      <p> <img src={image.Trueimg} alt="select"/> Earlier added</p>
      <button>Apply</button>
    </div>
  )
}

export default index
