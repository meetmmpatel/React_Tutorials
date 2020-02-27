import React, { Component } from "react";

export default class AboutState extends Component {
	constructor() {
		super();
		this.state = {
			displayInfo: false
		};
		this.toggleDisplayInfo = this.toggleDisplayInfo.bind(this);
	}

	toggleDisplayInfo() {
		this.setState({ displayInfo: !this.state.displayInfo });
	}

	render() {
		return (
			<div>
				<br />
				<hr></hr>
				<h1>About State Updates and Binding.</h1>
				{this.state.displayInfo ? (
					<div>
						<p>
							Display Details information
							<ul>
								<li>How to Manage State Updates (using setState function)</li>
								<li>
									Binging (if it's arrow function we dont need to bind it.)
								</li>
								<li>
									State is only updated with setState otherwise state is
									immutable
								</li>
							</ul>
						</p>
						<button
							onClick={this.toggleDisplayInfo}
							className="btn btn-success"
						>
							Show Less
						</button>
					</div>
				) : (
					<div>
						<button onClick={this.toggleDisplayInfo} className="btn btn-danger">
							ReadMore
						</button>
					</div>
				)}
			</div>
		);
	}
}
