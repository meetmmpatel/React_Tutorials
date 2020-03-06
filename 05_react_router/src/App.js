import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
} from "react-router-dom";

// The useHistory hook gives you access to the history instance that you may use to navigate.
// The useLocation hook returns the location object that represents the current URL. ...
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<AuthButton />

				<ul>
					<li>
						<Link to="/public">Public Page</Link>
					</li>
					<li>
						<Link to="/protected">Account Home Page</Link>
					</li>
				</ul>

				<Switch>
					<Route path="/public">
						<PublicPage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<PrivateRoute path="/protected">
						<ProtectedPage />
					</PrivateRoute>
				</Switch>
			</div>
		</Router>
	);
}

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

function AuthButton() {
	let history = useHistory();

	return fakeAuth.isAuthenticated ? (
		<p style={{ color: "green" }}>
			Welcome!{" "}
			<button
				onClick={() => {
					fakeAuth.signout(() => history.push("/"));
				}}
			>
				Sign out
			</button>
		</p>
	) : (
		<p style={{ color: "red" }}>You are not logged in.</p>
	);
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

function PublicPage() {
	return (
		<div>
			<h3>Public</h3>
			<p>This is public pages, User can see without authentication</p>
		</div>
	);
}

function ProtectedPage() {
	return (
		<div>
			<h3>Protected</h3>
			<p>This is authenticate information</p>
		</div>
	);
}

function LoginPage() {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };
	let login = () => {
		fakeAuth.authenticate(() => {
			history.replace(from);
		});
	};
	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button onClick={login}>Log in</button>
		</div>
	);
}

export default App;
