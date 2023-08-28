import React, {useState} from "react";
import AddBookProcessSelection from "./AddBookProcessSelection";
import AddBookManualPane from "./AddBookManualPane";
import AddBookAutomaticPane from "./AddBookAutomaticPane";

function AddBookPane() {

    const switchPane = async (selectedPane) => {
        if(selectedPane==="manual"){
            setCurrentPane(<AddBookManualPane />);
        } else if (selectedPane === "automatic"){
            setCurrentPane(<AddBookAutomaticPane />)
        }
    }

    const [currentPane, setCurrentPane]=useState(<AddBookProcessSelection switchPane={switchPane}/>);

    return (
        <div>
            {currentPane}
        </div>
    )

}

export default AddBookPane;
