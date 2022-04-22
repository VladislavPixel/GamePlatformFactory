import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Components
import StoreGameCardMiddle from "./storeGameCardMiddle"
import Pagination from "../common/pagination"
import withMessage from "../HOC/withMessage"
import LiteMessage from "../common/liteMessage"
// Auxiliary
import getArrayByDelimiter from "../../utils/getArrayByDelimiter"
import { getSelectedCategoryStore, updateCategoryStoreSelected, DEFAULT_SELECTED_CATEGORY } from "../../store/categoryStore"
import { getDataGamesMiddle, getStatusGamesSortedBy, setStatusSortedGames } from "../../store/games"
import { getValueSearchGamesStore } from "../../store/searchGamesStore"

const StoreGamesBlock = () => {
	const NUMBER_OF_ELEMENTS_ON_PAGE = 15
	const TRIGGER_ELEMENTS_FOR_ADDIT_BTN = 10

	// REDUX
	const dispatch = useDispatch()
	const valueSearchGamesStore = useSelector(getValueSearchGamesStore()) // Поиск
	const data = useSelector(getDataGamesMiddle()) // Данные по играм среднего ранга
	const selectedCategoryStore = useSelector(getSelectedCategoryStore()) // Category game current
	const statusSortedGames = useSelector(getStatusGamesSortedBy())

	// Если поиск заполнен, то скидываем state category
	useEffect(() => {
		if (valueSearchGamesStore !== "") dispatch(updateCategoryStoreSelected(DEFAULT_SELECTED_CATEGORY))
	}, [valueSearchGamesStore, dispatch])

	// STATE
	const [isActiveAdditionalBtn, setActiveAdditionalBtn] = useState(false)
	const [currentPagin, setCurrentPagin] = useState(0)
	const [arrayForPriceSorted, setArrayForPriceSorted] = useState(null)

	// Перед фильтрацией делаем сортировку данных по определенному критерию
	let sortedGames = [...data]
	function getArrayForSorted() {
		if (arrayForPriceSorted) return arrayForPriceSorted
		if (!arrayForPriceSorted) {
			const auxiliaryArr = sortedGames.filter(item => item.price !== "ОЖИДАНИЕ")
			setArrayForPriceSorted(auxiliaryArr)
			return auxiliaryArr
		}
	}
	switch(statusSortedGames) {
		case "highRatingPriority":
			sortedGames.sort((gamePrev, gameNext) => gameNext.rate - gamePrev.rate)
			break
		case "lowerRatingPriority":
			sortedGames.sort((gamePrev, gameNext) => gamePrev.rate - gameNext.rate)
			break
		case "expensivePriority":
			sortedGames = getArrayForSorted()
			sortedGames.sort((gamePrev, gameNext) => gameNext.price - gamePrev.price)
			break
		case "cheapPriority":
			sortedGames = getArrayForSorted()
			sortedGames.sort((gamePrev, gameNext) => gamePrev.price - gameNext.price)
			break
		default:
			console.log("Сортировка не определяет порядок никаким образом")
	}

	// Проводим первичную фильтрацию по категории, которая выбрана пользователем
	const filteredDataGamesOnCategory = (valueSearchGamesStore !== "" && sortedGames.length !== 0 ?
		sortedGames.filter(element => element.title.toLowerCase().includes(valueSearchGamesStore.toLowerCase())) :
		selectedCategoryStore.name === "all" ? sortedGames :
		selectedCategoryStore.name === "Бесплатно" ?
		sortedGames.filter(element => element.price === "играй бесплатно") :
		selectedCategoryStore.name === "Ожидание" ?
		sortedGames.filter(element => element.price === "ОЖИДАНИЕ") :
		sortedGames.filter(element => element.tags.includes(selectedCategoryStore.name))
	)

	// После фильтрации по категории мы корректно определяем количество страниц пагинации
	const numberOfPages = Math.ceil(filteredDataGamesOnCategory.length / NUMBER_OF_ELEMENTS_ON_PAGE)

	// Разбиваем наш массив данных на страницы пагинации
	const arrayForCurrentPagin = getArrayByDelimiter(currentPagin, NUMBER_OF_ELEMENTS_ON_PAGE, filteredDataGamesOnCategory)

	// Отбираем 10 элементов если у нас количество элементов на страницу больше 10, остальные скрывает кнопка
	// Если элементов меньше, то сразу их все выдаем
	let correctArrayData // Логика нижней кнопки под блоком данных
	if (arrayForCurrentPagin.length > TRIGGER_ELEMENTS_FOR_ADDIT_BTN && !isActiveAdditionalBtn) {
		correctArrayData = arrayForCurrentPagin.filter((el, index) => index < TRIGGER_ELEMENTS_FOR_ADDIT_BTN)
	} else {
		correctArrayData = arrayForCurrentPagin
	}

	// HANDLERS
	const handlerPaginationChange = (index) => setCurrentPagin(index)
	const handlerAdditionalBtn = () => setActiveAdditionalBtn(prevState => !prevState)
	const handlerSortBtn = (newStatus) => dispatch(setStatusSortedGames(newStatus))

	const configMessageComponent = {
		title: (sortedGames.length === 0 ? "В настоящее время библиотека игр Factory.inc не доступна, воспользуйтесь ей позже." : "По выбранной категории нет игр в библиотеке."),
		offer: (sortedGames.length === 0 ? "Приносим свои извинения за доставленные неудобства. Не забывайте, что Вы все также можете посидеть в наших чатах, посмотреть новости, ознакомиться с нашей деятельностью или завести друзей для совместной игры. Наша платформа не ограничивается одной библиотекой игр." : "Попробуйте сменить категорию, возможно игр на такой жанр пока что нет."),
		iconPath: (sortedGames.length === 0 ? "sadIcon.svg" : "vizor.svg"),
		altIcon: (sortedGames.length === 0 ? "Иконка грустного смайлика" : "Визор")
	}
	const ListGamesStoreWithMessage = withMessage(
		<div className="block-games-store__list list-games-store">{correctArrayData.map(item => <StoreGameCardMiddle key={item._id} {...item} />)}</div>,
		<LiteMessage altIcon={configMessageComponent.altIcon} iconPath={configMessageComponent.iconPath} title={configMessageComponent.title} offer={configMessageComponent.offer} classes="block-games-store__message" />,
		correctArrayData.length
	)
	// В зависимости от статуса сортировки мы определяем направляемое значение в dispatch и класс кнопки для стилей
	const configRateBtn = (
		statusSortedGames === "highRatingPriority" ?
		{ directionValue: "lowerRatingPriority", classes: " active" } :
		statusSortedGames === "lowerRatingPriority" ?
		{ directionValue: "highRatingPriority", classes: " active1" } :
		{ directionValue: "highRatingPriority", classes: "" }
	)
	const configPriceBtn = (
		statusSortedGames === "expensivePriority" ?
		{ directionValue: "cheapPriority", classes: " active" } :
		statusSortedGames === "cheapPriority" ?
		{ directionValue: "expensivePriority", classes: " active1" } :
		{ directionValue: "expensivePriority", classes: "" }
	)
	return (
		<div className="store__games-block block-games-store">
			<h2 className="block-games-store__title">Наша игровая библиотека. Начни играть сейчас !</h2>
			<div className="block-games-store__controls-store store-controls-block">
				<div className="store-controls-block__btn-container">
					<p className="store-controls-block__text">Сортировка по некоторым критериям:</p>
					<div className="store-controls-block__wrapper-btn">
						<button onClick={() => handlerSortBtn(configRateBtn.directionValue)} className={`store-controls-block__btn${configRateBtn.classes}`} type="button">Рейтинг</button>
						<button onClick={() => handlerSortBtn(configPriceBtn.directionValue)} className={`store-controls-block__btn${configPriceBtn.classes}`} type="button">Цена</button>
					</div>
				</div>
				{numberOfPages > 1 && <Pagination onChangePagination={handlerPaginationChange} currentPagin={currentPagin} pagesNumber={numberOfPages} classes="store-controls-block" />}
			</div>
			<ListGamesStoreWithMessage />
			{arrayForCurrentPagin.length > TRIGGER_ELEMENTS_FOR_ADDIT_BTN &&
				<div className="block-games-store__wrap-btn">
					<button onClick={handlerAdditionalBtn} className={`block-games-store__additional-btn${isActiveAdditionalBtn ? " active" : ""}`} type="button">{isActiveAdditionalBtn ? "Скрыть дополнительные игры" : "Показать еще для этой страницы"}</button>
				</div>
			}
		</div>
	)
}

export default StoreGamesBlock
