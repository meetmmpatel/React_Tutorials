import React, { Component } from "react";

export default class AboutLifeCycle extends Component {
	render() {
		return (
			<div>
				<hr></hr>
				<h2>This Section is about Class Component Life Cycle</h2>
				<ol style={{ textAlign: "left" }}>
					<li>
						Initial Phase(BirthOfComponent)
						<br></br>
						<ul>
							<li>
								<strong>getDefaultProps()</strong>
							</li>
							<p>it's used to specify the default value of the this.props</p>
							<li>
								<strong>getInitialState()</strong>
								<p>this function will invoke before creation of Component</p>
							</li>
						</ul>
					</li>
					<li>Mounting Phase</li>
					<li>Update Phase</li>
					<li>Unmounting Phase</li>
				</ol>
			</div>
		);
	}
}
