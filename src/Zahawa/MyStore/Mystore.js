import React, { useState } from 'react'
import Filter from '../../Components/Filter'
import ProductCard from '../../Components/Food';
import image from '../image/foodimage.png';
import starimg from '../image/star.png';
import marriage from '../image/couple-image.svg';
import threedots from '../image/threedot.png'
import Selectbox from '../../Components/SelectBox';
import Sort from '../../Components/Sort';
import Customer from '../../Components/Customer'
import Header from '../../Components/Header/index'
import Information from '../../Components/Information/index'
import './store.css';
const Myorder = () => {
  const [filter, setFilter] = useState(false)
  const [sort, setSort] = useState(false)
  const [customer,setCustomer] = useState(false)
  const [information,setInformation] =useState(false)
  const ProductList = [
    { name: "Item name lorem ipsum dolor", price: 30, currency: '$', image: image },
    { name: "Item name lorem ipsum dolor", price: 40, currency: '$', image: image },
    { name: "Item name lorem ipsum dolor", price: 35, currency: '$', image: image },
    { name: "Item name lorem ipsum dolor", price: 45, currency: '$', image: image },
    { name: "Item name lorem ipsum dolor", price: 30, currency: '$', image: image },
    { name: "Item name lorem ipsum dolor", price: 40, currency: '$', image: image },
    
  ];


  return (

    <div className="my-store-container">
      <div>
        <Header title="MyStore"/>
        
        {/* <h1>MyStore</h1>
        <img onClick={() => setInformation(true)} src={notification} alt={"hello"} className="Notification-img" />
        <Information information={information} onClose={() => setInformation(false)} /> */}
      </div>
      <div className="vendor-div">
        <div className="couple-image"><img src={marriage} alt={"hello"} />
        </div>
        <div className="vendor-details">
          <h1>Vendor name lorem ipsum</h1>
          <p><img src={starimg} alt="asterisk" />4.2 | Bangelore | Food, drinks & caterings</p>
          <div className="button-div">
             <button type="information-btn" className="btn" onClick={() => setInformation(true)}>Informations</button>
             <Information information={information} onCloseModal={() => setInformation(false)}/>
            <button type="customer rating" className="text-btn" onClick={() => setCustomer(true)}>Customer ratings</button>
            <Customer  customer={customer} onCloseModal={() => setCustomer(false)}/>
          </div>
        </div>
        <div className="whole-item">
          <div className="item-no">
            <h4>44</h4>
            <span>No. of items</span>
          </div>
          <div className="item-no"><h4>279</h4>
            <span>Total stocks</span>
          </div>
          <div className="item-no">
            <h4>161</h4>
            <span>Stock available</span>
          </div>
          <div className="item-no">
            <h4>118</h4>
            <span>Stock sold</span>
          </div>
        </div>
      </div>
      <div class="all-category">
        <Selectbox EventName1={'All category'} EventName2={'Category 1'} EventName3={'Category 2'} EventName4={'Category 3'} EventName5={'Category 4'} EventName6={'Category 5'} EventName7={'Category 6'} EventName8={'Category 7'} EventName9={'Category 8'} />
        <div><img src={threedots} alt="dots" /></div>
        <div>
          <input type="search" placeholder='Search'></input>
        </div>
        <div>
          <button onClick={() => setFilter(true)} className="filter-btn">Filter</button></div>
        <Filter filter={filter} onclose={() => setFilter(false)} />
        <div>
          <button onClick={() => setSort(true)} className="sort-btn">Sort</button>
          </div>
        
        <Sort sort={sort} onclose={() => setSort(false)} />
        

      </div>
      <div className='product-list-container'>
        {
          ProductList.map(function (item, index) {
            console.log("===ProductList===", item, index);
            return (
              <ProductCard key={index} name={item.name} image={item.image} price={item.price} currency={item.currency} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Myorder
