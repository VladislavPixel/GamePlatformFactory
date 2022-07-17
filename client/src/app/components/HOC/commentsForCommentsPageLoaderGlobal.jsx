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
import filtersDataForCommentsGamePage from "../../configAuxiliary/filtersDataForCommentsGamePage.json"

const CommentsForCommentsPageLoaderGlobal = ({ children }) => {
	// AUXILIARY
	const { idGame } = useParams()
	const { timeFilter, indicatorFilter } = filtersDataForCommentsGamePage
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderGlobal = useSelector(getStatusGlobalLoaderForCommentsPage())
	const targetGameId = useSelector(getTargetIdGameForCommentsPage())

	useEffect(() => {
		if (statusLoaderGlobal || (targetGameId !== idGame)) {
			dispatch(fetchDataCommentsForCommentsPage({ timeFilter: timeFilter[0], indicatorFilter: indicatorFilter[4], statusFilter: null }, "first", idGame, "arbitrary", 1 ))
		} else {
			dispatch(setDataCommentsOnFirstDownload(1))
		}
	}, [])
	const ChildrenWithLoading = withLoading(children, statusLoaderGlobal)
	return <ChildrenWithLoading />
}

CommentsForCommentsPageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
}

export default CommentsForCommentsPageLoaderGlobal
