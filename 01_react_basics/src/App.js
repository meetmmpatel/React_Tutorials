import React from "react";
import "./App.css";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter.jsx";
import MainSection from "./Components/MainSection";
import Clicker from "./Components/Clicker";
import AboutState from "./Components/AboutState";
import AboutProps from "./Components/AboutProps";
import AboutFuncProps from "./Components/AboutFuncProps";
import AboutPropsValidation from "./Components/AboutPropsValidation";
function App() {
	return (
		<div className="App">
			<MyHeader></MyHeader>
			<h1> This is React Intro Page.</h1>
			<MainSection></MainSection>
			<p> This is Paragraph Tag in App.js file</p>
			<Clicker></Clicker>
			<AboutState></AboutState>
			<hr></hr>
			<AboutProps name={"Props"}></AboutProps>
			<AboutFuncProps
				name={"Function Props"}
				value={"This is value"}
			></AboutFuncProps>
			<AboutPropsValidation></AboutPropsValidation>
			<MyFooter></MyFooter>
		</div>
	);
}

export default App;
