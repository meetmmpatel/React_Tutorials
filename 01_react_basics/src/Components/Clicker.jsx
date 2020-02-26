import React, { Component } from "react";

export default class Clicker extends Component {
	constructor(props) {
		super();
		this.state = {
			count: 0
		};
		this.incrementCount = this.incrementCount.bind(this);
		this.decrementCount = this.decrementCount.bind(this);
		this.resetCount = this.resetCount.bind(this);
	}

	incrementCount() {
		this.setState(prevNum => ({ count: prevNum.count + 1 }));
	}

	decrementCount() {
		this.setState(prevNum => ({ count: prevNum.count - 1 }));
	}

	resetCount() {
		this.setState(() => ({ count: 0 }));
	}

	render() {
		return (
			<div>
				<div className="clicker">
					<div className="startClicker"> Counter: {this.state.count}</div>
					<div>
						{/* Adding Value to the Counter */}
						<button onClick={this.incrementCount} className="btn btn-success">
							Add Number
						</button>
						{/* Reset Value to the Counter */}
						<button onClick={this.resetCount} className="btn btn-danger">
							Reset
						</button>
						{/* Decrement the Value */}
						<button onClick={this.decrementCount} className="btn btn-success">
							Reduce Number
						</button>
					</div>
				</div>
			</div>
		);
	}
}
