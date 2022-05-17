import React from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"

// Auxiliary
import { getDataCommentsForTheLastWeek } from "../../store/commentsForGamePage"
// Components
import withMessage from "../HOC/withMessage"
import LiteMessage from "../common/liteMessage"
import CommentLastWeek from "./commentLastWeek"

const CommentsLastWeekList = ({ onClickReaction }) => {
	// REDUX
	const dataComments = useSelector(getDataCommentsForTheLastWeek())
	// AUXILIARY
	const correctLengthValue = dataComments === null ? 0 : dataComments.length
	const ELEMENT = <div className="comments-container__last-week-list block-last-week">
			{dataComments.map(comment => <CommentLastWeek onClickReaction={onClickReaction} key={comment._id} {...comment} />)}
		</div>
	const ComponentWithMessage = withMessage(ELEMENT, <LiteMessage iconPath="sadIcon.svg" altIcon="Грустный смайлик" classes="comments-container__message-last-week" title="У этой игры нет комментариев за последнюю неделю." offer="Оставьте свой, будьте первым)" />, correctLengthValue)
	return <ComponentWithMessage />
}

CommentsLastWeekList.propTypes = {
	onClickReaction: PropTypes.func.isRequired
}

export default CommentsLastWeekList
