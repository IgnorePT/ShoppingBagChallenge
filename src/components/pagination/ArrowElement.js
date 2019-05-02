import React from 'react'

export default function ArrowElement(props) {

	const arrowConfig = {
		right:{
			id: "Right-Icon",
			title: "Arrow Right",
			transform: ""
		},
		left:{
			id: "Left-Icon",
			title: "Arrow Left",
			transform: "translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
		}
	}

	const arrow = arrowConfig[props.side];

  return (
	<svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
		<title>{arrow.title}</title>
		<polygon id={arrow.id} stroke="none" fillRule="evenodd" transform={arrow.transform} points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
	</svg>
  )
}
