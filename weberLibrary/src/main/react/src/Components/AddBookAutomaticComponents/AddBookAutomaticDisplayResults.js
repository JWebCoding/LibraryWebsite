import React, {useEffect} from "react";
import BookDetailsPreviewPane from "./BookDetailsPreviewPane";
import "./AddBookAutomaticDisplayResults.css"

function AddBookAutomaticDisplayResults(props){
    useEffect(()=>{console.log(props.queryResultsData)});
    return (
        <section id={"displayResults"}>
            <h1>Display Results</h1>
            <div id={"previewPanes"}>
                {props.queryResultsData.map((book) => (
                    // <BookDetailsPreviewPane copyright={props.queryResultsData.copyright}
                    //                         publisher={props.queryResultsData.publisher}
                    //                         title={props.queryResultsData.title}/>
                    <BookDetailsPreviewPane title= {book.title}
                        // author= {props.queryResultsData.authors[0]}
                                            publisher= {book.publisher}
                                            copyright= {book.copyright}
                        // isbn= {97845674}
                    />
                ))}
            </div>
        </section>

    );
}

export default AddBookAutomaticDisplayResults;