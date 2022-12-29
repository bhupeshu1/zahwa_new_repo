import React, { useState } from 'react'
import './sort.css'
import image from '../Image/image'


const Index = ({ sort, onclose, sortValue, setSortValue }) => {

  const [active, setActive] = useState(false)
  // const [sortValue, setSortValue] = useState("");

  const handler = (e) => {
    setActive(!active);
    setSortValue(e)
  }

  const Sort_Data = [
    { Name: "Ascending" },
    { Name: "Descending" },
    { Name: "Higher price - lower price" },
    { Name: "Lower price - higher price" },
    { Name: "Higher period - lower rating" },
    { Name: "Lower period - higher rating" },
    { Name: "Lastly added" },
    { Name: "Earlier added" }

  ]
  if (!sort) {
    return null;
  }
  return (
    <div class="sort-div">
      <h2>Sort&nbsp;&nbsp;&nbsp;<img onClick={onclose} src={image.symbol} alt="click" className='sort-close-aero' /></h2>

      {
        Sort_Data.map((item) => (
          <p className='paragraph' onClick={(e) => handler(item.Name)}>
            {sortValue === item.Name ? <img src={image.Trueimg} alt="select" /> : ""}
            &nbsp;&nbsp;&nbsp; {item.Name}
          </p>

        ))
      }
      <button className='sort-apply-btn'>Apply</button>
    </div>
  )
}

export default Index
