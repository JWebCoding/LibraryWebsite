import React from "react";
import "./Header.css";

const Header=(props)=>{

    const switchPaneHandler=(paneName)=>{
        props.onNewPaneSelected(paneName);
    }

    return(
        <header id="header">
            <div id="header-title">
                <h1>Weber Library</h1>
            </div>
            <div id="header-buttons">
                <button onClick={()=> switchPaneHandler('BookViewPane')}> View Books</button>
                <button onClick={() => switchPaneHandler("AddBookPane")}> Add Books </button>
                <button onClick={() => switchPaneHandler("SignInPane")}> Login</button>
            </div>
        </header>
    );
}

export default Header;