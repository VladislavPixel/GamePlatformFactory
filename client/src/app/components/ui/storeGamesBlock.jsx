import React, { useState } from "react"
import PropTypes from "prop-types"
import StoreGameCardMiddle from "./storeGameCardMiddle"
import Pagination from "../common/pagination"
import getArrayByDelimiter from "../../utils/getArrayByDelimiter"

const StoreGamesBlock = ({ data }) => {
	const [isActiveAdditionalBtn, setActiveAdditionalBtn] = useState(false)
	const [currentPagin, setCurrentPagin] = useState(0)
	const NUMBER_OF_ELEMENTS_ON_PAGE = 15
	const numberOfPages = Math.ceil(data.length / NUMBER_OF_ELEMENTS_ON_PAGE)
	const handlerPaginationChange = (index) => setCurrentPagin(index)
	const handlerAdditionalBtn = () => setActiveAdditionalBtn(prevState => !prevState)
	const arrayForCurrentPagin = getArrayByDelimiter(currentPagin, NUMBER_OF_ELEMENTS_ON_PAGE, data)
	let correctArrayData
	if (arrayForCurrentPagin.length === NUMBER_OF_ELEMENTS_ON_PAGE && !isActiveAdditionalBtn) {
		correctArrayData = arrayForCurrentPagin.filter((el, index) => index < 10)
	} else {
		correctArrayData = arrayForCurrentPagin
	}
	return (
		<div className="store__games-block block-games-store">
			<h2 className="block-games-store__title">Наша игровая библиотека. Начни играть сейчас !</h2>
			{numberOfPages > 1 && <Pagination onChangePagination={handlerPaginationChange} currentPagin={currentPagin} pagesNumber={numberOfPages} classes="block-games-store" />}
			<div className="block-games-store__list list-games-store">
				{correctArrayData.map(item => <StoreGameCardMiddle key={item._id} {...item} />)}
			</div>
			{arrayForCurrentPagin.length === NUMBER_OF_ELEMENTS_ON_PAGE &&
				<div className="block-games-store__wrap-btn">
					<button onClick={handlerAdditionalBtn} className={`block-games-store__additional-btn${isActiveAdditionalBtn ? " active" : ""}`} type="button">{isActiveAdditionalBtn ? "Скрыть дополнительные игры" : "Показать еще для этой страницы"}</button>
				</div>
			}
		</div>
	)
}

StoreGamesBlock.propTypes = {
	data: PropTypes.array.isRequired
}

export default StoreGamesBlock
