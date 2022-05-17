import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// Auxiliary
import {
	getStatusLoadingCommentsForTheMainWall,
	getDataCommentsForTheMainWall,
	fetchDataCommentsForTheMainWall,
	getTargetIdGameForComments
} from "../../store/commentsForGamePage"
// Components
import withLoading from "./withLoading"

const CommentsForTheMainWallForGamePageLoaderGlobal = ({ children }) => {
	// AUXILIARY
	const { idGame } = useParams()
	// STATE
	const [isLoading, setLoading] = useState(true)
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderComments = useSelector(getStatusLoadingCommentsForTheMainWall())
	const dataComments = useSelector(getDataCommentsForTheMainWall())
	const idTargetGame = useSelector(getTargetIdGameForComments())
	useEffect(() => {
		if (statusLoaderComments) {
			dispatch(fetchDataCommentsForTheMainWall(idGame))
		} else {
			if (idTargetGame !== idGame || dataComments === null) {
				dispatch(fetchDataCommentsForTheMainWall(idGame))
			} else {
				setLoading(false)
			}
		}
	}, [dispatch, statusLoaderComments, idGame, idTargetGame, dataComments])
	const ChildrenWithLoading = withLoading(children, isLoading)
	return <ChildrenWithLoading />
}

CommentsForTheMainWallForGamePageLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentsForTheMainWallForGamePageLoaderGlobal
