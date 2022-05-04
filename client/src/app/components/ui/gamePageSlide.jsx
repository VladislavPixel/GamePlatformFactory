import React from "react"
import PropTypes from "prop-types"

const GamePageSlide = ({ path, alt, onUpdatePoster, currentConfig }) => {
	return (
		<div onClick={() => onUpdatePoster({ path, alt })} className={"data-slider-game__slide" + (currentConfig.path && currentConfig.path === path ? " active" : "")}>
			<img src={`/images/gamePage/slidesHead/${path}`} alt={alt} />
		</div>
	)
}

GamePageSlide.propTypes = {
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onUpdatePoster: PropTypes.func.isRequired,
	currentConfig: PropTypes.object.isRequired
}

export default GamePageSlide
