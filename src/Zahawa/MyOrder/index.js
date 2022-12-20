import React, { useState } from 'react'
import './myorder.css'
import image from '../../Components/Image/image'
import Text from '../../Components/Text'
import Button from '../../Components/Button'
import Filter from '../../Components/Filter/index'
import Sort from '../../Components/Sort/index'

const Index = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false)

  return (
    <div className='order-container'>
      <div className='header-div'>
        <div>
          <h1>MyOrder</h1></div>
        <div><img src={image.Notification} id="bell-icon" alt="bell" /></div>
      </div>
      <div className='second-header'>
        <div className='product-div'>
          <Text text={'Active orders'} />
          <Text text={'Previous orders'} />
        </div>
        <div className='product-div'>
          <input type="search" class="search-input" placeholder='search'></input>
          <div><button onClick={() => setFilter(true)} className="set-btn">Filter</button>
            <Filter filter={filter} onclose={() => setFilter(false)} />
          </div>
          <div><button onClick={() => setSort(true)} className="sort-btn">sort</button>
            <Sort sort={sort} onclose={() => setSort(false)} />

          </div>

        </div>
      </div>

      <div className='card-map'>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className='order-card-container'>
            <div className='inner-div'>
              <div className='menu-img'>
                <img src={image.foodimage} id="photo" alt="food" />
              </div>
              <div className='menu-img'>
                <Text text={'XTRX2918882910'} />
                <Text text={'Sophie Asveld'} />
                <Button className="btn" buttonText="Confirmed" buttonClass="filter-btn" />
              </div>
            </div>
            <div className='event-date'>
              <div className='date-time'>
                <Text text={'Order date'} />
                <Text text={'Jan 28th, 2021'} />
              </div>
              <div className='date-time'>
                <Text text={'Event date'} />
                <Text text={'Feb 2nd, 2021'} />
              </div>
            </div>
            <div className='event-date'>
              <div className='date-time'>
                <Text text={'Total price'} />
                <Text text={'$ 120.50'} />
              </div>
              <div className='date-time'>
                <Text text={'Payment'} />
                <Text text={'Credit card'} />
              </div>
            </div>
            <div className='inner-button'>
              <Button className="btn" buttonText="See details" buttonClass="details-btn" />
              <Button className="btn" buttonText="Confirm" buttonClass="Confirm" />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Index