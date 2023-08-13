import NewAuthorPane from "../Components/BookElementPanes/NewAuthorPane";
import NewBookPane from "../Components/BookElementPanes/NewBookPane";
import NewGenrePane from "../Components/BookElementPanes/NewGenrePane";
import NewLanguagePane from  "../Components/BookElementPanes/NewLanguagePane";
import NewPublisherPane from "../Components/BookElementPanes/NewPublisherPane";
import NewSeriesPane from "../Components/BookElementPanes/NewSeriesPane";

export const accordionData= [
  {
    title: "New Book",
    id: "bookAccordion", 
    content: <NewBookPane />
  } , 
  {
    title: "New Author",
    id: "authorAccordion", 
    content: <NewAuthorPane />
  } ,
  {
    title: "New Genre",
    id: "genreAccordion", 
    content: <NewGenrePane />
  } ,
  {
    title: "New Language",
    id: "languageAccordion", 
    content: <NewLanguagePane />
  } ,
  {
    title: "New Publisher",
    id: "publisherAccordion", 
    content: <NewPublisherPane />
  } ,
  {
    title: "New Series",
    id: "seriesAccordion", 
    content: <NewSeriesPane />
  } ,
]