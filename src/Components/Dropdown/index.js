import React from 'react'
import './dropdownmenu.css'
const index = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">This week</button>
      <div className="dropdown-content">
        <a href="#">Today</a>
        <a href="#">This week</a>
        <a href="#">This month</a>
        <a href="#">This year</a>
      </div>
    </div>
  )
}

export default index
