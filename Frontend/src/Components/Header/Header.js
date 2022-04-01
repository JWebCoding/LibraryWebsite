import React from "react";
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
        <button onClick={() => switchPaneHandler("MainPane")}>
          Weber Library
        </button>
      </div>
      <div id="header-buttons">
        <button onClick={() => switchPaneHandler("BookViewPane")}>
          View Books
        </button>
        <button onClick={() => switchPaneHandler("AddBookPane")}>
          Add Books{" "}
        </button>
        <button onClick={() => loginButtonHandler()}>{loginButtonText}</button>
      </div>
    </header>
  );
};

export default Header;
