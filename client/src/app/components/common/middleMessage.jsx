import React from "react"
import PropTypes from "prop-types"

// Components
import LiteMessage from "./liteMessage"

const MiddleMessage = ({ classesParent, title, offer, textBtn, onCallback, iconPath, altIcon }) => {
	return (
		<div className={`${classesParent}__message-middle middle-message`}>
			<LiteMessage altIcon={altIcon} iconPath={iconPath} classes="middle-message__children-lite" title={title} offer={offer} />
			<button onClick={onCallback} className="middle-message__button" type="button">{textBtn}</button>
		</div>
	)
}

MiddleMessage.propTypes = {
	classesParent: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	offer: PropTypes.string.isRequired,
	textBtn: PropTypes.string.isRequired,
	onCallback: PropTypes.func.isRequired,
	iconPath: PropTypes.string.isRequired
}

export default MiddleMessage
