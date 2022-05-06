import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const GamePageSlide = ({ path, alt, onUpdatePoster, currentConfig, onSetWidthSlide }) => {
	// AUXILIARY
	const refSlide = useRef(null)

	useEffect(() => {
		onSetWidthSlide(refSlide.current.offsetWidth)
	}, [])
	return (
		<div ref={refSlide} onClick={() => onUpdatePoster({ path, alt })} className={"data-slider-game__slide" + (currentConfig.path && currentConfig.path === path ? " active" : "")}>
			<img src={`/images/gamePage/slidesHead/${path}`} alt={alt} />
		</div>
	)
}

GamePageSlide.propTypes = {
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onUpdatePoster: PropTypes.func.isRequired,
	currentConfig: PropTypes.object.isRequired,
	onSetWidthSlide: PropTypes.func.isRequired
}

export default GamePageSlide
