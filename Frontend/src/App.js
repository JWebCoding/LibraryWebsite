import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Pane from "./Components/Pane/Pane";
import MainPane from "./Components/Pane/MainPane";
import BookViewPane from "./Components/Pane/BookViewPane";
import AddBookPane from "./Components/Pane/AddBookPane";
import "./App.css";
import SignIn from "./Components/Modal/SignIn";
import BookDetails from "./Components/Modal/BookDetails";

const App = ()=>{

	const [currentPaneName, setCurrentPaneName]=useState("MainPane");
	const [SignInModalOpen, setSignInModalOpen]=useState(false);
	const [BookDetailsModalOpen, setBookDetailsModalOpen]=useState(false);
	const [isLoggedIn, setLoggedIn]=useState(false);
	const [userName, setUserName]=useState("");

	function updateCurrentPane(newPaneName){
		console.log(`Updating pane from ${currentPaneName} to ${newPaneName}`);
		setCurrentPaneName(newPaneName);
	}

	function openSignInModal(){
		setSignInModalOpen(true);
	}

	function openBookDetailsModal(){
		setBookDetailsModalOpen(true);
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
				return <BookViewPane openBookDetailsModal={openBookDetailsModal} />
			default:
				return <Pane />
		}
	}

	return(
		<React.Fragment>
			<div>
				<SignIn 
				isopen={SignInModalOpen}
				onclose={()=>setSignInModalOpen(false)}
				onSignIn={signInUser}
				/>
				<BookDetails 
				isopen={BookDetailsModalOpen}
				onclose={()=>setBookDetailsModalOpen(false)}
				/>
			</div>
			<Header 
			signInStatus={isLoggedIn} 
			onNewPaneSelected={updateCurrentPane} 
			openSignInModal={openSignInModal} 
			signOutUser={signOutCurrentUser}/>
			
			<main>
				<LoadPaneHandler />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default App;