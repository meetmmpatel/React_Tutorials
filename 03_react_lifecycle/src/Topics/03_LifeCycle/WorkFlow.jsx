import React, { Component } from "react";

export default class WorkFlow extends Component {
	// First Step (Mounting)
	constructor() {
		super();
		this.state = {};
		console.log("Constructor Loaded");
	}

	// Second Steps (Mounting)
	static getDerivedStateFromProps() {
		console.log("Second Phase.. Static function");
		return null;
	}

	// Forth Steps (Mounting)
	componentDidMount() {
		console.log("Forth Pase: Component Did Mount");
	}

	// Fifth Steps (Update )
	shouldComponentUpdate() {
		console.log("Fifth Steps: shouldComponentUpdate");
		return true;
	}

	// Seven Steps(Update)
	getSnapshotBeforeUpdate() {
		console.log("Seventh Update: GetSnapShotsBeforeUpdate");
		return true;
	}

	// Eight Steps(Update)
	componentDidUpdate() {
		console.log("Eight Steps: Component did update");
	}

	// Last/ Ninth Steps;
	componentWillUnmount() {
		console.log("Last Step: Component Will UnMount");
	}

	handleClick = () => {
		console.log("Button Clicked");
		this.setState({ pageTitle: "WorkFlow" });
	};
	handleKeyUp = e => {
		this.setState({ inputDetails: e.target.value });
	};

	// Third & Six Steps (Mounting)
	render() {
		console.log("Third Phase: Render Functions");

		return (
			<div>
				<input type="text" onKeyUp={this.handleKeyUp}></input>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		);
	}
}
