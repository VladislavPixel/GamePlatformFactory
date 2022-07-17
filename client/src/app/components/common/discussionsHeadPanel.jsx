import React from "react"
import PropTypes from "prop-types"

// Components
import Pagination from "./pagination"

const DiscussionsHeadPanel = ({ text, valueAll, pagesNumber, currentPagin, onChangePagination }) => {
	return (
		<div className="wrap-discussions__head-panel panel-head-discussions">
			<div className="panel-head-discussions__statistics-block">
				<img className="panel-head-discussions__icon" src="/images/icons/message.svg" alt="Иконка сообщений" />
				<h4 className="panel-head-discussions__title-head-panel">{text}</h4>
				<span className="panel-head-discussions__value">{valueAll}</span>
			</div>
			{pagesNumber > 1 && <Pagination onChangePagination={onChangePagination} currentPagin={currentPagin} classes="panel-head-discussions" pagesNumber={pagesNumber} />}
		</div>
	)
}

DiscussionsHeadPanel.propTypes = {
	text: PropTypes.string.isRequired,
	valueAll: PropTypes.number.isRequired,
	pagesNumber: PropTypes.number.isRequired,
	currentPagin: PropTypes.number.isRequired,
	onChangePagination: PropTypes.func.isRequired
}

export default DiscussionsHeadPanel
