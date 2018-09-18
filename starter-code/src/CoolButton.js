import React, { Component } from "react"


class CoolButton extends Component {
	
	constructor(props) {
		super(props);
	}
	
	hasProps() {
		let classes = "";
		if (this.props.isDanger) {
			classes += " is-danger"
		}
		if (this.props.isSuccess) {
			classes += " is-success"
		}
		if (this.props.isSmall) {
			classes += " is-small"
		}
		return classes;
	}

	render() {
		return (
			<button
				className={"button " + this.props.className + this.hasProps()}>
					{this.props.children}
			</button>
		)
	}

}

export default CoolButton;