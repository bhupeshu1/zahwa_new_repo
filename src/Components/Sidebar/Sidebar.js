import React from "react";
import './Sidebar.css';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  (
    <div>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/Mystore">My store</NavLink>
        </li>
        <li>
          <NavLink to="/Myorders">My orders</NavLink>
        </li>
        <li>
          <NavLink to="/Proposal">Proposal</NavLink>
        </li>
        <li>
          <NavLink to="/Promotion">Promotion</NavLink> 
        </li>
      </ul>
    </div>
  )

}
export default Sidebar;