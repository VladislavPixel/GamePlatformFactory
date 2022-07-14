import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import {
	fetchDataComment,
	getIdCommentForCommentPage,
	getLoadingStatusForCommentPage
} from "../../store/comment"

const CommentPageLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoader = useSelector(getLoadingStatusForCommentPage())
	const commentIdStore = useSelector(getIdCommentForCommentPage())
	// AUXILIARY
	const { idComment } = useParams()
	useEffect(() => {
		if (statusLoader || (idComment !== commentIdStore)) dispatch(fetchDataComment(idComment))
	}, [])
	const ChildrenWithLoading = withLoading(children, statusLoader)
	return <ChildrenWithLoading />
}
CommentPageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentPageLoaderGlobal
