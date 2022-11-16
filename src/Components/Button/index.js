import React from 'react'
import Text from '../Text'
import './button.css'

const Button = (props) => {
  const { onClick, buttonText, buttonClass = '', textSize } = props;
  return (
    <div>
      <button className={`btn ${buttonClass}`} onClick={onClick}>
        <Text size={textSize} text={buttonText} />
      </button>
      <Button className={'btn-success ${buttonClass}'} onClick={onClick}>
      <Text size={textSize} text={buttonText} />
      </Button>
    </div>
  )
}

export default Button