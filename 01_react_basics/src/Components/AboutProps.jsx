import React, { Component } from "react";

export default class AboutProps extends Component {
	render() {
		return (
			<div>
				<h2>Welcome to {this.props.name}</h2>
				<p>This is how you pass an props value into class component</p>
				<h4>This is defaultValue of Props: {this.props.value}</h4>
			</div>
		);
	}
}

AboutProps.defaultProps = {
	value: "Default Value!!"
};
