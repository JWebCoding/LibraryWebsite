import React, {useEffect, useState} from "react";
import AddBookAutomaticSearch from "../AddBookAutomaticComponents/AddBookAutomaticSearch";
import AddBookAutomaticDisplayResults from "../AddBookAutomaticComponents/AddBookAutomaticDisplayResults";
import AddBookAutoPreviewAndFinalize from "../AddBookAutomaticComponents/AddBookAutoPreviewAndAdd";
import "./AddBookAutomaticPane.css"


function AddBookAutomaticPane() {

    const [queryResultData, setQueryResultData] = useState([])
    const [selectedBookData, setSelectedBookData] = useState([])
    const [currentPane, setCurrentPane] = useState(switchPaneHandler("search"))
    const [currentPaneName, setCurrentPaneName] =useState("search")

    useEffect(()=>{
        if(queryResultData.length!==0 && currentPaneName==="search"){
            switchToDisplayResults()
        }
    },[queryResultData])

    useEffect(() =>{
        console.log(queryResultData[selectedBookData])
    },[selectedBookData])

    function switchPaneHandler(paneName){
        if (paneName === "search"){
            return(<AddBookAutomaticSearch setQueryResultsData={setQueryResultData} />);
        } else if (paneName === "displayResults"){
            return(<AddBookAutomaticDisplayResults queryResultsData={queryResultData} setSelectedBookData={setSelectedBookData}/>);
        } else if (paneName === "previewAndFinalize"){
            return(<AddBookAutoPreviewAndFinalize selectedBookData={selectedBookData} />);
        }
    }

    function switchToDisplayResults(){
        let newPaneName="displayResults";
        setCurrentPaneName(newPaneName);
        setCurrentPane(switchPaneHandler(newPaneName));
    }

    return (
        <div id="AddBookAutomatic">
            {currentPane}
        </div>
    );
}

export default AddBookAutomaticPane;