import React from "react"
import PropTypes from "prop-types"

const GamePageComments = ({ title }) => {
	return (
		<div className="game-block__comments comments-game-block">
			<div className="comments-game-block__container _container">
				<h2 className="comments-game-block__title">{title}</h2>
				<div></div>
			</div>
		</div>
	)
}

GamePageComments.propTypes = {
	title: PropTypes.string.isRequired
}

export default GamePageComments
