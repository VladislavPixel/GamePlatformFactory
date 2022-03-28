import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateSearch, getValueSearchGamesStore, resetSearch } from "../../store/searchGamesStore"

const SearchHeadNavigationStore = () => {
	const dispatch = useDispatch()
	const valueSearchGamesStore = useSelector(getValueSearchGamesStore())
	const [valueSearch, setValueSearch] = useState(valueSearchGamesStore)
	const handlerChangeSearch = ({ target }) => dispatch(updateSearch(target.value))
	const handlerResetSearch = () => dispatch(resetSearch())
	useEffect(() => {
		setValueSearch(valueSearchGamesStore)
	}, [valueSearchGamesStore])
	return (
		<div className="navigation-store__column">
			<img src="./images/icons/search.svg" alt="Иконка поиска" />
			<div className="navigation-store__input-wrap">
				<input onChange={handlerChangeSearch} name="searchGamesStore" value={valueSearch} className="navigation-store__input" type="text" placeholder="Поиск по названию игры" />
				{valueSearchGamesStore !== "" && <button onClick={handlerResetSearch} className="navigation-store__reset-btn"></button>}
			</div>
		</div>
	)
}

export default SearchHeadNavigationStore
