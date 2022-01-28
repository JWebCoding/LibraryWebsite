import React from "react";
import "./Header.css";

const Header=(props)=>{

    const switchPaneHandler=(paneName)=>{
        props.onNewPaneSelected(paneName);
    }

    const signinModalHandler=()=>{
        props.openSignInModal();
    }

    return(
        <header id="header">
            <div id="header-title">
                <button onClick={()=> switchPaneHandler('MainPane')}>Weber Library</button>
            </div>
            <div id="header-buttons">
                <button onClick={()=> switchPaneHandler('BookViewPane')}> View Books</button>
                <button onClick={()=> switchPaneHandler("AddBookPane")}> Add Books </button>
                <button onClick={()=> signinModalHandler()}> Login</button>
            </div>
        </header>
    );
}

export default Header;