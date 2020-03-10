import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { TechProvider} from "./Components/MyContext"
import ListOfTechnology from "./Components/ListOfTechnology"
function App() {
	return (
		<TechProvider>
			<div className="App">
        <Header></Header>
        <ListOfTechnology></ListOfTechnology>
			</div>
		</TechProvider>
	);
}

export default App;
