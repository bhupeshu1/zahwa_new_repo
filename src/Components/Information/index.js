import React from 'react'
import './information.css'
import image from '../Image/image'

  const index = ({information, onCloseModal }) => {
    if (!information) {
      return null;
    }
  return (
    <div className="information-container">
      <h1><img onClick={onCloseModal}src={image.rightaero} alt="a" />&nbsp;&nbsp;&nbsp;Store information</h1>
      <p><lavel>Store name</lavel></p>
      <input type="text" className="input" placeholder='Lorem vendor name'></input>
      <p><lavel>Store category</lavel></p>
      <input type="text" className="input" placeholder="Music & entertainment"></input>
      <p><lavel>Store descriptions</lavel></p>
      <textarea className="textarea">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </textarea>
      <p><label>Store address</label></p>
      <textarea className="textarea">Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India, HAL Old Airport Rd, Domlur, Bengaluru, Karnataka.</textarea>
      <p><label>Term and conditions</label></p>
      <textarea className="textarea">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</textarea>


    </div>
  )
}

export default index
