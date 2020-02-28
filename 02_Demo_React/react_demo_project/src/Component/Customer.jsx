import React, { Component } from "react";
import CustomerDetails from "./CustomerDetails";
import Button from "react-bootstrap/lib/Button";
import Panel from "react-bootstrap/lib/Panel";
import axios from "axios";

export default class Customer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCustomer: 1
		};
	}

	// Function must load first time with this functions
	componentDidMount() {
		this.getCustomerData();
	}

	//Function that call customer List file...
	getCustomerData() {
		axios.get("samplejson/customerList.json").then(response => {
			this.setState({ CustomerList: response });
		});
	}

	render() {
		if (!this.state.CustomerList) return <p>Loading Data..</p>;
		return (
			<div>
				<div className="col-md-3">
					{this.state.CustomerList.data.map(customer => {
						<Panel bsStyle="info" key={customer.name} className="centeralign">
							<Panel.Heading>
								<Panel.Title componentClass="h3">{customer.name}</Panel.Title>
							</Panel.Heading>
							<Panel.Body>
								<p>{customer.email}</p>
								<p>{customer.phone}</p>
								<Button
									bsStyle="info"
									onClick={() => {
										this.setState({ selectedCustomer: customer.id });
									}}
								>
									View Details
								</Button>
							</Panel.Body>
						</Panel>;
					})}
				</div>
				<div className="col-md-6">
					<CustomerDetails val={this.state.selectedCustomer}></CustomerDetails>
				</div>
			</div>
		);
	}
}
