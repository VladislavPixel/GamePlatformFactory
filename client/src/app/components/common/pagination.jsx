import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import getArrayByNumber from "../../utils/getArrayByNumber"

const Pagination = ({ classes, pagesNumber, currentPagin, onChangePagination }) => {
	const arrayPagins = getArrayByNumber(pagesNumber)
	return (
		<div className={`${classes}__pagination pagination-block`}>
			<ul className="pagination-block__list">
				{arrayPagins.map((item, index) => <li title="Нажмите для переключения страницы" onClick={() => onChangePagination(index)} key={item._id} className={`pagination-block__element${currentPagin === index ? " active" : ""}`}><span>{item.value}</span></li>)}
			</ul>
		</div>
	)
}

Pagination.propTypes = {
	classes: PropTypes.string.isRequired,
	pagesNumber: PropTypes.number.isRequired,
	currentPagin: PropTypes.number.isRequired,
	onChangePagination: PropTypes.func.isRequired
}

export default Pagination
