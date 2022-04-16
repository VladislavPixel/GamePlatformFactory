import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getStatusLoaderScopeSlider, fetchScopeSliderData } from "../../store/games"

const ScopeSliderStoreLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderScopeSlider = useSelector(getStatusLoaderScopeSlider())

	useEffect(() => {
		if (statusLoaderScopeSlider) dispatch(fetchScopeSliderData())
	}, [dispatch, statusLoaderScopeSlider])
	// AUXILIARY
	const ChildrenWithLoading = withLoading(children, statusLoaderScopeSlider)
	return <ChildrenWithLoading />
}

ScopeSliderStoreLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default ScopeSliderStoreLoaderGlobal
