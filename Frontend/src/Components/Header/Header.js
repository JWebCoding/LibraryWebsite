import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  let loginButtonText ="";

  // Check if the user is logged in and -
  // set the text of the login button accordingly.
  if (props.signInStatus === true) {
    loginButtonText = "Logout";
  } else {
    loginButtonText = "Login";
  }

  const switchPaneHandler = (paneName) => {
    props.onNewPaneSelected(paneName);
  };

  const loginButtonHandler = () => {
    if(props.signInStatus!==true){
      props.openSignInModal();
    } else {
      props.signOutUser();
    }
    
  };

  return (
    <header id="header">

      <div id="header-title">
        <Link to="/main"><button className="title-button">Weber Library</button></Link>
      </div>

      <div id="header-buttons">
        <Link to="view"><button className="link-button">View Books</button></Link>
        <Link to="add"><button className="link-button">Add Books</button></Link>
        <button className="link-button" onClick={() => loginButtonHandler()}>{loginButtonText}</button>
      </div>
    </header>
  );
};

export default Header;
