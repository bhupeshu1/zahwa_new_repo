import React from 'react'
import ProductCard from '../../Components/Food';
import image from '../image/foodimage.png'
import notification from '../image/notification.png'
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
        <img src={notification} alt={"hello"} />
      </div>
      <div className="vendor-div">
        <div className="couple-image"><img src={marriage} alt={"hello"} />
        </div>
        <div className="vendor-details">
          <h1>Vendor name lorem ipsum</h1>
          <p>4.2 Bangelore Food, drinks & caterings</p>
        </div>
        <div className="whole-item">
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
