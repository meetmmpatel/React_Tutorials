import React, { Component } from 'react'

export default class AboutRefs extends Component {

	constructor(props) {
		super(props)
	
		this.callRef = React.createRef();
	}

	addingRefInput = () => { 
		this.callRef.current.focus();
	}
	
	render() {
		return (
			<div>
				<h2>Demo of React Reference</h2>
				<input type="text" ref={this.callRef} />
				<input type="button" value="Add the text" onClick={this.addingRefInput}/>
				
			</div>
		)
	}
}
