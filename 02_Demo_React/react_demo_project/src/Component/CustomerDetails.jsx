import React, { Component } from "react";
import Panel from "react-bootstrap/lib/Panel";
import axios from "axios";

export default class CustomerDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// Function will called by react once the component will load for first time.
	componentDidMount() {
		this.getCustomerDetails(this.props.value);
	}

	// Function with called whenever component gets updated
	componentDidUpdate(prevPros) {
		if (this.prevPros !== prevPros.value) {
			this.getCustomerDetails(this.props.value);
		}
	}

	// Function to load the customer details from json files
	getCustomerDetails(id) {
		console.log("samplejson/customer" + id + ".json");
		axios.get("samplejson/customer" + id + ".json").then(response => {
			this.setState({ CustomerDetails: response });
		});
	}

	render() {
		return <div></div>;
	}
}
