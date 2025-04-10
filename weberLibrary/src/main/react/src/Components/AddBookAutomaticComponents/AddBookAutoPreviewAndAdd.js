import React, {useEffect, useRef, useState} from "react";
import NewBookPaneMethods from "../BookElementPanes/NewBookPaneMethods";
import Select from "react-select";

function AddBookAutomaticPreviewAndFinalize(props){

    const [authorNamesList, setAuthorNamesList]=useState([]);
    const [publisherNamesList, setPublisherNamesList]=useState([]);
    const [combinedGenreNamesList, setCombinedGenreNamesList]=useState([]);
    const [languageNamesList, setLanguageNamesList]=useState([]);
    const [seriesNamesList, setSeriesNamesList]=useState([]);

    const [bookTitle, setBookTitle]=useState();
    const [bookAuthor, setAuthor]=useState();
    const [bookPublisher, setPublisher]=useState();
    const [bookISBN, setBookISBN]=useState();
    const [bookCopyright, setBookCopyright]=useState();
    const [bookPages, setBookPages]=useState();
    const [bookEdition, setBookEdition]=useState();
    const [bookFormat, setBookFormat]=useState();
    const [bookGenre, setBookGenre]=useState();
    const [bookLanguage, setBookLanguage]=useState();
    const [bookSeries, setBookSeries]=useState();
    const [bookSeriesPart, setBookSeriesPart]=useState();

    const genreSelectRef=useRef(null);
    const genreOptions=[
        {value: "Non-Fiction", label: "Non-Fiction"}, {value: "Fiction", label: "Fiction"}];

    useEffect(() => {( async () => {
        // The following get values for each of the select menus -
        // and then add the values to their respective lists.
        console.log(props.selectedBookData);

        try {
            await NewBookPaneMethods.getAuthors().then(value => {
                setAuthorNamesList(value);
            })
        } catch (e) {
            printErrors(e);
        }
        try {
            await NewBookPaneMethods.getPublishers().then(value => {
                setPublisherNamesList(value);
            })
        } catch (e) {
            printErrors(e);
        }
        try {
            await NewBookPaneMethods.getGenres().then(value => {
                setCombinedGenreNamesList([
                    {label: "Non-Fiction", options: value[0]},
                    {label: "Fiction", options: value[1]}]
                )
            })
        } catch (e) {
            printErrors(e);
        }
        try {
            await NewBookPaneMethods.getLanguages().then(value => {
                setLanguageNamesList(value);
            })
        } catch (e) {
            printErrors(e);
        }
        try {
            await NewBookPaneMethods.getSeries().then(value => {
                setSeriesNamesList(value);
            })
        } catch (e) {
            printErrors(e);
        }
        setInitialValues();
    })();
    }, []);

    useEffect(() =>{
        printList(bookAuthor,authorNamesList);
        checkForExistingListValue(bookAuthor,authorNamesList);
    },[bookAuthor])

    useEffect(() =>{
        printList(bookPublisher,publisherNamesList);
        checkForExistingListValue(bookPublisher,publisherNamesList);
    },[bookPublisher])

    useEffect(() =>{
        printList(bookGenre,combinedGenreNamesList);
        checkForExistingListValue(bookGenre,combinedGenreNamesList);
    },[bookGenre])

    useEffect(() =>{
        printList(bookLanguage,languageNamesList);
        checkForExistingListValue(bookLanguage,languageNamesList);
        if(props.selectedBookData.language!=null){
            for(let i=0; i<languageNamesList.length;i++){
                if(languageNamesList[i].suffix===props.selectedBookData.language){
                    setBookLanguage(languageNamesList[i].label)
                }
            }
        }
    },[bookLanguage])

    useEffect(() =>{
        printList(bookSeries,seriesNamesList);
        checkForExistingListValue(bookSeries,seriesNamesList);
    },[bookSeries])

    // useEffect(() =>{
    //     if(props.selectedBookData.language!=null){
    //         for(let i=0; i<languageNamesList.length;i++){
    //             if(languageNamesList[i].suffix===props.selectedBookData.language){
    //                 setBookLanguage(languageNamesList[i].label)
    //             }
    //         }
    //     }
    // },[]);

    function printList(elementName,optionsList) {
        // console.log(elementName);
        // console.log(optionsList);
    }

    async function setInitialValues(){
        setBookTitle(props.selectedBookData.title);
        setAuthor(props.selectedBookData.author);
        setPublisher(props.selectedBookData.publisher);
        setBookISBN(props.selectedBookData.isbn);
        setBookCopyright(props.selectedBookData.copyright);
        setBookPages(props.selectedBookData.pageCount);
        setBookEdition(props.selectedBookData.edition);
        setBookFormat(props.selectedBookData.format);
        setBookGenre(props.selectedBookData.genre);
        setBookLanguage(props.selectedBookData.language);
        setBookSeries(props.selectedBookData.series);
        setBookSeriesPart(props.selectedBookData.seriesPart);

    }

    // check through an existing list to see if the selected element is in its respective list
    function checkForExistingListValue(elementName,optionsList){
        // let newValue= document.getElementById(elementName).value;
        let listLength=optionsList.length;
        let exists=false;
        if(optionsList.length!==0){
            if(optionsList==="combinedGenreNamesList"){
                if (optionsList[0].includes(elementName) || optionsList[1].includes(elementName)){
                    console.log("genre already in list");
                } else {
                    console.log("genre not in list");
                }
            } else if(optionsList==="languageNamesList"){
                console.log(optionsList[0].suffix);
            } else {
                // checkContentsOfList(elementName,optionsList)
                for (let i=0;i < listLength-1;i++){
                    if (optionsList[i].label === elementName){
                        exists=true;
                        console.log("already in list")
                        break
                    } else {
                        console.log("not in list")
                    }
                    if (exists===true){break}
                }
                return exists
            }
        }
    }

    function printErrors(error) {
        console.log("Error Stack:", error.stack);
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
    }

    return (
        <div id="previewInputs">
            <h1>Preview and Finalize</h1>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" defaultValue={props.selectedBookData.title}
                       onChange={(e) => setBookTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="author-select">Author:</label>
                <Select options={authorNamesList} id="author-select" className="select-box"
                        placeholder={props.selectedBookData.author}
                        onChange={(choice) => setAuthor(choice.value)}/>
            </div>
            <div>
                <label htmlFor="publisher-select">Publisher:</label>
                <Select options={publisherNamesList} id="publisher-select" className="select-box"
                        placeholder={props.selectedBookData.publisher}
                        onChange={(choice) => setPublisher(choice.value)}/>
            </div>
            <div>
                <label htmlFor="isbn">Isbn:</label>
                <input type="text" id="isbn" name="isbn" defaultValue={props.selectedBookData.isbn}
                       onChange={(e) => setBookISBN(e.target.value)} maxLength="13"/>
            </div>
            <div>
                <label htmlFor="copyright:">Copyright:</label>
                <input type="text" id="copyright" name="copyright"  defaultValue={props.selectedBookData.copyright}
                       onChange={(e) => setBookCopyright(e.target.value)} maxLength="4"/>
            </div>
            <div>
                <label htmlFor="pages">Pages:</label>
                <input type="text" id="pages" name="pages"  defaultValue={props.selectedBookData.pageCount}
                       onChange={(e) => setBookPages(e.target.value)} maxLength="4"/>
            </div>
            <div>
                <label htmlFor="genre-select">Genre:</label>
                <Select ref={genreSelectRef} options={combinedGenreNamesList} id="genre-select"
                        className="select-box" name="genre-select" placeholder={props.selectedBookData.genre}
                        onChange={(choice) => setBookGenre(choice.value)}/>
            </div>
            <div>
                <label htmlFor="language-select">Language:</label>
                <Select options={languageNamesList} id="language-select" className="select-box"
                        placeholder={props.selectedBookData.language}
                        onChange={(choice) => setBookLanguage(choice.value)}/>
            </div>
            <div>
                <label htmlFor="series-select">Series:</label>
                <Select options={seriesNamesList} id="series-select" className="select-box"
                        placeholder={props.selectedBookData.series}
                        onChange={(choice) => setBookSeries(choice.value)}/>
            </div>
            <div>
                <label htmlFor="series-part">Series Part:</label>
                <input name="series-part" id="series-part" type="text"
                       defaultValue={props.selectedBookData.seriesPart}
                       onChange={(e) => setBookSeriesPart(e.target.value)} maxLength="2"/>
            </div>
        </div>
    )
}

export default AddBookAutomaticPreviewAndFinalize;