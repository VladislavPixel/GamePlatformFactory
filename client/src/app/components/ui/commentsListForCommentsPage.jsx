import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import PropTypes from "prop-types"

// Auxiliary
import { getAllDataComments } from "../../store/commentsForCommentsPage"
// Components
import withMessage from "../HOC/withMessage"
import MiddleMessage from "../common/middleMessage"
import FetchDataListComments from "./fetchDataListComments"

const CommentsListForCommentsPage = ({ configRequest }) => {
	const navigate = useNavigate()
	const { idGame } = useParams()
	// REDUX
	const bundleComments = useSelector(getAllDataComments())
	const arrGroups = Object.keys(bundleComments)
	// HANDLERS
	function handlerBtnCommentGame() {
		navigate(`/game/${idGame}`)
	}
	// AUXILIARY
	const ElementWithMessage = withMessage(
		<FetchDataListComments configRequest={configRequest} />,
		<MiddleMessage classesParent="comments-page-game-block" title="По указанным фильтрам комментарии не были найдены." offer="Попробуйте поменять условия фильтрации, если Вы все еще продолжаете видеть это сообщение, значит у игры нет обзоров от пользователей. Вы можете оставить свой, если перейдете по ссылке внизу." textBtn="Комментировать" onCallback={handlerBtnCommentGame} iconPath="sadIcon2.svg" />,
		arrGroups.length
	)
	return (
		<div className="comments-page-game-block__list-container">
			<ElementWithMessage />
		</div>
	)
}

CommentsListForCommentsPage.propTypes = {
	configRequest: PropTypes.object.isRequired
}

export default CommentsListForCommentsPage
