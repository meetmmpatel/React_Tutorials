import React, { Component } from "react";
import PropTypes from "prop-types";
export default class AboutPropsValidation extends Component {
	render() {
		return (
			<div>
				<h3>Array: {this.props.propArray}</h3>
				<h3>Boolean: {this.props.propBool ? "True" : "False"}</h3>
				<h3>Function: {this.props.propFunc}</h3>
				<h3>Number: {this.props.propNumber}</h3>
				<h3>String: {this.props.propString}</h3>
				<h3>Object: {this.props.propObject}</h3>
			</div>
		);
	}
}

AboutPropsValidation.propTypes = {
	propArray: PropTypes.array.isRequired,
	propBool: PropTypes.bool.isRequired,
	propFunc: PropTypes.func,
	propNumber: PropTypes.number,
	propString: PropTypes.string
};

AboutPropsValidation.defaultProps = {
	propArray: [11, 22, 33],
	propBool: true,
	propFunc: function(args) {
		return args;
	},
	propNumber: 11,
	propString: "Str"
};
