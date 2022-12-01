import React from 'react'
import ProductCard from '../../Components/Food';
import image from '../image/foodimage.png'
import notification from '../image/notification.png'
import starimg from '../image/star.png'
import marriage from '../image/couple-image.svg'
import './store.css'
<i class="bi bi-icon_name"></i>

const ProductList = [
  { name: "Item name lorem ipsum dolor", price: 30, currency: '$', image: image },
  { name: "Item name lorem ipsum dolor", price: 40, currency: '$', image: image },
  { name: "Item name lorem ipsum dolor", price: 35, currency: '$', image: image },
  { name: "Item name lorem ipsum dolor", price: 45, currency: '$', image: image },
  { name: "Item name lorem ipsum dolor", price: 30, currency: '$', image: image },
  { name: "Item name lorem ipsum dolor", price: 40, currency: '$', image: image },
  // { name: "Item name lorem ipsum dolor", price: 60, currency: '$', image: image }
];

const Myorder = () => {
  return (
    <div className="my-store-container">
      <div className="home-heading">
        <h1>Home</h1>
        <img src={notification} alt={"hello"} class="Notification-img" />
      </div>
      <div className="vendor-div">
        <div className="couple-image"><img src={marriage} alt={"hello"} />
        </div>
        <div className="vendor-details">
          <h1>Vendor name lorem ipsum</h1>
          <p><img src={starimg} />4.2 | Bangelore | Food, drinks & caterings</p>
          <div>

            <button type="information-btn" class="btn">Informations</button>
            <button type="customer rating" class="text-btn">Customer ratings</button>
          </div>
        </div>
        <div className="whole-item">
          <div class="item-no">
            <h4>44</h4>
            <span>No. of items</span>
          </div>
          <div class="item-no"><h4>279</h4>
            <span>Total stocks</span>
          </div>
          <div class="item-no">
            <h4>161</h4>
            <span>Stock available</span>
          </div>
          <div class="item-no">
            <h4>118</h4>
            <span>Stock sold</span>
          </div>
        </div>
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
