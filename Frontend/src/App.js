import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pane from "./Components/Pane/Pane";
import MainPane from "./Components/Pane/MainPane";
import BookViewPane from "./Components/Pane/BookViewPane";
import AddBookPane from "./Components/Pane/AddBookPane";
import SignInPane from  "./Components/Pane/SignInPane";
import "./App.css";

const App = ()=>{

	const [currentPaneName, setCurrentPaneName]=useState("MainPane");

	function updateCurrentPane(newPaneName){
		console.log(`Updating pane from ${currentPaneName} to ${newPaneName}`);
		setCurrentPaneName(newPaneName);
	}

	function LoadPaneHandler(){
		switch(currentPaneName){
			case 'MainPane':
				return <MainPane />
			case 'AddBookPane':
				return <AddBookPane />
			case 'BookViewPane':
				return <BookViewPane />
			case 'SignInPane':
				return <SignInPane />
			default:
				return <Pane />
		}
	}

	return(
		<React.Fragment>
			<Header onNewPaneSelected={updateCurrentPane} />
			<main>
				<LoadPaneHandler />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;