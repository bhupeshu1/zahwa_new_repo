import React from 'react'
import './button.css'

const Button = (props) => {
  const { onClick, buttonText, buttonClass=''} =props;
  return (
    <div>
      <button className={`btn ${buttonClass}`} onClick={onClick}>
        {buttonText}
      </button>
    </div> 
  )
}

export default Button