import React from 'react';
import './foodcard.css';
import image from '../Image/foodimage.png';

const FoodCard = ({sortValue}) => {
  // const { name, price, image, currency } = props;
  const ProductList = [
    { name: "Item name lorem ipsum dolor", price: 30, currency: '$', image: image},
    { name: "Name lorem ipsum dolor", price: 40, currency: '$', image: image},
    { name: "Burge", price: 35, currency: '$', image: image},
    { name: "Noodles", price: 45, currency: '$', image: image},
    { name: "Stuffed dal in parathas	", price: 30, currency: '$', image: image},
    { name: "Shrimp", price: 40, currency: '$', image: image},

  ];
  console.log("Original ProducList are:")
  console.log(ProductList)
  let sortedProductList = ProductList.sort(
    (p1, p2) => {
    if ( sortValue === "Ascending"){
    return (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0}
  else if ( sortValue === "Descending"){
   return (p1.name < p2.name) ? 1 : (p1.name > p2.name) ? -1 :0
  }
  else if ( sortValue === "Lower price - higher price"){
    return (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0}
  else if ( sortValue === "Higher price - lower price"){
   return (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 :0
  }
  } );
    

  console.log("sort listed", sortedProductList)
  return (
    <>
    { sortedProductList.map((item) => (
    <div className="food-card">
      <div className="food-image"><img src={item.image} alt="img" /></div>
      <p>{item.name}</p>
      <h2>${item.price}</h2>
    </div>
    ))
}
    </>
  )
}
export default FoodCard
