import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoadingGamesMiddle, fetchAllGamesMiddleData } from "../../store/games"
import withLoading from "./withLoading"

const GamesMiddleLoaderGlobal = ({ children }) => {
	const dispatch = useDispatch()
	const isLoadingGamesMiddle = useSelector(getIsLoadingGamesMiddle())
	useEffect(() => {
		if (isLoadingGamesMiddle) dispatch(fetchAllGamesMiddleData())
	}, [isLoadingGamesMiddle, dispatch])
	const ChildrenWithLoading = withLoading(children, isLoadingGamesMiddle)
	return <ChildrenWithLoading />
}

export default GamesMiddleLoaderGlobal
