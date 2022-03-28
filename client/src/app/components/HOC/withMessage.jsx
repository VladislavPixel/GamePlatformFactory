import React from "react"
import PropTypes from "prop-types"

const withMessage = (Component, ComponentMessage, valueLength) => {
	const typeElement = typeof Component
	return function (props) {
		return (
			(!valueLength ? ComponentMessage :
				(typeElement === "function" ? <Component {...props} /> : Component)
			)
		)
	}
}

withMessage.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	valueLength: PropTypes.number.isRequired,
	ComponentMessage: PropTypes.func.isRequired
}

export default withMessage
