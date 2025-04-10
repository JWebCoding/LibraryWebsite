import NewBookPaneMethods from "../Components/BookElementPanes/NewBookPaneMethods";
import {useState} from "react";

class BookDataServices {



    fillElementLists = async () => {
        let listOfObjects=[]
        function printErrors(error) {
            console.log("Error Stack:", error.stack);
            console.log("Error Name:", error.name);
            console.log("Error Message:", error.message);
        }
        // The following get values for each of the select menus -
        // and then add the values to their respective lists.
        try{
            await NewBookPaneMethods.getAuthors().then(value =>{
                console.log(value)
            })
        } catch(e) {
            printErrors(e);
        }
        // console.log(listOfObjects);
        try{
            await NewBookPaneMethods.getGenres().then(value =>{
                return([
                    {label:"Non-Fiction", options: value[0]},
                    {label:"Fiction", options: value[1]}]
                )
            })
        } catch(e) {
            printErrors(e);
        }

        try{
            await NewBookPaneMethods.getLanguages().then(value =>{
                return(value);
            })
        } catch(e) {
            printErrors(e);
        }

        try{
            await NewBookPaneMethods.getPublishers().then(value =>{
                return(value);
            })
        } catch(e) {
            printErrors(e);
        }

        try{
            await NewBookPaneMethods.getSeries().then(value =>{
                return(value);
            })
        } catch(e) {
            printErrors(e);
        }

    }


}

export default new BookDataServices;

