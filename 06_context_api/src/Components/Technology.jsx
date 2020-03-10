import React from "react";

export default function Technology(props) {
	return (
		<div>
			<hr></hr>
			<h3> ID: {props.id}</h3>
			<h5>Name: {props.name}</h5>
			<h5>Version: {props.version}</h5>
			<h5>Stack: {props.stack}</h5>
		</div>
	);
}
