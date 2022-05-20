import React, { useState } from "react"
import { flushSync } from "react-dom"

// Components
import CommentsPageGameHead from "../../ui/commentsPageGameHead"
import PanelFiltersForCommentsPage from "../../ui/panelFiltersForCommentsPage"

const CommentsForGamePage = () => {
	// STATE
	const [timeFilter, setTimeFilter] = useState({ _id: "tf1", key: "allTime", columnKey: "timeFilter" })
	const [indicatorFilter, setIndicatorFilter] = useState({ _id: "if5", key: "consonants", columnKey: "indicatorFilter" })
	const [statusFilter, setStatusFilter] = useState(null)
	const [targetColumn, setTargetColumn] = useState(null)
	// HANDLERS
	const handlerShowColumn = (index) => {
		if (index === targetColumn) {
			setTargetColumn(null)
			return
		}
		setTargetColumn(index)
	}
	const handlerFetchCommentsByConfigFilters = (newData) => {
		const submitData = {
			timeFilter,
			indicatorFilter,
			statusFilter,
			[newData.columnKey]: newData
		}

		console.log("SUBMIT_DATA_COMMENTS", submitData)
	}
	const handlerUpdateFilter = (newState) => {
		let correctElement = {...newState}
		delete correctElement.title
		switch(correctElement.columnKey) {
			case "timeFilter":
				flushSync(() => {
					setTimeFilter(correctElement)
				})
			break
			case "indicatorFilter":
				flushSync(() => {
					setIndicatorFilter(correctElement)
				})
			break
			case "statusFilter":
				flushSync(() => {
					setStatusFilter(correctElement)
				})
			break
			default:
			break
		}
		setTargetColumn(null)
		handlerFetchCommentsByConfigFilters(correctElement)
	}
	return (
		<div className="block-content__commentsForGame comments-page-game-block">
			<div className="comments-page-game-block__container _container">
				<CommentsPageGameHead />
				<PanelFiltersForCommentsPage selectedTimeFilter={timeFilter} selectedIndicatorFilter={indicatorFilter} selectedStatusFilter={statusFilter} onShow={handlerShowColumn} onUpdateFilter={handlerUpdateFilter} targetColumn={targetColumn} />
			</div>
		</div>
	)
}

export default CommentsForGamePage
