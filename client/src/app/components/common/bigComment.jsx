import React from "react"
import PropTypes from "prop-types"

// Components
import CommentActivityPanel from "./commentActivityPanel"
import AddComment from "./addComment"
import DiscussionsBlock from "./discussionsBlock"
import withMessage from "../HOC/withMessage"
import MiddleMessage from "./middleMessage"
// Auxiliary
import statusNewComment from "../../configAuxiliary/statusNewComment.json"
import dynamicStatisticsForComment from "../../utils/dynamicStructures"

const BigComment = ({ user, comment, classesParent }) => {
	// AUXILIARY
	const { hisReviews, hisComments } = user
	const { status, text, date, funnyStatus, awards, consonants, disagree, sucks, likes, dislikes, hisDiscussions, _id } = comment
	const { text:textStatus, icon } = statusNewComment.find(item => item.value === status)
	const elementsStatistics = dynamicStatisticsForComment.getStructureForStatistics(date, funnyStatus.length, awards.length, consonants.length, disagree.length)
	const elementsWithIcons = dynamicStatisticsForComment.getStructureWithIcons(sucks.length, likes.length, dislikes.length, "big-comment-container")
	// HANDLERS
	const handlerClickMiddleMessage = () => {
		console.log("Клик, таргет на форму добавления комментария")
	}
	const handlerClickReaction = (data) => {
		console.log(`Ваша реакция на комментарий:`, data)
	}
	const DiscussionsBlockWithMessage = withMessage(
		<DiscussionsBlock classesParent="comment-big" />,
		<MiddleMessage altIcon="Довольный смайлик" iconPath="smile.svg" onCallback={handlerClickMiddleMessage} classesParent="comment-big" title="У этого комментария на данный момент нет дискуссий" offer="Вы можете быть первым) Напишите что-нибудь автору данного комментария" textBtn="Написать" />,
		hisDiscussions.length
	)
	return (
		<div className={`${classesParent}big-comment comment-big`}>
			<div className="comment-big__statistics-author">
				<h4 className="comment-big__title-author">Немного статистики об авторе</h4>
				<p className="comment-big__comments-statistics">На данной платформе оставил(-а) комментариев - <span>{hisComments.length}</span></p>
				<p className="comment-big__reviews-statistics">Рецензий за все время на платформе Factory.inc - <span>{hisReviews.length}</span></p>
			</div>
			<div className="comment-big__container-comment-big big-comment-container">
				<div className="big-comment-container__status-block">
					<p className="big-comment-container__text-status">Автор указал такой посыл своего комментария:</p>
					<div className="big-comment-container__status-wrap">
						<img className="big-comment-container__icon-image" title={`Иконка символизирует статус комментария (автор указал --> ${textStatus})`} src={`/images/icons/${icon}`} alt={`Иконка статуса комментария: ${textStatus}`} />
						<p className="big-comment-container__status-name">{textStatus}</p>
					</div>
				</div>
				<div className="big-comment-container__container-basic-info">
					{elementsStatistics.map((element, index) => <p key={index} className={`big-comment-container__${element.class}`}>{element.text}<span>{element.value}</span></p>)}
					{elementsWithIcons.map((item, index) => <p key={index} className={`big-comment-container__${item.class}`}>{item.icon}{item.text}<span>{item.value}</span></p>)}
				</div>
				<div className="big-comment-container__text-block">
					<h4 className="big-comment-container__title-message">Содержимое комментария:</h4>
					<p className="big-comment-container__message-comment">"{text}"</p>
				</div>
			</div>
			<CommentActivityPanel idComment={_id} onClickReaction={handlerClickReaction} parentClass="comment-big" />
			<AddComment parentClass="comment-big" isStatus={false} idCommentTarget={_id} />
			<DiscussionsBlockWithMessage />
		</div>
	)
}

BigComment.propTypes = {
	user: PropTypes.object,
	comment: PropTypes.object,
	classesParent: PropTypes.string.isRequired
}

export default BigComment
