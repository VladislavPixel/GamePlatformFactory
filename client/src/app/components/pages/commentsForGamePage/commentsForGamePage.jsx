import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

// Components
import CommentsPageGameHead from "../../ui/commentsPageGameHead"
import PanelFiltersForCommentsPage from "../../ui/panelFiltersForCommentsPage"
import CommentsForCommentsPageLoaderGlobal from "../../HOC/commentsForCommentsPageLoaderGlobal"
import CommentsListForCommentsPage from "../../ui/commentsListForCommentsPage"
// Auxiliary
import { fetchDataCommentsForCommentsPage } from "../../../store/commentsForCommentsPage"

const CommentsForGamePage = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const dispatch = useDispatch()
	// STATE
	const [timeFilter, setTimeFilter] = useState({ _id: "tf1", key: "allTime", columnKey: "timeFilter" })
	const [indicatorFilter, setIndicatorFilter] = useState({ _id: "if5", key: "consonants", columnKey: "indicatorFilter" })
	const [statusFilter, setStatusFilter] = useState(null)
	// HANDLERS
	const handlerFetchCommentsByConfigFilters = (newData) => {
		const submitData = {
			timeFilter,
			indicatorFilter,
			statusFilter,
			[(newData ? newData.columnKey: "statusFilter")]: newData
		}

		dispatch(fetchDataCommentsForCommentsPage(submitData, "first", 1, idGame))
	}
	const handlerUpdateFilter = (newState) => {
		let correctElement = {...newState}
		delete correctElement.title
		switch(correctElement.columnKey) {
			case "timeFilter":
				setTimeFilter(correctElement)
			break
			case "indicatorFilter":
				setIndicatorFilter(correctElement)
			break
			case "statusFilter":
				if (!statusFilter || correctElement._id !== statusFilter._id) {
					setStatusFilter(correctElement)
				} else {
					correctElement = null
					setStatusFilter(correctElement)
				}
			break
			default:
			break
		}
		handlerFetchCommentsByConfigFilters(correctElement)
	}
	return (
		<div className="block-content__comments-for-game comments-page-game-block">
			<div className="comments-page-game-block__container _container">
				<CommentsPageGameHead />
				<PanelFiltersForCommentsPage selectedTimeFilter={timeFilter} selectedIndicatorFilter={indicatorFilter} selectedStatusFilter={statusFilter} onUpdateFilter={handlerUpdateFilter} />
				<CommentsForCommentsPageLoaderGlobal>
					<CommentsListForCommentsPage configRequest={{ timeFilter, indicatorFilter, statusFilter }} />
				</CommentsForCommentsPageLoaderGlobal>
			</div>
		</div>
	)
}

export default CommentsForGamePage
