import React from 'react';
import './Selectbox.css';

const Selectbox = () => {
  return (
    <div>
      <form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
    <option value="volvo">Volvo</option>
    <option value="volvo">Volvo</option>
    <option value="volvo">Volvo</option>
  </select>
  </form>

      
    </div>
  )
}

export default Selectbox
