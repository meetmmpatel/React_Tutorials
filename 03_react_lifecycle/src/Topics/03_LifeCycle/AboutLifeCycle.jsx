import React, { Component } from "react";
import WorkFlow from "./WorkFlow";
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
					<li>
						Mounting Phase
						<ol>
							<li>Constructor(Props) and State</li>
							<li>static getDerivedStateFromProps()</li>
							<li>render()</li>
							<li>componentDidMount</li>
						</ol>
					</li>
					<li>
						Update Phase
						<ul>
							<li>5.static getDerivedStateFromProps()</li>
							<li>6.shouldComponentUpdate()</li>
							<li>7.render()</li>
							<li>8.getSnapshotBeforeUpdate()</li>
							<li>9.componentDidUpdate()</li>
						</ul>
					</li>
					<li>
						Unmounting Phase
						<ul>
							<li>10.componentWillUnmount()</li>
						</ul>
					</li>
					<li>
						<h3>Component WorkFlow in Sequence</h3>
						<WorkFlow></WorkFlow>
					</li>
				</ol>
			</div>
		);
	}
}
