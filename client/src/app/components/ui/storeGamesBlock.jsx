import React, { useState } from "react"
import PropTypes from "prop-types"
import StoreGameCardMiddle from "./storeGameCardMiddle"
import Pagination from "../common/pagination"
import getArrayByDelimiter from "../../utils/getArrayByDelimiter"

const StoreGamesBlock = ({ data }) => {
	const [currentPagin, setCurrentPagin] = useState(0)
	const NUMBER_OF_ELEMENTS_ON_PAGE = 15
	const numberOfPages = Math.ceil(data.length / NUMBER_OF_ELEMENTS_ON_PAGE)
	const handlerPaginationChange = (index) => setCurrentPagin(index)
	const arrayForCurrentPagin = getArrayByDelimiter(currentPagin, NUMBER_OF_ELEMENTS_ON_PAGE, data)
	return (
		<div className="store__games-block block-games-store">
			<h2 className="block-games-store__title">Наша игровая библиотека. Начни играть сейчас !</h2>
			<div className="block-games-store__list list-games-store">
				{arrayForCurrentPagin.map(item => <StoreGameCardMiddle key={item._id} {...item} />)}
			</div>
			{data.length > 10 && <Pagination onChangePagination={handlerPaginationChange} currentPagin={currentPagin} pagesNumber={numberOfPages} classes="block-games-store" />}
		</div>
	)
}

StoreGamesBlock.propTypes = {
	data: PropTypes.array.isRequired
}

export default StoreGamesBlock
