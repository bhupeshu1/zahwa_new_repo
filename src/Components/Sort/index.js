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
      <p>Ascending</p>
      <p>Descending</p>
      <p>Higher price - lower price</p>
      <p>Lower price - higher price</p>
      <p>Higher period - lower rating</p>
      <p>Lower period - higher rating</p>
      <p>Lastly added</p>
      <p>Earlier added</p>
      <button>Apply</button>
    </div>
  )
}

export default index
