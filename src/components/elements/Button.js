import React, { Component } from 'react'

export default class Button extends Component {


  render() {
		let btnClass = ""

		if(this.props.className){
			btnClass = `${btnClass} ${this.props.className}`
		}

	return (
		<button onClick={this.props.action} className={btnClass}>
			{this.props.children}
		</button>
	)
  }
}
