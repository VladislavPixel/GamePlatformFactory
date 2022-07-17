import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import activityComment from "../../configAuxiliary/activityComment.json"

const CommentActivityPanel = ({ parentClass, onClickReaction, idComment }) => {
	return (
		<div className={`${parentClass}__activity block-activity-comment`}>
			{Object.keys(activityComment).map((key, index) => {
				return (
					<div key={index} className="block-activity-comment__line">
						{activityComment[key].map(item => {
							const { _id, title, icon, titleBtn } = item
							return (
								<button title={titleBtn} onClick={() => onClickReaction(item, idComment)} className="block-activity-comment__reaction" key={_id} type="button">
									<img className="block-activity-comment__icon-reaction" src={`/images/icons/${icon}`} title="Иконка реакции" alt="Иконка реакции на комментарий" />
									{title}
								</button>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

CommentActivityPanel.propTypes = {
	parentClass: PropTypes.string.isRequired,
	onClickReaction: PropTypes.func.isRequired,
	idComment: PropTypes.string.isRequired
}

export default CommentActivityPanel
