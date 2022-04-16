import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import getValuePrice from "../../utils/getValuePrice"

const ScopeSliderSlide = ({ price, imageMiddle, altImageMiddle, oldPrice, sale }) => {
	return (
		<div className="slider-scope__column">
			<div className="slider-scope__slide">
				<Link to="/">
					<img className="slider-scope__img" src={`./images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
					<div className="slider-scope__footer">
						{sale &&
							<React.Fragment>
								<span className="slider-scope__sale">{sale}%</span>
								<span className="slider-scope__old-price">{getValuePrice(oldPrice)}</span>
							</React.Fragment>
						}
						<span className="slider-scope__price">{getValuePrice(price)}</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

ScopeSliderSlide.propTypes = {
	price: PropTypes.number.isRequired,
	imageMiddle: PropTypes.string.isRequired,
	altImageMiddle: PropTypes.string.isRequired,
	oldPrice: PropTypes.number,
	sale: PropTypes.number
}

export default ScopeSliderSlide
