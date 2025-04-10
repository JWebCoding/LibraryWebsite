import React, {useEffect, useState} from "react";
import BookDetailsPreviewPane from "./BookDetailsPreviewPane";
import "./AddBookAutomaticDisplayResults.css"

function AddBookAutomaticDisplayResults(props){
    function bookDataHandler(selectedID) {
        props.setSelectedBookData(props.queryResultsData[selectedID-1]);

    }
    return (
        <section id={"displayResults"}>
            <h1>Display Results</h1>
            <div id={"previewPanes"}>
                {props.queryResultsData.map((book) => (
                    <BookDetailsPreviewPane bookDataHandler={bookDataHandler}
                                            title= {book.title}
                                            publisher= {book.publisher}
                                            copyright= {book.copyright}
                                            author={book.author}
                                            isbn={book.isbn}
                                            id={book.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default AddBookAutomaticDisplayResults;