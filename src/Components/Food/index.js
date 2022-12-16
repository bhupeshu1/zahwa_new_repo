import React from 'react';
import './foodcard.css';
const FoodCard = (props) => {
  const { name, price, image, currency } = props;
  return (
    <div className="food-card">
      <div className="food-image"><img src={image} alt="img" /></div>
      <p>{name}</p>
      <h2>{`${currency} ${price}`}</h2>
    </div>
  )
}
export default FoodCard
