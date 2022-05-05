import React from "react"
import PropTypes from "prop-types"

const GamePageBlockForBlocks = ({ path, alt, title, text }) => {
	return (
		<div className="blocks-game-page__element">
			<div className="blocks-game-page__img-container">
				<img src={`/images/gamePage/blocks/${path}`} className="blocks-game-page__img" alt={alt} />
			</div>
			<h3 className="blocks-game-page__title-block">{title}</h3>
			<p className="blocks-game-page__paragraph">{text}</p>
		</div>
	)
}

GamePageBlockForBlocks.propTypes = {
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default GamePageBlockForBlocks
