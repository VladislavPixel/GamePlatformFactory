import React from "react"
import PropTypes from "prop-types"

// Components
import CommentActivityPanel from "./commentActivityPanel"
// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const BigComment = ({ user, comment, classesParent }) => {
	const { hisReviews, hisComments } = user
	const { status, text, date, funnyStatus, awards, consonants, disagree, sucks, likes, dislikes, hisDiscussions } = comment
	const { text:textStatus, icon } = configAuxiliary.statusNewComment.find(item => item.value === status)
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
			</div>
			<CommentActivityPanel />
		</div>
	)
}

BigComment.propTypes = {
	user: PropTypes.object.isRequired,
	comment: PropTypes.object.isRequired,
	classesParent: PropTypes.string.isRequired
}

export default BigComment
