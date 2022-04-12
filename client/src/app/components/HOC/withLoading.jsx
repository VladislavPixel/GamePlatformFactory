import React from "react"
import PropTypes from "prop-types"

// Components
import Spinner from "../common/spinner"

const withLoading = (Component, statusLoading) => {
	const typeElement = typeof Component
	return function wrapLoading(props) {
		return (
			(statusLoading ? <Spinner /> :
				(typeElement === "function" ? <Component {...props} /> : Component)
			)
		)
	}
}

withLoading.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	statusLoading: PropTypes.bool.isRequired
}

export default withLoading
