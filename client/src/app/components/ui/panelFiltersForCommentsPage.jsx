import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"
// Components
import ColumnPanelFilterForCommentsPage from "./columnPanelFilterForCommentsPage"

const PanelFiltersForCommentsPage = ({ onShow, targetColumn, onUpdateFilter, selectedTimeFilter, selectedIndicatorFilter, selectedStatusFilter }) => {
	// AUXILIARY
	const FILTERS_OBJECT = configAuxiliary.filtersDataForCommentsGamePage
	const columnsFilters = Object.keys(FILTERS_OBJECT)
	return (
		<div className="comments-page-game-block__panel-filters filters-panel-comments">
			<h2 className="filters-panel-comments__title">Панель фильтрации</h2>
			<div className="filters-panel-comments__row">
				{columnsFilters.map((column, index) => {
					const title = (column === "timeFilter" ? "Временной фильтр" : column === "indicatorFilter" ? "Фильтр по показателям" : "Фильтр по посылу")
					return <ColumnPanelFilterForCommentsPage selectedTimeFilter={selectedTimeFilter} selectedIndicatorFilter={selectedIndicatorFilter} selectedStatusFilter={selectedStatusFilter} onUpdateFilter={onUpdateFilter} columnKey={column} targetColumn={targetColumn} onShow={onShow} key={column + index} indexColumn={index} title={title} dataModal={FILTERS_OBJECT[column]} />
				})}
			</div>
		</div>
	)
}

PanelFiltersForCommentsPage.propTypes = {
	onShow: PropTypes.func.isRequired,
	targetColumn: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf([null])
	]),
	onUpdateFilter: PropTypes.func.isRequired,
	selectedTimeFilter: PropTypes.object.isRequired,
	selectedIndicatorFilter: PropTypes.object.isRequired,
	selectedStatusFilter: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.oneOf([null])
	])
}

export default PanelFiltersForCommentsPage
