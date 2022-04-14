import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import {
	getIsLoadingCommentsGames,
	fetchAllCommentsGamesStoreSliderByArrayGames,
	getStatusLoadingUsersForCommentsSlider
} from "../../store/commentsGamesStoreSlider"
import { getDataTop18Games } from "../../store/games"

const CommentsGamesLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const isLoadingCommentsGames = useSelector(getIsLoadingCommentsGames())
	const isLoadingUsersForComments = useSelector(getStatusLoadingUsersForCommentsSlider())
	const dataGamesTop18 = useSelector(getDataTop18Games())
	// В слайдере только 12 игр, хотя топ у нас состоит из 18 игр в navigation store, но в слайдере 12 элементов
	const arrayTop12 = dataGamesTop18.slice(0, 12)
	useEffect(() => {
		if (isLoadingCommentsGames) dispatch(fetchAllCommentsGamesStoreSliderByArrayGames(arrayTop12))
	}, [arrayTop12, dispatch, isLoadingCommentsGames])
	const ChildrenWithLoading = withLoading(children, isLoadingCommentsGames)
	const ChildrenDoubleLoading = withLoading(ChildrenWithLoading, isLoadingUsersForComments)
	return <ChildrenDoubleLoading />
}

CommentsGamesLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CommentsGamesLoaderGlobal
