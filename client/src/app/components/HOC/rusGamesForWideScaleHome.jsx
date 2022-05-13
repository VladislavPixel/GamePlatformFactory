import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getStatusLoaderRusGamesWideScaleHome, fetchDataRussianGamesForWideScale, getDataRusGamesForWideScaleHome } from "../../store/russianGamesForWideScaleSliderHome"

const RusGamesForWideScaleHomeGlobalLoader = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const isLoading = useSelector(getStatusLoaderRusGamesWideScaleHome())
	const dataRusGames = useSelector(getDataRusGamesForWideScaleHome())
	useEffect(() => {
		if (isLoading) dispatch(fetchDataRussianGamesForWideScale())
	}, [isLoading, dispatch])
	const ChildrenWithLoading = withLoading(children, isLoading)
	return <ChildrenWithLoading data={dataRusGames} />
}

RusGamesForWideScaleHomeGlobalLoader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default RusGamesForWideScaleHomeGlobalLoader
