import React, { Component } from "react"

class Message extends Component {
  
  constructor(props) {
		super(props);
	}
	hasProps() {
		let classes = "";
		if (this.props.isInfo) {
			classes += " is-info"
		}
		return classes;
	}


  render() {
    return (
      <article className={"message" + this.hasProps()} >
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>

    )
  }
}

export default Message