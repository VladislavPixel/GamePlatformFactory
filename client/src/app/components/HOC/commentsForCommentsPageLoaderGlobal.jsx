import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// Components
import withLoading from "./withLoading"
// Auxiliary
import {
	getStatusGlobalLoaderForCommentsPage,
	fetchDataCommentsForCommentsPage,
	getTargetIdGameForCommentsPage,
	setDataCommentsOnFirstDownload
} from "../../store/commentsForCommentsPage"

const CommentsForCommentsPageLoaderGlobal = ({ children, configRequest }) => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderGlobal = useSelector(getStatusGlobalLoaderForCommentsPage())
	const targetGameId = useSelector(getTargetIdGameForCommentsPage())

	useEffect(() => {
		if (statusLoaderGlobal || (targetGameId !== idGame)) {
			dispatch(fetchDataCommentsForCommentsPage(configRequest, "first", 1, idGame))
			return
		}
		dispatch(setDataCommentsOnFirstDownload(1))
	}, [])
	const ChildrenWithLoading = withLoading(children, statusLoaderGlobal)
	return <ChildrenWithLoading />
}

CommentsForCommentsPageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	configRequest: PropTypes.object.isRequired
}

export default CommentsForCommentsPageLoaderGlobal
