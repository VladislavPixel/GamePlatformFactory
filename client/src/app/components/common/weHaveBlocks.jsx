import React from "react"
import PropTypes from "prop-types"
import WeHaveBlock from "../ui/weHaveBlock"

const WeHaveBlocks = ({ data }) => {
	return (
		<div className="we-have__wrap-blocks blocks-wrap-wehave">
			{data.map((item, index) => <WeHaveBlock key={index} {...item} />)}
		</div>
	)
}

WeHaveBlocks.propTypes = {
	data: PropTypes.array
}

export default WeHaveBlocks
