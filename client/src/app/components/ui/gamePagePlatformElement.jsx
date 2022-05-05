import React from "react"
import PropTypes from "prop-types"

const GamePagePlatformElement = ({ data }) => {
	return (
		<div className="system-requirements-game__list-system">
			{data.map((item, index) => {
				return (
					<div key={index} className="system-requirements-game__requirement">
						<h4 className="system-requirements-game__title-req">{item.title}</h4>
						<p className="system-requirements-game__text">{item.value}</p>
					</div>
				)
			})}
		</div>
	)
}

GamePagePlatformElement.propTypes = {
	data: PropTypes.array.isRequired
}

export default GamePagePlatformElement
