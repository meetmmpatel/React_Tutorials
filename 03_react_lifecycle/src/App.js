import React from "react";
import "./App.css";
import About_const from "./Topics/01_Constructor/About_Const";
import AboutCompApi from "./Topics/02_Component_API/AboutCompApi";
import AboutLifeCycle from "./Topics/03_LifeCycle/AboutLifeCycle";
import AboutFuncComp from "./Topics/03_LifeCycle/AboutFuncComp";

function App() {
	return (
		<div className="App">
			<div>
				<About_const></About_const>
				<AboutCompApi></AboutCompApi>
				<AboutLifeCycle></AboutLifeCycle>
				<AboutFuncComp></AboutFuncComp>
			</div>
		</div>
	);
}

export default App;
