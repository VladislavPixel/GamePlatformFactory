import React from "react"
import { useSelector } from "react-redux"

// Components
import withMessage from "../HOC/withMessage"
import BigComment from "../common/bigComment"
import LiteMessage from "../common/liteMessage"
// Auxiliary
import { getIdCommentForCommentPage, getDataForCommentPage } from "../../store/comment"

const CommentBlockForCommentPage = () => {
	// REDUX
	const idComment = useSelector(getIdCommentForCommentPage())
	const data = useSelector(getDataForCommentPage())
	// AUXILIARY
	const ELEMENT = <BigComment user={data.authorData} comment={data.commentData} classesParent="blocks-comment__" />
	const ElementWithMessage = withMessage(
		ELEMENT,
		<LiteMessage iconPath="sadIcon.svg" altIcon="Грустный смайлик" classes="blocks-comment__message-not-found" title="Запрошенный комментарий не найден на нашей платформе." offer="Вы можете перейти в магазин платформы Factory.inc, найти интересующую Вас игру и ознакомиться с ее комментариями." />,
		(idComment ? 1 : 0)
	)
	return (
		<div className="blocks-comment__column">
			<ElementWithMessage />
		</div>
	)
}

export default CommentBlockForCommentPage
