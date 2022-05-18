import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// Components
import withLoading from "./withLoading"

// Auxiliary
import {
	getStatusLoaderGamesRateGallerySliderForHome,
	fetchDataRateGallerySliderForHome,
	getGamesDataRateGallerySliderForHome
} from "../../store/gamesRateGallerySliderForHome"

const GamesRateGallerySliderLoaderGlobalForHome = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoading = useSelector(getStatusLoaderGamesRateGallerySliderForHome())
	const gameRateGallerySliderForHome = useSelector(getGamesDataRateGallerySliderForHome())

	useEffect(() => {
		if (statusLoading) dispatch(fetchDataRateGallerySliderForHome())
	}, [statusLoading, dispatch])
	// AUXILIARY
	const ChildrenWithLoading = withLoading(children, statusLoading)
	return <ChildrenWithLoading posters={gameRateGallerySliderForHome[1]} data={gameRateGallerySliderForHome[0]} />
}

export default GamesRateGallerySliderLoaderGlobalForHome
