import React from "react"
import PropTypes from "prop-types"

// Components
import SlideCommentCardSliderComments from "./slideCommentCardSliderComments"

const CommentCardSliderComments = ({ dataArray }) => {
	return (
		<div className="comments-slider-block__comment-item item-comment-comments-slider">
			<div className="item-comment-comments-slider__wrapper">
				<div className="item-comment-comments-slider__sub-comments-block block-comments-sub">
					{dataArray.length > 0 ? 
						dataArray.map(comment => <SlideCommentCardSliderComments key={comment._id} {...comment} />):
						<div className="item-comment-comments-slider__info">
							<p>У данной игры на текущий момент нет комментариев. Оставьте свой, помогите сообществу. <span>Будьте первым!</span></p>
							<button className="item-comment-comments-slider__btn-comment-page" type="button">Комментарий</button>
						</div>
					}
				</div>
				Контроллер
			</div>
		</div>
	)
}

CommentCardSliderComments.propTypes = {
	dataArray: PropTypes.array.isRequired
}

export default CommentCardSliderComments
