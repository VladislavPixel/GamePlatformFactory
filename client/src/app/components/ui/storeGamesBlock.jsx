import React from "react"
import PropTypes from "prop-types"
import StoreGameCardMiddle from "./storeGameCardMiddle"

const StoreGamesBlock = ({ data }) => {
	return (
		<div className="store__games-block block-games-store">
			<h2 className="block-games-store__title">Наша игровая библиотека. Начни играть сейчас !</h2>
			<div className="block-games-store__list list-games-store">
				{data.map(item => <StoreGameCardMiddle key={item._id} {...item} />)}
			</div>
		</div>
	)
}

StoreGamesBlock.propTypes = {
	data: PropTypes.array.isRequired
}

export default StoreGamesBlock
