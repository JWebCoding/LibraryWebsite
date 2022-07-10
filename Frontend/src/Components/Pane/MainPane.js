import React from "react";
import './MainPane.css';
import ImageBox from "../ImageBox/ImageBox";

function MainPane(props) {
    let welcome=""
    if(!props.user==""){
        welcome=`Welcome ${props.user}!`;
    } else {
        welcome="Welcome!";
    }
    return(
        <React.Fragment>
        <div id="main-pane">
            <div id="mainPane-title">
                <h1>{welcome}</h1>
            </div>
            <div id="mainPane-imagebox">
                <ImageBox />
            </div>
        </div>
        </React.Fragment>

    );
}

export default MainPane;