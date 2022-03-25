import React from "react"
import PropTypes from "prop-types"
import getArrayByNumber from "../../utils/getArrayByNumber"

const Pagination = ({ classes, pagesNumber }) => {
	const arrayPagins = getArrayByNumber(pagesNumber)
	console.log(arrayPagins)
	return (
		<div className={`${classes}__pagination pagination-block`}>

		</div>
	)
}

Pagination.propTypes = {
	classes: PropTypes.string.isRequired,
	pagesNumber: PropTypes.number.isRequired
}

export default Pagination
