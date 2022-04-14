import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataUserForCommentById } from "../../store/commentsGamesStoreSlider"

const SlideCommentCardSliderComments = ({ userId, date, text }) => {
	const userForSlide = useSelector(getDataUserForCommentById(userId))
	console.log(userForSlide)
	return (
		<div className="block-comments-sub__slide">

		</div>
	)
}

SlideCommentCardSliderComments.propTypes = {
	userId: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default SlideCommentCardSliderComments
