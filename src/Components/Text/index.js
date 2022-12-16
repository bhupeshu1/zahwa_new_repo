import React from 'react'
import './text.css'

const Text = (props) =>{
  const { text, size, textColor,textClass=''} = props;
  // console.log("class ",text, size,"color ", textColor)
  return (
    <div className={`${size}${textColor}${textClass}`}> 
      {text}
    </div>
  )
}

export default Text

// xsmall small medium large xlarge