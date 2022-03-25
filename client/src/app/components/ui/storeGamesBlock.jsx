import React from "react"
import PropTypes from "prop-types"
import StoreGameCardMiddle from "./storeGameCardMiddle"
import Pagination from "../common/pagination"

const StoreGamesBlock = ({ data }) => {
	const NUMBER_OF_ELEMENTS_ON_PAGE = 15
	const numberOfPages = Math.ceil(data.length / NUMBER_OF_ELEMENTS_ON_PAGE)
	return (
		<div className="store__games-block block-games-store">
			<h2 className="block-games-store__title">Наша игровая библиотека. Начни играть сейчас !</h2>
			<div className="block-games-store__list list-games-store">
				{data.map(item => <StoreGameCardMiddle key={item._id} {...item} />)}
			</div>
			<Pagination pagesNumber={numberOfPages} classes="block-games-store" />
		</div>
	)
}

StoreGamesBlock.propTypes = {
	data: PropTypes.array.isRequired
}

export default StoreGamesBlock
