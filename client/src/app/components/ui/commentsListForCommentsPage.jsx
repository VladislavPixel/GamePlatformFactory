import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

// Auxiliary
import { getAllDataComments } from "../../store/commentsForCommentsPage"
// Components
import withMessage from "../HOC/withMessage"
import MiddleMessage from "../common/middleMessage"
import ExtendedComment from "../common/extendedComment"

const CommentsListForCommentsPage = ({ startGroupIndex, endGroupIndex }) => {
	// REDUX
	const bundleComments = useSelector(getAllDataComments())
	const arrGroups = Object.keys(bundleComments)
	// HANDLERS
	function handlerBtnCommentGame() {
		navigate(`/game/${idGame}`)
	}
	function handlerClickReaction(reaction) {
		console.log(reaction)
	}
	// AUXILIARY
	let arrElementsForLine = []
	let auxArrForElements = null
	const { idGame } = useParams()
	const navigate = useNavigate()
	const ELEMENT = <React.Fragment>
		<div className="comments-page-game-block__trigger-block-top"></div>
		<div className="comments-page-game-block__list list-comments-page">
			{arrGroups.map(keyBundle => {
				return (
					<div className="list-comments-page__block-comments" key={keyBundle}>
						{bundleComments[keyBundle].map((comment, index) => {
							if ((index + 1) % 3 === 0) return <ExtendedComment classesParent="list-comments-page" isDiscussionSection={true} onClickReaction={handlerClickReaction} key={comment._id} {...comment} />
							arrElementsForLine.push(comment)
							if (arrElementsForLine.length === 2 || index === bundleComments[keyBundle].length - 1) {
								auxArrForElements = arrElementsForLine
								arrElementsForLine = []
								return (
									<div key={index} className="list-comments-page__line-comment">
										{auxArrForElements.map(item => <ExtendedComment classesParent="list-comments-page" isDiscussionSection={true} onClickReaction={handlerClickReaction} key={item._id} {...item} />)}
									</div>
								)
							}
							return null
						})}
					</div>
				)
			})}
		</div>
		<div className="comments-page-game-block__trigger-block-bottom"></div>
	</React.Fragment>
	const ElementWithMessage = withMessage(ELEMENT, <MiddleMessage classesParent="comments-page-game-block" title="По указанным фильтрам комментарии не были найдены." offer="Попробуйте поменять условия фильтрации, если Вы все еще продолжаете видеть это сообщение, значит у игры нет обзоров от пользователей. Вы можете оставить свой, если перейдете по ссылке внизу." textBtn="Комментировать" onCallback={handlerBtnCommentGame} iconPath="sadIcon2.svg" />, arrGroups.length)
	return (
		<div className="comments-page-game-block__list-container">
			<ElementWithMessage />
		</div>
	)
}

CommentsListForCommentsPage.propTypes = {
	startGroupIndex: PropTypes.number.isRequired,
	endGroupIndex: PropTypes.number.isRequired
}

export default React.memo(CommentsListForCommentsPage)
