import React from 'react'
import './proposal.css'
import image from '../../Components/Image/image'
import Button from '../../Components/Button'
const Index = () => {
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
      <div className='contact-div'>
      {[1, 2, 3, 4].map(() => (
      <div className='wedding-card-container'>
        <div className='function-name'>
          <div>
            <h5>25th Wedding anniversary</h5>
            <p>Bangalore Submitted on June 20th, 2020</p>
          </div>
          <div>
            <Button className="btn" buttonText="Active" buttonClass="Event-btn" />
          </div>
        </div>

        <div className='contact-details'>
          <div className='contact-div'>
            <p>Name</p>
            <h3>Daya Chitanis</h3>
          </div>
          <div className='contact-div'><p>Estimated budget</p><h3>$2500.00</h3></div>
          <div className='contact-div'><p>Event type</p><h3>Wedding & anniversry</h3></div>
          <div className='contact-div'><p>Event date</p><h3>Feb 28th, 2021</h3></div>
        </div>
        <div className='bottom-button'>
          <Button className="btn" buttonText="See details" buttonClass="offer-btn" />
          <Button className="btn" buttonText="Sent offer" />
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Index 
