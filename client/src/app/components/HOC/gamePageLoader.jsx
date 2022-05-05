import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// Auxiliary
import { getDataGameById, getStatusFetchData, fetchDataGame, setStatusGamePageFetchDefault } from "../../store/gamePage"
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
		if (searchGameData) { // ДОДЕЛАТЬ !!!
			setLoading(false)
		} else if (status === "didNotSend") {
			dispatch(fetchDataGame(idGame))
		} else if (status === "success") {

		} else if (status === "dataGameNotFound") {

		}
		if (searchGameData || status !== "didNotSend") {
			if (status === "success") {
				dispatch(setStatusGamePageFetchDefault())
			} else {
				
			}
		} else {
			dispatch(fetchDataGame(idGame))
		}
	}, [searchGameData, status, idGame, dispatch])
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
