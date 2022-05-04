import React from "react"
import PropTypes from "prop-types"

const GamePageAbout = ({ title, text }) => {
	return (
		<div className="game-block__about-game game-about-block">
			<h2 className="game-about-block__title">{title}</h2>
			<p className="game-about-block__text">{text}</p>
		</div>
	)
}

GamePageAbout.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default GamePageAbout
