import React , {useState} from 'react'
import './header.css'
import image from '../Image/image'
import HamburgerMenu from '../HamburgerMenu/hamburgermenu'
import Notification from '../../Components/Notification/index'

const Index = (props) => {
  const [hamburger, setHamburger] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <div>
      <div className='hamburger-Menu'>
          <img onClick={() => setHamburger(true)} src={image.Hamburger} alt="S" height="40px" width="40px" />
          <HamburgerMenu hamburger={hamburger} onClose={() => setHamburger(false)} />
        </div>
      <div className='header-top'>
        <div><h1>{props.title}</h1></div>
        <div><img onClick={() => setNotification(true)} src={image.Notification} className="Notification" alt="bellicon"/></div>
        <Notification notification={notification} onClose={() => setNotification(false)} />
      </div>
      
    </div>
  )
}

export default Index
