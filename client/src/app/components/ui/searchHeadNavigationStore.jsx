import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { updateSearch, getValueSearchGamesStore, resetSearch } from "../../store/searchGamesStore"

const SearchHeadNavigationStore = ({ onHandlerBtnNavigation }) => {
	const dispatch = useDispatch()
	const inputRef = useRef(null)
	const valueSearchGamesStore = useSelector(getValueSearchGamesStore())
	const [valueSearch, setValueSearch] = useState(valueSearchGamesStore)
	const handlerChangeSearch = ({ target }) => dispatch(updateSearch(target.value))
	const handlerResetSearch = () => dispatch(resetSearch())
	const handlerTargetInput = (event) => onHandlerBtnNavigation("")
	useEffect(() => {
		setValueSearch(valueSearchGamesStore)
	}, [valueSearchGamesStore])
	useEffect(() => {
		inputRef.current.addEventListener("click", handlerTargetInput)
		return () => {
			inputRef.current.removeEventListener("click", handlerTargetInput)
		}
	}, [inputRef.current, handlerTargetInput])
	return (
		<div className="navigation-store__column">
			<img src="./images/icons/search.svg" alt="Иконка поиска" />
			<div className="navigation-store__input-wrap">
				<input ref={inputRef} onChange={handlerChangeSearch} name="searchGamesStore" value={valueSearch} className="navigation-store__input" type="text" placeholder="Поиск по названию игры" />
				{valueSearchGamesStore !== "" && <button onClick={handlerResetSearch} className="navigation-store__reset-btn"></button>}
			</div>
		</div>
	)
}

SearchHeadNavigationStore.propTypes = {
	onHandlerBtnNavigation: PropTypes.func.isRequired
}

export default SearchHeadNavigationStore
