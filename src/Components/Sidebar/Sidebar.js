import React from "react";
import './Sidebar.css';
function Sidebar({content}){
  (
    <div>
      <ul>
  <li>
    <Link to href="#home">Home</Link>
    </li>
  <li>
    <Link to href="#My storews">My store</Link>
    </li>
  <li>
    <Link to href="#My orders">My orders</Link>
    </li>
  <li>
    <Link to href="#Proposal">Proposal</Link>
    </li>
    <li>
    <Link to href="#Promotion">Promotion</Link>
    </li>
</ul>
    </div>
  )

}