import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getIsLoadingCommentsGames, fetchAllCommentsGamesData } from "../../store/commentsGames"

const CommentsGamesLoaderGlobal = ({ children }) => {
	const dispatch = useDispatch()
	const isLoadingCommentsGames = useSelector(getIsLoadingCommentsGames())
	useEffect(() => {
		if (isLoadingCommentsGames) dispatch(fetchAllCommentsGamesData())
	}, [])
	const ChildrenWithLoading = withLoading(children, isLoadingCommentsGames)
	return  <ChildrenWithLoading />
}

CommentsGamesLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default CommentsGamesLoaderGlobal
