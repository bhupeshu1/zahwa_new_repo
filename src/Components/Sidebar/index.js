import React from "react";
import './bar.css';
import { NavLink, Link } from "react-router-dom";
import image from '../Image/image';
import image1 from '../Image/mystore.png';
import image2 from '../Image/myorder.png';
import image3 from '../Image/proposals.png';
import image4 from '../Image/promotion.png';
import image5 from '../Image/Rectangle.png';
import image6 from '../Image/design.png';

const Sidebar = () => {
  // const [activeButton ,setActiveButton]=usestate("Home");
  // const Button =[
  //   {'Home'},
  //   {'MyStore'},
  //   {'MyOrder'},
  //   {'Proposal'},
  //   {'Promotion'}

  // ]
  return (
    <div className="sidebar">
      <ul>
        <img src={image.Rectangle} />
        <img src={image.design} id="design-img" />

        <li>
          <NavLink to={"/"}><img src={image.Home} />&nbsp;&nbsp;&nbsp;Home</NavLink>
        </li>
        <li>
          <NavLink to="/MyStore"><img src={image.mystore} />&nbsp;&nbsp;&nbsp;MyStore</NavLink>
        </li>
        <li>
          <NavLink to="/MyOrders"><img src={image.myorder} />&nbsp;&nbsp;&nbsp;MyOrder</NavLink>
        </li>
        <li>
          <NavLink to="/Proposal"><img src={image.proposal} />&nbsp;&nbsp;&nbsp;Proposal</NavLink>
        </li>
        <li>
          <NavLink to="/Promotion"><img src={image.promotion} />&nbsp;&nbsp;&nbsp;Promotion</NavLink>
        </li>
      </ul>
    </div>
  )

}
export default Sidebar;