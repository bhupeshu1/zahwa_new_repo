import React from "react";
import './bar.css';
import { NavLink, Link } from "react-router-dom";
const Sidebar = () => {
 return (
    <div>
      sachinpadhalni
      
      <ul>
        <li>
        <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <Link to="/Mystore">My store</Link>
        </li>
        <li>
          <Link to="/Myorders">My orders</Link>
        </li>
        <li>
          <Link to="/Proposal">Proposal</Link>
        </li>
        <li>
          <Link to="/Promotion">Promotion</Link> 
        </li>
      </ul>
    </div>
  )

}
export default Sidebar;