import React from "react";
import AboutFuncPartTwo from "./AboutFuncPartTwo";

// Example of Functional Component in React
export default function AboutFuncComp() {
	const greeting = "Hello Functional Component";

	return (
		<div>
			<h3>{greeting}</h3>
			<h4>{<HeadLine></HeadLine>}</h4>
			<h4>{<GetInfo value={greeting}></GetInfo>}</h4>
			<h4>{<ArrowFunction></ArrowFunction>}</h4>
			<h4>{<AboutFuncPartTwo></AboutFuncPartTwo>}</h4>
		</div>
	);
}

// Functional Component as Child
function HeadLine() {
	const greeting = "Hello from child functional component";
	return <h4>{greeting}</h4>;
}

// Functional Component with props
function GetInfo(props) {
	return <h4>{props.value}</h4>;
}

// Functional Component with Arrow Function
const ArrowFunction = () => {
	return <HeadLine></HeadLine>;
};
