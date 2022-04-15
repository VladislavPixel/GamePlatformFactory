import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

// Components
import SlideCommentCardSliderComments from "./slideCommentCardSliderComments"

const CommentCardSliderComments = ({ dataArray }) => {
	// STATE
	const [currentComment, setCurrentComment] = useState(0)
	const [widthWrapper, setWidthWrapper] = useState(null)
	const [stylesBlockComments, setStylesBlockComments] = useState({ transform: `translateX(0px)` })
	// Auxiliary
	const wrapperBlock = useRef(null)
	// Handlers
	const handlerUpdateCurrentComment = (directionTxt) => {
		if (directionTxt === "left" && currentComment !== 0) setCurrentComment(prevState => prevState - 1)
		if (directionTxt === "right" && currentComment !== dataArray.length - 1) setCurrentComment(prevState => prevState + 1)
	}

	useEffect(() => {
		setWidthWrapper(wrapperBlock.current.offsetWidth)
	}, [])
	useEffect(() => {
		setStylesBlockComments({ transform: `translateX(-${currentComment * widthWrapper}px)` })
	}, [currentComment, widthWrapper])
	return (
		<div className="comments-slider-block__comment-item item-comment-comments-slider">
			<div ref={wrapperBlock} className="item-comment-comments-slider__wrapper">
				<div style={stylesBlockComments} className="item-comment-comments-slider__sub-comments-block block-comments-sub">
					{dataArray.length > 0 ? 
						dataArray.map(comment => <SlideCommentCardSliderComments key={comment._id} {...comment} />):
						<div className="item-comment-comments-slider__info">
							<p>У данной игры на текущий момент нет комментариев. Оставьте свой, помогите сообществу. <span>Будьте первым!</span></p>
							<button className="item-comment-comments-slider__btn-comment-page" type="button">Комментарий</button>
						</div>
					}
				</div>
				{dataArray.length > 0 &&
					<div className="item-comment-comments-slider__controller-comments comments-controller">
						<button onClick={() => handlerUpdateCurrentComment("left")} className={"comments-controller__prev btn-comments-controller" + (currentComment === 0 ? " active" : "")}></button>
						<p className="comments-controller__info-page">Обзоров: {`${currentComment + 1} из ${dataArray.length}`}</p>
						<button onClick={() => handlerUpdateCurrentComment("right")} className={"comments-controller__next btn-comments-controller" + ((dataArray.length - 1) === currentComment ? " active" : "")}></button>
					</div>
				}
			</div>
		</div>
	)
}

CommentCardSliderComments.propTypes = {
	dataArray: PropTypes.array.isRequired
}

export default CommentCardSliderComments
