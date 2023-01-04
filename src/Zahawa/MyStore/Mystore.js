import React, { useState } from 'react'
import Filter from '../../Components/Filter'
import starimg from '../image/star.png';
import marriage from '../image/couple-image.svg';
import threedots from '../image/threedot.png'
import Selectbox from '../../Components/SelectBox';
import Sort from '../../Components/Sort';
import Customer from '../../Components/Customer'
import Header from '../../Components/Header/index'
import Information from '../../Components/Information/index'
import Food from '../../Components/Food/index'

import './store.css';
const Mystore = () => {
        const [filter, setFilter] = useState(false)
        const [sort, setSort] = useState(false)
        const [customer, setCustomer] = useState(false)
        const [sortValue, setSortValue] = useState("");
        const [information, setInformation] = useState(false)
      //   const [inputText, setInputText] = useState("");
      //   let inputHandler = (e) => {
      //     //convert input text to lower case
      //     var lowerCase = e.target.value.toLowerCase();
      //     setInputText(lowerCase);
      //   };
      
      //   const filteredData = Mystore['Store_Data'].filter((el) => {
      //     //if no input the return the original
      //     if (inputText === '') {
      //         return el;
      //     }
      //     //return the item which contains the user input
      //     else {
      //         return el.code.toLowerCase(Mystore['Store_Data']).includes(inputText)
      //     }
      // })
        return (

    <div className="my-store-container">
      <div>
        <Header title="MyStore" />

      </div>
      <div className="vendor-div">
        <div className="couple-image"><img src={marriage} alt={"hello"} />
        </div>
        <div className="vendor-details">
          <h1 className='heading-name'>Vendor name lorem ipsum</h1>
          <p><img src={starimg} alt="asterisk" />4.2 | Bangelore | Food, drinks & caterings</p>
          <div className="button-div">
            <button type="information-btn" className="btn" onClick={() => setInformation(true)}>Informations</button>
            <Information information={information} onCloseModal={() => setInformation(false)} />
            <button type="customer rating" className="text-btn" onClick={() => setCustomer(true)}>Customer ratings</button>
            <Customer customer={customer} onCloseModal={() => setCustomer(false)} />
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
      <div className="all-category">
        <Selectbox EventName1={'All category'} EventName2={'Category 1'} EventName3={'Category 2'} EventName4={'Category 3'} EventName5={'Category 4'} EventName6={'Category 5'} EventName7={'Category 6'} EventName8={'Category 7'} EventName9={'Category 8'} />
        <div><img src={threedots} alt="dots" /></div>
        <div>
          <input type="search"  placeholder='Search' className='mystore-search'></input>
        </div>
        <div>
          <button onClick={() => setFilter(true)} className="filter-btn">Filter</button></div>
        <Filter filter={filter} onclose={() => setFilter(false)} />
        <div>
          <button onClick={() => setSort(true)} className="sort-btn">Sort</button>
        </div>

        <Sort sortValue={sortValue} setSortValue={setSortValue} sort={sort} onclose={() => setSort(false)} />


      </div>
      <div className='product-list-container'>
        <Food sortValue={sortValue} />
      </div>
    </div>
  )
}

export default Mystore
