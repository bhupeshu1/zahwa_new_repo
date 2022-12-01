import React from 'react';
import './Selectbox.css';

const Selectbox = () => {
  return (
    <div class="selectbox">
      <form action="/action_page.php">
        <select name="cars" id="cars">
          <option value="This week">This week</option>
          <option value="today">Today</option>
          <option value="this week">This week</option>
          <option value="this month">This month</option>
          <option value="this year">This year</option>
          
        </select>
      </form>


    </div>
  )
}

export default Selectbox
