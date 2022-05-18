import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getIsLoadingGamesMiddle, fetchAllGamesMiddleData } from "../../store/games"

const GamesMiddleLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const isLoadingGamesMiddle = useSelector(getIsLoadingGamesMiddle())

	useEffect(() => {
		if (isLoadingGamesMiddle) dispatch(fetchAllGamesMiddleData())
	}, [isLoadingGamesMiddle, dispatch])
	// AUXILIARY
	const ChildrenWithLoading = withLoading(children, isLoadingGamesMiddle)
	return <ChildrenWithLoading />
}

export default GamesMiddleLoaderGlobal
