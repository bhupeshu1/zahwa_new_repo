import React from 'react'
import { NavLink } from 'react-router-dom';
import './menu.css'
import image from '../Image/home.png';
import image1 from '../Image/mystore.png';
import image2 from '../Image/myorder.png';
import image3 from '../Image/proposals.png';
import image4 from '../Image/promotion.png';
import image5 from '../Image/Rectangle.png';
import image6 from '../Image/design.png';

const HamburgerMenu = ({ hamburger, onClose }) => {
  if (!hamburger) {
    return null;
  }

  return (
    <div className="react-menu">
      <ul>
        <img src={image5} />
        <img src={image6} id="design-img" />

        <li>
          <NavLink to={"/"}><img src={image} />&nbsp;&nbsp;&nbsp;Home</NavLink>
        </li>
        <li>
          <NavLink to="/MyStore"><img src={image1} />&nbsp;&nbsp;&nbsp;MyStore</NavLink>
        </li>
        <li>
          <NavLink to="/MyOrders"><img src={image2} />&nbsp;&nbsp;&nbsp;MyOrder</NavLink>
        </li>
        <li>
          <NavLink to="/Proposal"><img src={image3} />&nbsp;&nbsp;&nbsp;Proposal</NavLink>
        </li>
        <li>
          <NavLink to="/Promotion"><img src={image4} />&nbsp;&nbsp;&nbsp;Promotion</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
