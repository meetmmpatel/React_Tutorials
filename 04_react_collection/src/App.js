import React from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import ConditionalRendering from "./Components/ConditionalRendering/ConditionalRendering";
import AboutRefs from "./Components/Reference/AboutRefs";
import AboutKey from "./Components/Collections/AboutKey";
import AboutUs from "./Components/ReactRoutes/AboutUs";
import ContactUs from "./Components/ReactRoutes/ContactUs";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1>Home Page</h1>
				<Switch>
					<Route path="/about" component={AboutUs}></Route>
					<Route path="/contact" component={ContactUs}></Route>
				</Switch>
				<ul>
					<li>
						<NavLink to="/contact" exact activeStyle={{ color: "red" }}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" exact activeStyle={{ color: "green" }}>
							About
						</NavLink>
					</li>
				</ul>

				<div>
					<ConditionalRendering></ConditionalRendering>
					<AboutKey></AboutKey>
					<AboutRefs></AboutRefs>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
