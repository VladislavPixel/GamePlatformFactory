import React from "react"
import PropTypes from "prop-types"

const HomeCard = ({ title, text, icon, alt }) => {
	return (
		<div className="cards__column">
			<div className="cards__block">
				<div className="cards__row">
					<div className="cards__row-column">
						<div className="cards__block-icon">
							<img src={`./images/icons/${icon}`} alt={alt} />
						</div>
					</div>
					<div className="cards__row-column">
						<div className="cards__title">{title}</div>
					</div>
				</div>
				<div className="cards__text">{text}</div>
			</div>
		</div>
	)
}

HomeCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.string,
	alt: PropTypes.string
}

export default HomeCard
