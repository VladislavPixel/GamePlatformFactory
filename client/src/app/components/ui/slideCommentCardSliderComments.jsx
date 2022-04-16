import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataUserForCommentById } from "../../store/commentsGamesStoreSlider"

const SlideCommentCardSliderComments = ({ userId, date, text }) => {
	// Redux
	const { avatar, nickName } = useSelector(getDataUserForCommentById(userId))
	// State
	const [stylessTextBlockComment, setStylessTextBlockComment] = useState({})
	const [heightBlockSlide, setHeightBlockSlide] = useState(null) // Максимально допустимая высота
	const [heightBlockDate, setHeightBlockDate] = useState(null)
	const [heightBlockTextComment, setHeightBlockTextComment] = useState(null)
	const [heightProfile, setHeightProfile] = useState(null)
	// Auxiliary
	const blockSlide = useRef(null)
	const blockDate = useRef(null)
	const blockTextComment = useRef(null)
	const profile = useRef(null)
	// Handlers
	const handlerBtnMore = () => console.log("Перейти на страницу, где доступен полный текст комментария!")

	useEffect(() => { // При первом монтировании мы сохраняем все высоты, для правильного отображения большого комментария
		setHeightBlockSlide(blockSlide.current.offsetHeight)
		setHeightBlockDate(blockDate.current.offsetHeight)
		setHeightBlockTextComment(blockTextComment.current.offsetHeight)
		setHeightProfile(profile.current.offsetHeight)
	}, [])

	// 110 это все margin and padding блоков
	const sumAllHeightExceptText = 110 + heightBlockDate + heightProfile // Высчитываем высоту блока комментария без высоты самого текста коммента
	const sumAllHeight = heightBlockTextComment + sumAllHeightExceptText // Получаем всю высоту содержимого одной page-comment
	const difference = heightBlockSlide - sumAllHeight // Высчитываем разницу: на сколько контент превышает высоту доступного блока
	useEffect(() => {
		if (difference <= 0) {
			const valueHeight = sumAllHeight - sumAllHeightExceptText - 118 // 118 это запас на кнопку, который я закладываю
			setStylessTextBlockComment({ height: valueHeight, overflow: "hidden" })
		}
	}, [difference, sumAllHeight, sumAllHeightExceptText])
	return (
		<div ref={blockSlide} className="block-comments-sub__slide">
			<div className="block-comments-sub__content-wrap comment-content-wrap">
				<p ref={blockDate} className="comment-content-wrap__date">Дата комментария: {date}</p>
				<p ref={blockTextComment} style={stylessTextBlockComment} className="comment-content-wrap__text-comment">{`"${text}"`}</p>
				{difference <= 0 &&
					<button onClick={handlerBtnMore} className="comment-content-wrap__more-btn-text" type="button">Читать дальше</button>
				}
				<div ref={profile} className="comment-content-wrap__profile profile-comment">
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
