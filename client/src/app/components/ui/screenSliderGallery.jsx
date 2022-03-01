import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const ScreenSliderGallery = ({ path, alt, globPath, onScreenOver, onScreenOut }) => {
	const refScrin = useRef(null)
	useEffect(() => {
		refScrin.current.addEventListener("mouseover", onScreenOver)
		refScrin.current.addEventListener("mouseout", onScreenOut)
	}, [])
	return (
		<div className="content-slider-gallery__column">
			<img ref={refScrin} className="content-slider-gallery__screen-img" src={`${globPath}${path}`} alt={alt} />
		</div>
	)
}

ScreenSliderGallery.propTypes = {
	path: PropTypes.string,
	alt: PropTypes.string,
	globPath: PropTypes.string,
	onScreenOver: PropTypes.func,
	onScreenOut: PropTypes.func
}

export default ScreenSliderGallery
