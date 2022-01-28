import React from "react";
import './MainPane.css';
import ImageBox from "../ImageBox/ImageBox";

const MainPane=()=>{

    return(
        <React.Fragment>
        <div id="main-pane">
            <div id="mainPane-title">
                <h1>Welcome!</h1>
            </div>
            <div id="mainPane-imagebox">
                <ImageBox />
            </div>
        </div>
        </React.Fragment>

    );
}

export default MainPane;