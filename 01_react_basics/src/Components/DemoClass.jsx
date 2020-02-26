import React, { Component } from "react";

export default class DemoClass extends Component {
	render() {
		return (
			<div>
				<ContentOne></ContentOne>
				<ContentTwo></ContentTwo>
			</div>
		);
	}
}

class ContentOne extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Content One</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
					mollitia, quo fugiat ipsa aliquid corporis, sequi saepe nobis ipsum
					itaque eveniet maiores nostrum! Enim excepturi aliquam fugit debitis
					tenetur. Necessitatibus?
				</p>
			</div>
		);
	}
}

class ContentTwo extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Content Two</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
					mollitia, quo fugiat ipsa aliquid corporis, sequi saepe nobis ipsum
					itaque eveniet maiores nostrum! Enim excepturi aliquam fugit debitis
					tenetur. Necessitatibus?
				</p>
			</div>
		);
	}
}
