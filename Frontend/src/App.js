import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pane from "./Components/Pane/Pane";
import MainPane from "./Components/Pane/MainPane";
import BookViewPane from "./Components/Pane/BookViewPane";
import AddBookPane from "./Components/Pane/AddBookPane";
import "./App.css";
import SignIn from "./Components/Modal/SignIn";

const App = ()=>{

	const [currentPaneName, setCurrentPaneName]=useState("MainPane");
	const [modalOpen, setModalOpen]=useState(false);
	const [isLoggedIn, setLoggedIn]=useState(false);
	const [username, setUsername]=useState("");

	function updateCurrentPane(newPaneName){
		console.log(`Updating pane from ${currentPaneName} to ${newPaneName}`);
		setCurrentPaneName(newPaneName);
	}

	function openSignInModal(){
		setModalOpen(true);
	}

	function LoadPaneHandler(){
		switch(currentPaneName){
			case 'MainPane':
				return <MainPane />
			case 'AddBookPane':
				return <AddBookPane />
			case 'BookViewPane':
				return <BookViewPane />
			default:
				return <Pane />
		}
	}

	return(
		<React.Fragment>
			<div>
				<SignIn 
				isopen={modalOpen}
				onclose={()=>setModalOpen(false)}
				/>
			</div>
			<Header onNewPaneSelected={updateCurrentPane} openSignInModal={openSignInModal} />
			
			<main>
				<LoadPaneHandler />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;