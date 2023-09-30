import React from "react";
import "./BookDetailsPreviewPane.css"

const BookDetailsPreviewPane = ({bookDataHandler,title,publisher,copyright,author,isbn,id}) => {
    return(
        <button className={"previewPane"} onClick={()=> bookDataHandler(id)}>
            <section className={"bookElementSection"}>
                <span className={"elementName"}>Title: </span>
                <span className={"firstLine"}>{title}</span>
            </section>
            <section className={"bookElementSection"}>
                <span className={"elementName"}>Publisher: </span>
                <span className={"firstLine"}>{publisher}</span>
            </section>
            <section className={"bookElementSection"}>
                <span className={"elementName"}>Copyright: </span>
                <span className={"lastLine"}>{copyright}</span>
            </section>
            <section className={"bookElementSection"}>
                <span className={"elementName"}>Author: </span>
                <span className={"lastLine"}>{author}</span>
            </section>
            <section className={"bookElementSection"}>
                <span className={"elementName"}>ISBN: </span>
                <span className={"lastLine"}>{isbn}</span>
            </section>
            <span id={"idField"}>{id}</span>
        </button>
    );
}

export default BookDetailsPreviewPane;