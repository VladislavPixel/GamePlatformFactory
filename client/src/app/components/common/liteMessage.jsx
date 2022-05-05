import React from "react"
import PropTypes from "prop-types"

const LiteMessage = ({ title, offer, classes, iconPath, altIcon }) => {
	return (
		<div className={classes + " lite-message"}>
			<img src={`/images/icons/${iconPath}`} alt={altIcon} />
			<h3 className="lite-message__title">{title}</h3>
			<p className="lite-message__offer">{offer}</p>
		</div>
	)
}

LiteMessage.defaultProps = {
	classes: ""
}

LiteMessage.propTypes = {
	title: PropTypes.string.isRequired,
	offer: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired,
	iconPath: PropTypes.string,
	altIcon: PropTypes.string
}

export default LiteMessage
