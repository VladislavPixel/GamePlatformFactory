import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataUserForCommentById } from "../../store/commentsGamesStoreSlider"

const SlideCommentCardSliderComments = ({ userId, date, text }) => {
	const { avatar, nickName } = useSelector(getDataUserForCommentById(userId))
	return (
		<div className="block-comments-sub__slide">
			<div className="block-comments-sub__content-wrap comment-content-wrap">
				<p className="comment-content-wrap__date">Дата комментария: {date}</p>
				<p className="comment-content-wrap__text-comment">{`"${text}"`}</p>
				<div className="comment-content-wrap__profile profile-comment">
					<div className="profile-comment__column">
						<img src={`./images/users/avatar/${avatar}`} alt={`Аватарка профайла - ${nickName}`} />
					</div>
					<div className="profile-comment__column">
						<p className="profile-comment__nick">{nickName}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

SlideCommentCardSliderComments.propTypes = {
	userId: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default SlideCommentCardSliderComments
