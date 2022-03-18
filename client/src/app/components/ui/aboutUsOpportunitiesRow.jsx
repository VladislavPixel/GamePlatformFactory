import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const AboutUsOpportunitiesRow = ({ title, text, link, icon, alt, indexElement, rotation }) => {
	const isEven = (indexElement % 2) === 0
	return (
		<div className={`opportunities-about-us__row${isEven ? " even" : ""}`}>
			<div className="opportunities-about-us__column opportunities-about-us__column_content">
				<div className="opportunities-about-us__info">
					<h2 className="opportunities-about-us__title">{title}</h2>
					<p className="opportunities-about-us__message">{text}</p>
					<Link className="opportunities-about-us__link" to="/">{link}</Link>
				</div>
			</div>
			<div className="opportunities-about-us__column">
				<div className="opportunities-about-us__poster-block opportunities-about-us__poster-block_rotate-img">
					<img src={`./images/icons/${icon}`} alt={alt} />
				</div>
			</div>
		</div>
	)
}

AboutUsOpportunitiesRow.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	indexElement: PropTypes.number.isRequired,
	rotation: PropTypes.bool
}

export default AboutUsOpportunitiesRow
