import React from 'react';
import './Selectbox.css';

const Selectbox = ({classsName , EventName1,EventName2,EventName3,EventName4,EventName5,EventName6,EventName7,EventName8,EventName9}) => {
  return (
    <div className="selectbox">
      <form action="/action_page.php">
        <select className={classsName}>
          <option value="This week">{EventName1}</option>
          <option value="today">{EventName2}</option>
          <option value="this week">{EventName3}</option>
          <option value="this month">{EventName4}</option>
          <option value="this year">{EventName5}</option>
          <option value="this year">{EventName6}</option>
          <option value="this year">{EventName7}</option>
          <option value="this year">{EventName8}</option>
          <option value="this year">{EventName9}</option>
          
        </select>
      </form>


    </div>
  )
}

export default Selectbox
