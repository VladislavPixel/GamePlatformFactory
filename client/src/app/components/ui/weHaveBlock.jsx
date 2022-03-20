import React from "react"
import PropTypes from "prop-types"

const WeHaveBlock = ({ icon, title, text }) => {
	return (
		<div className="blocks-wrap-wehave__column">
			<div className="blocks-wrap-wehave__block-wrap">
				<div className="blocks-wrap-wehave__icon">
					<img src={`./images/weHaveDots/${icon}`} alt="Иконка Dot" />
				</div>
				<div className="blocks-wrap-wehave__info">
					<h3 className="blocks-wrap-wehave__title">{title}</h3>
					<p className="blocks-wrap-wehave__text">{text}</p>
				</div>
			</div>
		</div>
	)
}

WeHaveBlock.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default WeHaveBlock
