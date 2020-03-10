import React from "react";

// Create Context
export const TechContext = React.createContext();

// Create Provider
export const TechProvider = props => {
	const [technology] = React.useState([
		{ id: 1, name: "React ", version: 16.7, stack: "javascript" },
		{ id: 2, name: "Redux", version: 7.4, stack: "javascript" },
		{ id: 3, name: "JSX", version: 7, stack: "HTML" },
		{ id: 4, name: "HTML", version: 5, stack: "HTML" },
		{ id: 5, name: "Java", version: 11, stack: "Java" }
	]);
	return (
		<TechContext.Provider value={technology}>
			{props.children}
		</TechContext.Provider>
	);
};
