import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPane from "./Components/Pane/MainPane";
import BookViewPane from "./Components/Pane/BookViewPane";
import AddBookPane from "./Components/Pane/AddBookPane";
import TestPane from "./Components/Pane/TestPane";
import "./App.css";
import SignIn from "./Components/Modal/SignIn";
import BookDetails from "./Components/Modal/BookDetails";
import { BrowserRouter, Route , Routes} from "react-router-dom";

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

	return(
		<BrowserRouter>
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
				{/* <LoadPaneHandler /> */}
				<div>
						<Routes>
							<Route exact path="/main" element={<MainPane user={userName} />} />
							<Route exact path="/view" element={<BookViewPane openBookDetailsModal={openBookDetailsModal} />} />
							<Route exact path="/add" element={<AddBookPane />} />
							<Route exact path="/test" element={<TestPane />} />
						</Routes>
				</div>
			</main>
			<Footer />
			
		</React.Fragment>
		</BrowserRouter>
	);
}

export default App;