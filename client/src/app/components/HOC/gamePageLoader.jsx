import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// Auxiliary
import { getDataGameById, getStatusFetchData, fetchDataGame } from "../../store/gamePage"
import withLoading from "./withLoading"

const GamePageLoader = ({ children }) => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const dispatch = useDispatch()
	const searchGameData = useSelector(getDataGameById(idGame))
	const status = useSelector(getStatusFetchData())
	// STATE
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (searchGameData || status !== "didNotSend") {
			setLoading(false)
		} else {
			dispatch(fetchDataGame(idGame))
		}
	}, [searchGameData, status])
	const ChildrenWithLoading = withLoading(children, isLoading)
	return <ChildrenWithLoading />
}

GamePageLoader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default GamePageLoader
