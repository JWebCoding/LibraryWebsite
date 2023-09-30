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

    useEffect(() =>{

    }, [searchParameter])

    const handleSearchInfoChange = (event) => {
        setSearchInfo(event.target.value);
    }

    const handleSearchParameterChange = (event) => {
        switch (event.target.value){
            case "title":
                setSearchParameter("intitle=");
                break;
            case "author":
                setSearchParameter("inauthor=");
                break;
            case "inPublisher":
                setSearchParameter("inPublisher=");
                break;
            case "ISBN":
                setSearchParameter("isbn=");
                break;
            default:
                setSearchParameter("");
        }
        setSearchParameter(event.target.value);

    }

    function handleBookData(){
        if(googleBooksData.length!==0){

            let bookDataArray=[];
            let idValue=1;
            for(let i=0;i<googleBooksData.length;i++){
                const data=googleBooksData[i];

                // Filter out ebooks and pdfs
                if(!data.saleInfo.isEbook === true || !data.accessInfo.pdf.isAvailable === true){
                    // Filter out books without title, author, isbn, publisher, copyright and language.
                    if( data.volumeInfo.hasOwnProperty('title') &&
                        data.volumeInfo.hasOwnProperty('authors') &&
                        data.volumeInfo.hasOwnProperty("publisher") &&
                        data.volumeInfo.hasOwnProperty("industryIdentifiers") &&
                        data.volumeInfo.hasOwnProperty("publishedDate") &&
                        data.volumeInfo.hasOwnProperty("language")){

                        // Set optional values with defaults
                        let format=0,subtitle="",edition="",
                            genre="",series="",seriesPart=null;

                        // Some Optional features do occasionally exist in response data. Set below
                        //Check for existence of subtitle
                        if(data.volumeInfo.hasOwnProperty('subtitle')){
                            subtitle=data.volumeInfo.subtitle;
                        }
                        //Check for existence of genre
                        if(data.volumeInfo.hasOwnProperty('categories')){
                            genre=data.volumeInfo.categories[0];
                        }

                        // Create new book object and add to list.
                        let book={
                            // Set required values
                            id: idValue,
                            title: data.volumeInfo.title,
                            subtitle: subtitle,
                            publisher: data.volumeInfo.publisher,
                            copyright: data.volumeInfo.publishedDate,
                            author: data.volumeInfo.authors[0],
                            isbn: data.volumeInfo.industryIdentifiers[0].identifier,
                            language: data.volumeInfo.language,
                            pageCount: data.volumeInfo.pageCount,
                            format: format,
                            edition: edition,
                            series: series,
                            seriesPart: seriesPart
                        }
                        idValue++;
                        bookDataArray.push(book);
                    }
                }
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
        // Set individual parts of URL
        let baseURL= "https://www.googleapis.com/books/v1/volumes?q=";
        let filterValues="filter=partial";
        let key="&key=AIzaSyDUvX51t5rWFW3zaWsnzK8y_rgJh_OZFOc";
        let queryURL;

        // Construct final URL
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
                <input className="searchBar" onChange={handleSearchInfoChange} placeholder="Type here..."/>
                <button onClick={() => queryGoogleBooks()}>Search</button>
            </section>

            <section id="parameterRadioButtons">
                <h3>Search By</h3>
                <div onChange={handleSearchParameterChange}>
                    <input type="radio"  id="titleRadiobutton" name="searchParameter" value="title"/>
                    <label htmlFor="titleRadiobutton">Title</label>

                    <input type="radio" id="authorRadiobutton" name="searchParameter" value="author"/>
                    <label htmlFor="authorRadiobutton">Author</label>

                    <input type="radio" id="publisherRadiobutton" name="searchParameter" value="publisher"/>
                    <label htmlFor="publisherRadiobutton">Publisher</label>

                    <input type="radio" id="isbnRadiobutton" name="searchParameter" value="isbn"/>
                    <label htmlFor="isbneRadiobutton">ISBN</label>
                </div>
            </section>
        </div>
    );
}

export default AddBookAutomaticSearch;

