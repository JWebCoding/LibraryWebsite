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
	const [userName, setUserName]=useState("");

	function updateCurrentPane(newPaneName){
		console.log(`Updating pane from ${currentPaneName} to ${newPaneName}`);
		setCurrentPaneName(newPaneName);
	}

	function openSignInModal(){
		setModalOpen(true);
	}

	function signInUser(newUserName){
		setUserName(newUserName);
		setLoggedIn(true);
	}

	function signOutCurrentUser(){
		setUserName("");
		setLoggedIn(false);
	}

	const printUserInfo=()=>{
		console.log(`User Info:\nis loggedin? ${isLoggedIn}\nUsername: ${userName}`)
	}

	function LoadPaneHandler(){
		switch(currentPaneName){
			case 'MainPane':
				return <MainPane user={userName} />
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
				onSignIn={signInUser}
				/>
			</div>
			<Header 
			signInStatus={isLoggedIn} 
			user={userName} 
			onNewPaneSelected={updateCurrentPane} 
			openSignInModal={openSignInModal} 
			signOutUser={signOutCurrentUser}/>
			
			<main>
				{/*↓ For Testing ↓*/}
				<button onClick={()=>printUserInfo()}>Print user info</button>
				{/*↑ Remove when no longer needed ↑*/}
				<LoadPaneHandler />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;