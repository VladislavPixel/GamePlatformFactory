import React, { useState } from "react"
import { flushSync } from "react-dom"

// Components
import CommentsPageGameHead from "../../ui/commentsPageGameHead"
import PanelFiltersForCommentsPage from "../../ui/panelFiltersForCommentsPage"
import CommentsForCommentsPageLoaderGlobal from "../../HOC/commentsForCommentsPageLoaderGlobal"
import CommentsListForCommentsPage from "../../ui/commentsListForCommentsPage"

const CommentsForGamePage = () => {
	// STATE
	const [timeFilter, setTimeFilter] = useState({ _id: "tf1", key: "allTime", columnKey: "timeFilter" })
	const [indicatorFilter, setIndicatorFilter] = useState({ _id: "if5", key: "consonants", columnKey: "indicatorFilter" })
	const [statusFilter, setStatusFilter] = useState(null)
	const [targetColumn, setTargetColumn] = useState(null)
	const [startGroup, setStartGroup] = useState(1)
	const [endGroup, setEndGroup] = useState(1)
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
			[(newData ? newData.columnKey: "statusFilter")]: newData
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
				if (!statusFilter || correctElement._id !== statusFilter._id) {
					flushSync(() => {
						setStatusFilter(correctElement)
					})
				} else {
					correctElement = null
					flushSync(() => {
						setStatusFilter(correctElement)
					})
				}
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
				<CommentsForCommentsPageLoaderGlobal configRequest={{ timeFilter, indicatorFilter, statusFilter }} groupRequest={startGroup}>
					<CommentsListForCommentsPage startGroupIndex={startGroup} endGroupIndex={endGroup} />
				</CommentsForCommentsPageLoaderGlobal>
			</div>
		</div>
	)
}

export default CommentsForGamePage
