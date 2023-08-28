import React from "react";
import "./BookDetailsPreviewPane.css"

const BookDetailsPreviewPane = ({title,publisher,copyright}) => {

    return(
        <button className="previewPane">
            <p className={"firstLine"}>{title}</p>
            {/*<h4>{author}</h4>*/}
            <p>{publisher}</p>
            <p>{copyright}</p>
            {/*<h4>{isbn}</h4>*/}
        </button>

    );
};

export default BookDetailsPreviewPane;