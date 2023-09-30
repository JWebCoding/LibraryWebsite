import React, {useState} from "react";

function AddBookAutomaticPreviewAndFinalize(props){

    const [authorData, setAuthorData] = useState([])
    const [publisherData, setPublisherData] = useState([])
    const [seriesData, setSeriesData] = useState([])
    const [genreData, setGenreData] = useState([])
    const [languageData, setLanguageData] = useState([])

    const setInitialData=() => {

    }

    return (
        <h1>Preview and Finalize</h1>
    );
}

export default AddBookAutomaticPreviewAndFinalize;