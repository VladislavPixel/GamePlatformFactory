import React from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

const CommentPageLoaderGlobal = ({ children }) => {
	const { idComment } = useParams()
	return children
}
CommentPageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentPageLoaderGlobal
