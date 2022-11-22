import React from "react";
import './bar.css';
import { NavLink, Link } from "react-router-dom";
import image from '../image/home.png';
import image1 from '../image/mystore.png';
import image2 from '../image/myorder.png';
import image3 from '../image/proposals.png';
import image4 from '../image/promotion.png';
import image5 from '../image/Rectangle.png';
import image6 from '../image/design.png';

const Sidebar = () => {
 return (
    <div className="sidebar">
      <ul>
        <img src={image5}/>
        <img src={image6} id="design-img"/>

        <li>
        <NavLink to={"/"}><img src={image}/>&nbsp;&nbsp;&nbsp;Home</NavLink>
        </li>
        <li>
          <NavLink to="/MyStore"><img src={image1}/>&nbsp;&nbsp;&nbsp;MyStore</NavLink>
        </li>
        <li>
          <NavLink to="/MyOrders"><img src={image2}/>&nbsp;&nbsp;&nbsp;MyOrder</NavLink>
        </li>
        <li>
          <NavLink to="/Proposal"><img src={image3}/>&nbsp;&nbsp;&nbsp;Proposal</NavLink>
        </li>
        <li>
          <NavLink to="/Promotion"><img src={image4}/>&nbsp;&nbsp;&nbsp;Promotion</NavLink> 
        </li>
      </ul>
    </div>
  )

}
export default Sidebar;