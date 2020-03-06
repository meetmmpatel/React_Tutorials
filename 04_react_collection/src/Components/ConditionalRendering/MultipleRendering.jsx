import React, { Component } from "react";

/**
Show the if click the user is logged in ... 
and user can logout
we need display different  information  when user logged in or logged out
 */
export default class MultipleRendering extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}

	handleLogin = () => {
		this.setState({ isLoggedIn: true });
	};

	handleLogOut = () => {
		this.setState({ isLoggedIn: false });
	};
/**
 * this is login in functionality with based on message 
 * when isLoggedIn is false it should say please login in.
 */
	render() {
		return (
			<div>
				<h2>This is MultipleRendering Example</h2>
				<Message props={this.state.isLoggedIn}></Message>
				{this.state.isLoggedIn ? (
					<LogOut clickInfo={this.handleLogOut}></LogOut>
				) : (
					<Login clickInfo={this.handleLogin}></Login>
				)}
			</div>
		);
	}
}

function Message({ props} ) {
	if (props) {
		return <h3>Welcome Back</h3>;
	} else {
		return <h3>Please Login first</h3>;
	}
}

const Login = ( props ) => {
	return <button onClick={props.clickInfo}>Login</button>;
};

const LogOut = props => {
	return <button onClick={props.clickInfo}>Logout</button>;
};
