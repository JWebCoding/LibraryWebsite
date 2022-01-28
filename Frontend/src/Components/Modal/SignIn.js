import React from "react";
import ReactDOM from "react-dom";
import "./SignIn.css";



const SignIn = ({ message, isopen, onclose }) => {

  const signInHandler=()=>{
    console.log("TEST");
  }

  if (!isopen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-row" id="Header">
          <h2>Please Sign In</h2>
        </div>
        <div className="modal-row" id="usrname">
          <label htmlFor="usernameInput">Username:</label>
          <input type="text" id="usernameInput"></input>
        </div>
        <div className="modal-row" id="password">
          <label htmlFor="passwordInput">Password:</label>
          <input type="password" id="passwordInput"></input>
        </div>
        <div className="modal-row">
          <button onClick={onclose}>Close</button>
          <button onClick={signInHandler}>Sign In</button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default SignIn;
