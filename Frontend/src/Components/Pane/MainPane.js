import React from "react";
import './MainPane.css';
import ImageBox from "../ImageBox/ImageBox";

const MainPane=()=>{
    return(
        <React.Fragment>
        <div id="main-pane">
            <div id="pane-title">
                <h1>Welcome!</h1>
            </div>
            <div id="pane-imagebox">
                <ImageBox
                    id="Image"
                    class="Image"
                    src="/Images/rowShot1.jpg"
                    alt="Book Shelf"
                />
            </div>
        </div>
        </React.Fragment>

    );
}

export default MainPane;