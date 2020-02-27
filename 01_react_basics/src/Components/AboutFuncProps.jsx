import React from "react";

export default function AboutFuncProps(props) {
	return (
		<div>
			<h4>Welcome {props.name}</h4>
			<p>This is another args in function {props.value}</p>
		</div>
	);
}
