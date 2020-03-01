import React, { Component } from "react";

export default class About_const extends Component {
	/**
	 Constructor in Class
	 Always call super class constructor
	 Super call must be first before this.state
	 */

	constructor(props) {
		super(props);
		this.state = {
			data: "About React Constructor Call"
		};
	}

	render() {
		return (
			<div>
				<h2>This React Constructor Call Example</h2>
				<p>{this.state.data}</p>
				<ul style={{ textAlign: "left" }}>
					<li>It is necessary have const in every class component</li>
					<li>Constructor must call super class before any states</li>
					<li>Constructor Must bind the normal functions inside scope</li>
					<li>Arrow function does not need to be bind</li>
					<li>Use "this" keyword inside the class and constructor </li>
				</ul>
			</div>
		);
	}
}
