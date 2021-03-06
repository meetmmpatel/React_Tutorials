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
		this.getCustomerDetails(this.props.val);
	}

	// Function with called whenever component gets updated
	componentDidUpdate(prevPros) {
		if (this.props.val !== prevPros.val) {
			this.getCustomerDetails(this.props.val);
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
		if (!this.state.CustomerDetails) return <p>Loading Data..</p>;
		return (
			<div className="customerdetails">
				<Panel bsStyle="info" className="centeralign">
					<Panel.Heading>
						<Panel.Title className="h3">
							{this.state.CustomerDetails.data.name}
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<p>Name: {this.state.CustomerDetails.data.name}</p>
						<p>Email: {this.state.CustomerDetails.data.email}</p>
						<p>Phone: {this.state.CustomerDetails.data.phone}</p>
						<p>City: {this.state.CustomerDetails.data.city}</p>
						<p>State: {this.state.CustomerDetails.data.state}</p>
						<p>Country: {this.state.CustomerDetails.data.country}</p>
						<p>Organization: {this.state.CustomerDetails.data.organization}</p>
						<p>Job Profile: {this.state.CustomerDetails.data.jobProfile}</p>
						<p>
							Additional Info: {this.state.CustomerDetails.data.additionalInfo}
						</p>
					</Panel.Body>
				</Panel>
			</div>
		);
	}
}
