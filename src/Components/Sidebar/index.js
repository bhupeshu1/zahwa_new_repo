import React from "react";
import './bar.css';
import { NavLink, useLocation } from "react-router-dom";
import image from '../Image/image';
import { useEffect } from "react";

const SIDE_BAR_LIST = [
  { name: "Home", path: "/", image: image.blurHome,imageblack:image.Home},
  { name: "MyStore", path: "/MyStore", image: image.blurMystore, imageblack:image.mystore},
  { name: "MyOrder", path: "/MyOrder", image: image.blurMyorder , imageblack:image.myorder },
  { name: "Proposal", path: "/Proposal", image: image.blurProposal,imageblack:image.proposal },
  { name: "Promotion", path: "/Promotion", image: image.blurPromotion,imageblack:image.promotion}
]

const Sidebar = () => {
  const location = useLocation();
  useEffect (() => {
    window.scrollTo(0,0)
  },[location]
  )
  return (
    <div className="sidebar">
       <img src={image.Rectangle} alt="alt" className="sidebar-logo" />
        <img src={image.design} id="design-img" alt="d" />
      <ul>
        {
          SIDE_BAR_LIST.map(item => {
            return (
              <li className={location.pathname === item.path ? 'active-link' : 'not-active'} key={item.path}>
                <NavLink to={item.path}>
                  <div className="nav-wrap">
                    {location.pathname === item.path ? <img src={item.imageblack} alt="whiteimg" /> : <img src={item.image} alt="images" />}
                    <div>{item.name}</div>
                  </div>
                </NavLink>
              </li>
            )
          })
        }
    </ul>
    {/* <div className="profile-div">
      <div className="profile-image">
        <img src={image.Profileimg} alt="profile"/>
      </div>
      <div className="profile-section">
        <h2>Carmen Beltrán</h2>
        <p>Admin</p>
      </div>
    </div> */}
      </div>

    
  )

}
export default Sidebar;