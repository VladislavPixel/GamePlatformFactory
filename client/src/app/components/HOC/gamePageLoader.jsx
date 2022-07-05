import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// Auxiliary
import { getDataGameById, getStatusFetchData, fetchDataGame, getTargetIdElement, getNumberKeysEssenceGames, clearStoreForGamePage } from "../../store/gamePage"
import withLoading from "./withLoading"

const GamePageLoader = ({ children }) => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const dispatch = useDispatch()
	const searchGameData = useSelector(getDataGameById(idGame))
	const status = useSelector(getStatusFetchData())
	const currentIdElement = useSelector(getTargetIdElement())
	const numberKeysGames = useSelector(getNumberKeysEssenceGames())
	// STATE
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (searchGameData) { // Если данные есть в Redux, то отключаем Spinner
			setLoading(false)
			return
		}
		
		if (status) { // Если загрузчик в статусе true - значит он еще ни разу не грузил данные
			dispatch(fetchDataGame(idGame)) // делаем соответственно загрузку
		} else { // если загрузчик отключен, значит уже что-то он запрашивал
			if (currentIdElement !== idGame) { // убеждаемся делал ли он запрос для конкретного роута
				if (numberKeysGames === 5) dispatch(clearStoreForGamePage()) // очищаем redux, если много игр в нем сохранено
				dispatch(fetchDataGame(idGame))
			} else {
				setLoading(false)
			}
		}
	}, [searchGameData, status, idGame, dispatch, currentIdElement])
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
