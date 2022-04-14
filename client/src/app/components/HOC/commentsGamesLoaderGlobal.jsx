import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getIsLoadingCommentsGames, fetchAllCommentsGamesStoreSliderByArrayGames } from "../../store/commentsGames"
import { getDataTop18Games } from "../../store/games"

const CommentsGamesLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const isLoadingCommentsGames = useSelector(getIsLoadingCommentsGames())
	const dataGamesTop18 = useSelector(getDataTop18Games())
	// В слайдере только 12 игр, хотя топ у нас состоит из 18 игр в navigation store, но в слайдере 12 элементов
	const arrayTop12 = dataGamesTop18.slice(0, 12)
	useEffect(() => {
		if (isLoadingCommentsGames) dispatch(fetchAllCommentsGamesStoreSliderByArrayGames(arrayTop12))
	}, [])
	const ChildrenWithLoading = withLoading(children, isLoadingCommentsGames)
	return <ChildrenWithLoading />
}

CommentsGamesLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentsGamesLoaderGlobal
