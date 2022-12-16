import React from 'react'
import './rating.css'
import image from '../Image/image'
import Progress_bar from '../../Components/Progress_bar/progressbar'
const index = ({ customer, onCloseModal }) => {
  if (!customer) {
    return null;
  }
  return (
    <div class="customer-rating-btn">
      <h1><img onClick={onCloseModal} src={image.rightaero} alt="yes" />&nbsp;&nbsp;&nbsp;Customer ratings</h1>
      <div className='progress-bar-div'>
        <div className="rating">
          <h1>3.5</h1>
          <p>18 ratings</p>
        </div>
        <div className='progress'>
          <div className='star-icon-1'><h1><img src={image.star}/> 5</h1></div>
          <p className='progress-para-1'>108</p>
          <div className='star-icon-2'><h1><img src={image.star}/> 4</h1></div>
          <p className='progress-para-2'>10</p>
          <div className='star-icon-3'><h1><img src={image.star}/> 3</h1></div>
          <p className='progress-para-3'>4</p>
          <div className='star-icon-4'><h1><img src={image.star}/> 2</h1></div>
          <p className='progress-para-4'>5</p>
          <div className='star-icon-5'><h1><img src={image.star}/> 1</h1></div>
          <p className='progress-para-5'>0</p>
          <Progress_bar bgcolor="#FF6F60" progress="80" height={20} />
          <Progress_bar bgcolor="#FF6F60" progress="40" height={20} />
          <Progress_bar bgcolor="#FF6F60" progress="20" height={20} />
          <Progress_bar bgcolor="#FF6F60" progress="20" height={20} />
          <Progress_bar bgcolor="#FF6F60" progress="0" height={20}/>
        </div>
      </div>
      <div className='lorem'>
        <div className='lorem-header'>
          <div><img src={image.photo} alt="god" /></div>
          <div className='lorem-name'>
            <h5>Wilhelm Dowall</h5>
            <p>June 21th, 2020</p>
          </div>
          <div className='staricon'><img src={image.YellowStar} alt="st" />4.8</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur dero adipiscing elit  consectetur dero adipiscing elit consectetur dero .</p>
        <div className='img-div'>
          <div className="design"><img src={image.Graph} alt="w" /></div>
          <div className="design"><img src={image.Graph} alt="y" /></div>
        </div>
      </div>
      {[1, 2, 3].map((item, id, image) => (
        <div className="lorem-second" key={`first+${id}`}>
          <div className="profile">
            <div className="profile"><img src={image.YoungMan} alt="t" /></div>
            <div className="id"><h5>Isak Johannesson</h5>
              <p>June 21th, 2020</p></div>
            <div className="starimg"><img src={image.YellowStar} alt="st" />4.8</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur dero adipiscing elit  consectetur dero adipiscing elit consectetur dero .</p>
        </div>
      ))}

    </div>


  )
}

export default index
