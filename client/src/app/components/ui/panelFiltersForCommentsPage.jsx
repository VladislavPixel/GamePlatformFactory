import React, { useState } from "react"
import PropTypes from "prop-types"

// Auxiliary
import filtersDataForCommentsGamePage from "../../configAuxiliary/filtersDataForCommentsGamePage.json"
// Components
import ColumnPanelFilterForCommentsPage from "./columnPanelFilterForCommentsPage"

const PanelFiltersForCommentsPage = ({ onUpdateFilter, selectedTimeFilter, selectedIndicatorFilter, selectedStatusFilter }) => {
	// STATE
	const [targetColumn, setTargetColumn] = useState(null)
	// HANDLERS
	const handlerShowColumn = (index) => {
		if (index === targetColumn) {
			setTargetColumn(null)
			return
		}
		setTargetColumn(index)
	}
	// AUXILIARY
	const FILTERS_OBJECT = filtersDataForCommentsGamePage
	const columnsFilters = Object.keys(FILTERS_OBJECT)
	return (
		<div className="comments-page-game-block__panel-filters filters-panel-comments">
			<h2 className="filters-panel-comments__title">Панель фильтрации</h2>
			<div className="filters-panel-comments__row">
				{columnsFilters.map((column, index) => {
					const title = (column === "timeFilter" ? "Временной фильтр" : column === "indicatorFilter" ? "Фильтр по показателям" : "Фильтр по посылу")
					return <ColumnPanelFilterForCommentsPage selectedTimeFilter={selectedTimeFilter} selectedIndicatorFilter={selectedIndicatorFilter} selectedStatusFilter={selectedStatusFilter} onUpdateFilter={onUpdateFilter} columnKey={column} targetColumn={targetColumn} onShow={handlerShowColumn} key={column + index} indexColumn={index} title={title} dataModal={FILTERS_OBJECT[column]} />
				})}
			</div>
		</div>
	)
}

PanelFiltersForCommentsPage.propTypes = {
	onUpdateFilter: PropTypes.func.isRequired,
	selectedTimeFilter: PropTypes.object.isRequired,
	selectedIndicatorFilter: PropTypes.object.isRequired,
	selectedStatusFilter: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.oneOf([null])
	])
}

export default PanelFiltersForCommentsPage
