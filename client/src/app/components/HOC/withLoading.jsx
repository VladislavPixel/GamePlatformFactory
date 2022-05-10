import React from "react"
import PropTypes from "prop-types"

// Components
import Spinner from "../common/spinner"

const withLoading = (Component, statusLoading) => {
	const typeElement = typeof Component
	return function wrapLoading(props) {
		let NewChildren
		if (typeElement === "object") {
			NewChildren = React.Children.map(Component, child => {
				return React.cloneElement(child, { ...child.props, ...props })
			})
		}
		return (
			(statusLoading ? <Spinner /> :
				(
					typeElement === "function" ?
					<Component {...props} /> :
					typeElement === "object" ?
					NewChildren :
					Component
				)
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
