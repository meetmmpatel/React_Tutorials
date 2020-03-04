import React, { useState, useEffect } from "react";

// Example of functional component with state...
export default function AboutFuncPartTwo() {
	return (
		<div>
			{<MainHeadline></MainHeadline>}
			{<UserForm></UserForm>}
			{<Counter></Counter>}
		</div>
	);
}

// Child Functional component with state..
const MainHeadline = () => {
	const [greeting, setGreeting] = useState(
		"This is Child Functional Component with State"
	);
	return (
		<div>
			<h4>{greeting}</h4>
			<input
				type="text"
				value={greeting}
				onChange={event => setGreeting(event.target.value)}
			></input>
		</div>
	);
};

const UserForm = () => {
	/**
	 * 1. create State
	 * 2. Create functions that update the State
	 * 3. Return the component
	 */

	// Initial State
	const [userName, setUserName] = useState(" ");
	const [firstName, setFirstName] = useState(" ");
	const [lastName, setLastName] = useState(" ");

	const handleUserNameInput = event => {
		setUserName(event.target.value);
	};
	const handleFirstName = event => {
		setFirstName(event.target.value);
	};

	const handleLastNameInput = event => {
		setLastName(event.target.value);
	};

	// Will Display User Information
	const DisplayUserInfo = () => {
		console.log(userName);
		console.log(firstName);
		console.log(lastName);
	};

	return (
		<div>
			<h3>User Input From</h3>
			<input
				type="text"
				onChange={handleUserNameInput}
				value={userName}
				placeholder="username..."
			></input>
			<input
				type="text"
				onChange={handleFirstName}
				value={firstName}
				placeholder="firstName..."
			></input>
			<input
				type="text"
				onChange={handleLastNameInput}
				value={lastName}
				placeholder="lastName..."
			></input>
			<button onClick={DisplayUserInfo}>Show User Info</button>
		</div>
	);
};

const Counter = () => {
	const initialCount = +localStorage.getItem("storageCount" || 0);
	const [count, setCount] = useState(initialCount);

	const handleIncrement = () => {
		setCount(currentCount => currentCount + 1);
	};

	const handleDecrement = () => {
		setCount(currentCount => currentCount - 1);
	};

	useEffect(() => {
		localStorage.setItem("storageCount", count);
	});

	return (
		<div>
			<h2>Counter</h2>
			<h4>{count}</h4>
			<button type="button" onClick={handleIncrement}>
				Add
			</button>
			<button type="button" onClick={handleDecrement}>
				Remove
			</button>
		</div>
	);
};
