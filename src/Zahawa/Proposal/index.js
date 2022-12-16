import React from 'react'
import './proposal.css'
import image from '../../Components/Image/image'
import Button from '../../Components/Button'
const index = () => {
  return (
    <div className='proposal-container'>
      <div className='proposal-header'>
        <h1>Proposal</h1>
        <img src={image.Notification} id="headerimg" alt="r15" />
      </div>
      <div className='category'>
        <input type="search" id="search" placeholder='Search'></input>
        <Button className="btn" buttonText="Filter" buttonClass="filterbutton" />
        <Button className="btn" buttonText="Sort" buttonClass="filterbutton" />
        <Button className="btn" buttonText="My proposal" buttonClass="myproposal" />
      </div>
      <div className='wedding-card-container'>
      
      </div>



    </div>
  )
}

export default index 
