import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./SignInModal.css";
import "./GeneralModal.css";

const SignIn = ({ isopen, onclose, onSignIn }) => {
  const [username, setUsername]=useState();
  const [password, setPassword]=useState();

  const signInHandler=(props)=>{
    
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
          <input type="text" id="usernameInput" 
          onChange={(e)=>setUsername(e.target.value)}></input>
        </div>
        <div className="modal-row" id="password">
          <label htmlFor="passwordInput">Password:</label>
          <input type="password" id="passwordInput" 
          onChange={(e)=>setPassword(e.target.value)}></input>
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
