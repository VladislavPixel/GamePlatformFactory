import React from "react"
import PropTypes from "prop-types"

const CommentCardSliderComments = ({ dataArray }) => {
	console.log(dataArray, "DATA ARRAY")
	return (
		<div className="comments-slider-block__comment-item item-comment-comments-slider">
			<div className="item-comment-comments-slider__wrapper">
				<div className="item-comment-comments-slider__sub-comments-block">
					{dataArray.length > 0 ? 
						dataArray.map(comment => <div key={comment._id}></div>):
						<div className="item-comment-comments-slider__info">
							<p>У данной игры на текущий момент нет комментариев. Оставьте свой, помогите сообществу. Будьте первым.</p>
							<button type="button">Комментарий</button>
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
