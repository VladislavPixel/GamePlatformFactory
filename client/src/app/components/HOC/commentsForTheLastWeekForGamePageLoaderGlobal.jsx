import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"

// Auxiliary
import {
	getStatusLoadingCommentsForTheLastWeek,
	getTargetIdGameForComments,
	fetchDataCommentsForTheLastWeek,
	getDataCommentsForTheLastWeek
} from "../../store/commentsForGamePage"

// Components
import withLoading from "./withLoading"

const CommentsForTheLastWeekForGamePageLoaderGlobal = ({ children }) => {
	// AUXILIARY
	const { idGame } = useParams()
	// STATE
	const [isLoadingGlobal, setLoadingGlobal] = useState(true)
	// REDUX
	const dispatch = useDispatch()
	const statusLoading = useSelector(getStatusLoadingCommentsForTheLastWeek())
	const dataComments = useSelector(getDataCommentsForTheLastWeek())
	const idTargetGameForComments = useSelector(getTargetIdGameForComments())
	useEffect(() => {
		if (statusLoading) {
			dispatch(fetchDataCommentsForTheLastWeek(idGame))
		} else {
			if (idTargetGameForComments !== idGame || dataComments === null) {
				dispatch(fetchDataCommentsForTheLastWeek(idGame))
			} else {
				setLoadingGlobal(false)
			}
		}
	}, [statusLoading, dispatch, idGame, idTargetGameForComments, dataComments])
	const ChildrenWithLoading = withLoading(children, isLoadingGlobal)

	return <ChildrenWithLoading />
}

CommentsForTheLastWeekForGamePageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentsForTheLastWeekForGamePageLoaderGlobal
