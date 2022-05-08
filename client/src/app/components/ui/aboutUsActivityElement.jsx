import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const AboutUsActivityElement = ({ title, text, path, alt, link, linkPath }) => {
	return (
		<div className="activity-about-us__column">
			<div className="activity-about-us__block-activity">
				<div className="activity-about-us__wrap-image">
					<img src={`/images/icons/${path}`} alt={alt} />
				</div>
				<h3 className="activity-about-us__title">{title}</h3>
				<p className="activity-about-us__text">{text}</p>
				{linkPath && <Link title={`Перейти на страницу -> ${title}`} className="activity-about-us__link" to={linkPath}>{link}</Link>}
			</div>
		</div>
	)
}

AboutUsActivityElement.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	link: PropTypes.string,
	linkPath: PropTypes.string
}

export default AboutUsActivityElement
