import React from 'react'
import './notification.css'
import rightaero from './../Image/Path.png'
const index= ({ notification, onClose }) => {
  if (!notification) {
    return null;
  }
  return (
    <div className="notification">
      <h1><img onClick={onClose} src={rightaero} alt="N" />Notification</h1>
      <div className="recieved-order">
        <h5>You recieved new order</h5>
        <p>Please confirm order “XTHR-1928880” for your customer</p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
      <div className="recieved-order">
        <h5>Your order need to be proceed</h5>
        <p>Please start to proceed order “XTHR-1928880” </p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
      <div className="recieved-order">
        <h5>Your order need completions</h5>
        <p>Your order “XTHR-1928880” is done, please confirm your completion</p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
      <div className="recieved-order">
        <h5>You recieved new order</h5>
        <p>Please confirm order “XTHR-1928880” for your customer</p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
      <div className="recieved-order">
        <h5>You recieved new order</h5>
        <p>Please confirm order “XTHR-1928880” for your customer</p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
      <div className="recieved-order">
        <h5>You recieved new order</h5>
        <p>Please confirm order “XTHR-1928880” for your customer</p>
        <p>Feb 4th, 2021 - 07:22</p>
      </div>
    </div>
  )
}

export default index
