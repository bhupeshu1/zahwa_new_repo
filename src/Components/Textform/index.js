import React from 'react'
import Button from '../Button'

const index = (props) => {
  return (
    <div className='TextForm'>
       <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
      <textarea rows="20" cols="60" name="comment" form="usrform">
        </textarea>
      <Button buttonClass="convert-btn" buttonText="convert to upppercase"/> 


    </div>
  )
}

export default index
