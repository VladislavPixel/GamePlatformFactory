import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getStatusLoaderCountries, fetchAllCountriesData } from "../../store/countries"

const CountriesLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderCountrues = useSelector(getStatusLoaderCountries())

	useEffect(() => {
		if (statusLoaderCountrues) dispatch(fetchAllCountriesData())
	}, [dispatch, statusLoaderCountrues])
	// AUXILIARY
	const ChildrenWithLoading = withLoading(children, statusLoaderCountrues)
	return <ChildrenWithLoading />
}

CountriesLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default CountriesLoaderGlobal
