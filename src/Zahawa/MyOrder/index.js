import React, { useState } from 'react'
import './myorder.css'
import image from '../../Components/Image/image'
import Text from '../../Components/Text'
import Button from '../../Components/Button'
import Filter from '../../Components/Filter/index'
import Sort from '../../Components/Sort/index'
import MyOrder from '../.././Data/MyOrder.json'
import Header from '../../Components/Header/index'
import Information from '../../Components/Information/index'

const Index = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false)
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = MyOrder['Active-order'].filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.code.toLowerCase(MyOrder['Active-order']).includes(inputText)
    }
})

  return (
    <div className='order-container'>
      <div className='header-div'>
        <Header title="MyOrder"/>
        {/* <div><h1>MyOrder</h1></div>
        <div><img src={image.Notification} id="bell-icon" alt="bell" /></div> */}
      </div>
      <div className='second-header'>
        <div className='product-div'>
          <h3 className='horizontal-line'>Active orders</h3>
          <h3 className='horizontal-line'>Previous orders</h3>
        </div>
        <div className='product-div'>
          {/* <Search/> */}
          <input onChange={inputHandler} type="search" class="search-input" placeholder='search'></input>
          <div><button onClick={() => setFilter(true)} className="set-btn">Filter</button>
            <Filter filter={filter} onclose={() => setFilter(false)} />
          </div>
          <div><button onClick={() => setSort(true)} className="sort-btn">sort</button>
            <Sort sort={sort} onclose={() => setSort(false)} />

          </div>

        </div>
      </div>

      <div className='card-map'>
        {filteredData.map((item) => (
          <div className='order-card-container'>
            <div className='inner-div'>
              <div className='menu-img'>
                <img src={image.foodimage} id="photo" alt="food" />
              </div>
              <div className='menu-img'>
                <Text text={item.code} />
                <Text text={item.name}/>
                <Button className="btn" buttonText="Confirmed" buttonClass="filter-btn" />
              </div>
            </div>
            <div className='event-date'>
              <div className='date-time'>
                <Text text={item.order}/>
                <Text text={item.date} />
              </div>
              <div className='date-time'>
                <Text text={item.event} />
                <Text text={item.eventdate} />
              </div>
            </div>
            <div className='event-date'>
              <div className='date-time'>
                <Text text={item.data} />
                <Text text={item.price} />
              </div>
              <div className='date-time'>
                <Text text={item.title} />
                <Text text={item.card} />
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