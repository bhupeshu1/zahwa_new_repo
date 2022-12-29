import React from 'react'
import { NavLink } from 'react-router-dom';
import './menu.css'
import image from '../Image/image'
const HamburgerMenu = ({ hamburger, onClose }) => {
  if (!hamburger) {
    return null;
  }

  return (
    <div className="react-menu">
      <ul>
        <img onClick={onClose} src={image.Closeimg} alt="close" className='ham-close'/>

        <li>
          <NavLink to={"/"}><img src={image.Home} alt="homeicon"/>&nbsp;&nbsp;&nbsp;Home</NavLink>
        </li>
        <li>
          <NavLink to="/MyStore"><img src={image.mystore} alt="storeicon" />&nbsp;&nbsp;&nbsp;MyStore</NavLink>
        </li>
        <li>
          <NavLink to="/MyOrder"><img src={image.myorder} alt="ordericon" />&nbsp;&nbsp;&nbsp;MyOrder</NavLink>
        </li>
        <li>
          <NavLink to="/Proposal"><img src={image.proposal} alt="hello" />&nbsp;&nbsp;&nbsp;Proposal</NavLink>
        </li>
        <li>
          <NavLink to="/Promotion"><img src={image.promotion} alt="Promotion" />&nbsp;&nbsp;&nbsp;Promotion</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
