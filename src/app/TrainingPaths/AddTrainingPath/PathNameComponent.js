import React from "react";

class PathnameComponent extends React.Component {

	render() {
		return (
				<input
					type="text"
					className="path-name"
					placeholder="Path name.."
					onChange={event => this.props.cb(event)}
				/>
		)
	}
}

export default PathnameComponent;
