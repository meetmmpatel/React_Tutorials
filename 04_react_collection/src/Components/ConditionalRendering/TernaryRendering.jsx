import React from "react";

export default function TernaryRendering() {
	return (
		<div>
			<GetInfo isAllowed={true}></GetInfo>
			<LogicalAnd></LogicalAnd>
			<SwitchComponent props={"Two"}></SwitchComponent>
		</div>
	);
}

// Ternary Operators
const GetInfo = ({ isAllowed }) => {
	return isAllowed ? (
		<p>This is Your Account Information</p>
	) : (
		<p>Please Login into your account</p>
	);
};

// && Logical Operators (Both side must be true or all is false)

const LogicalAnd = () => {
	return <div>{20 > 18 && <p>This is Logical End Operators</p>}</div>;
};

// Switch Operators
const SwitchComponent = ({ props }) => {
	switch (props) {
		case "One":
			return <h4>"This is Case One"</h4>;
		case "Two":
			return <h4>"This is Case Two"</h4>;
		default:
			return <p>"No Case Matches</p>;
	}
};
