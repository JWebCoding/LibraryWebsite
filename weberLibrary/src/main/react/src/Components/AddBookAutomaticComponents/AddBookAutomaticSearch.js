import React, {useEffect, useState} from "react";
import axios from "axios";

function AddBookAutomaticSearch(props){

    const [searchInfo, setSearchInfo] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    const [searchParameter, setSearchParameter] = useState("");
    const [googleBooksData, setGoogleBooksData] = useState([]);

    useEffect(()=>{
        handleBookData();
    }, [googleBooksData])

    const handleChange = (event) => {
        setSearchInfo(event.target.value);
    }

    function handleBookData(){
        if(googleBooksData.length!==0){

            let bookDataArray=[];

            for(let i=0;i<googleBooksData.length;i++){
                const data=googleBooksData[i];
                let book={
                    title: data.volumeInfo.title,
                    publisher: data.volumeInfo.publisher,
                    copyright: data.volumeInfo.publishedDate
                }
                bookDataArray.push(book);
            }

            props.setQueryResultsData((oldQueryResultData)=>[...oldQueryResultData,...bookDataArray]);
        }
    }

    async function queryGoogleBooks(){
        try{
            let queryURL= createQueryURL();
            const bookData=await axios.get(queryURL);
            setGoogleBooksData((oldGoogleBooksData)=>[...oldGoogleBooksData,...bookData.data.items]);
        } catch(e){
            printErrors(e);
        }
    }

    const createQueryURL = ()=> {
        // Create query for axios request
        let baseURL= "https://www.googleapis.com/books/v1/volumes?q=";
        let key="&key=AIzaSyDUvX51t5rWFW3zaWsnzK8y_rgJh_OZFOc";
        let queryURL;

        if(searchParameter !== ""){
            queryURL = baseURL.concat(searchParameter,":",searchInfo,key);
        } else {
            queryURL = baseURL.concat(searchInfo,key);
        }
        return queryURL;
    }

    function printErrors(error){
        console.log("Error", error.stack);
        console.log("Error", error.name);
        console.log("Error", error.message);
    }

    return (
        <div id={"AutomaticSearch"}>
            <section>
                <h1>Search for Books!</h1>
                <input className="searchBar" onChange={handleChange} placeholder="Type here..."/>
                <button onClick={() => queryGoogleBooks()}>Search</button>
            </section>

            <section id="parameterRadioButtons">
                <h3>Search By</h3>
                <input type="radio" id="titleRadiobutton"/>
                <label htmlFor="titleRadiobutton">Title</label>

                <input type="radio" id="authorRadiobutton"/>
                <label htmlFor="authorRadiobutton">Author</label>

                <input type="radio" id="publisherRadiobutton"/>
                <label htmlFor="publisherRadiobutton">Publisher</label>

                <input type="radio" id="isbnRadiobutton"/>
                <label htmlFor="isbneRadiobutton">ISBN</label>
            </section>
        </div>
    );
}

export default AddBookAutomaticSearch;

