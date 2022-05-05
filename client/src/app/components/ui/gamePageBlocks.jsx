import React from "react"
import PropTypes from "prop-types"

// Components
import GamePageBlockForBlocks from "./gamePageBlockForBlocks"

const GamePageBlocks = ({ title, blocks }) => {
	return (
		<div className="game-block__blocks blocks-game-page">
			<div className="blocks-game-page__container _container">
				<div className="blocks-game-page__column">
					<h2 className="blocks-game-page__title">{title}</h2>
				</div>
				<div className="blocks-game-page__column">
					<div className="blocks-game-page__list">
						{blocks.map((blockInfo, index) => <GamePageBlockForBlocks key={index} {...blockInfo} />)}
					</div>
				</div>
			</div>
		</div>
	)
}

GamePageBlocks.propTypes = {
	title: PropTypes.string.isRequired,
	blocks: PropTypes.array.isRequired
}

export default GamePageBlocks
