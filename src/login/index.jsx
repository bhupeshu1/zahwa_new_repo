import react from 'react';
import './style.css';
import Button from '../Components/Button';
import Text from '../Components/Text';

function login() {
  const onLoginClick = () => {
    console.log("===onLoginClick=====");
  }

  const onRegisterClick = () => {
    console.log("===onLoginClick=====");
  }

  return (
    <div className="container">
      <div className="left-div">
        <div className="top">
          <h1 className="h1first">Log in to your account</h1>
          <p className="gray">Please log in to use our vendor portal</p>
        </div>
        <div className="input">
          <p>Email:</p>
          <input type="email" name="email" placeholder="John.doe@gmail.com"></input>
        </div>
        <div className="input">
          <p>password:</p>
          <input type="password" id="pwd" name="pwd" placeholder="password"></input>
        </div>
        <Button textSize="large" buttonText={'Login Here'} onClick={onLoginClick} buttonClass="authentication" />
        <p className="red">Forgot your password?</p>
        <Text className="dont-have" text="Don't have account?" />
        <Button textSize="medium" buttonText={'Rigister for new account'} onClick={onRegisterClick} buttonClass="primary margin-register-button" />
      </div>
      <div className="right-div">
        <img src="Group 2.png" id="img"></img>
      </div>
    </div>
  );
}
export default login;