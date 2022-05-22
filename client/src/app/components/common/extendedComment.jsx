import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Components
import CommentActivityPanel from "../common/commentActivityPanel"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"
import getDateInStringFormat from "../../utils/getDateInStringFormat"

const ExtendedComment = ({ avatar, nickName, rank, hisComments, hisReviews, status, date, funnyStatus, awards, consonants, sucks, likes, dislikes, hisDiscussions, userId, disagree, text:textComment, onClickReaction, _id, classesParent, isDiscussionSection }) => {
	// STATE
	const [heightComment, setHeightComment] = useState(null)
	const [isShowComment, setShowComment] = useState(false)
	const [configStylesContainerComment, setConfigStylesContainerComment] = useState({ height: "auto" })
	// AUXILIARY
	const MAX_HEIGHT_COMMENT = 230
	const commentText = useRef(null)
	const { title, color } = configAuxiliary.ranks[rank._id]
	const { text, icon } = configAuxiliary.statusNewComment.find(item => item.value === status)
	const elementsStatistics = [
		{value: getDateInStringFormat(date), class: "date", text: "Опубликовано: "},
		{value: funnyStatus.length, class: "funny", text: "Признали смешным: " },
		{value: awards.length, class: "awards", text: "Наград: "},
		{value: consonants.length, class: "consonants", text: "Пользователей согласились: "},
		{value: disagree.length, class: "disagree", text: "Не согласились: "}
	]
	const elementsWithIcons = [
		{
			icon: <img title="Иконка символизирующая полный bullshit" className="extended-comment__poo" src="/images/icons/poo2.svg" alt="Иконка какашки с глазами" />,
			text: "Посчитали полным отстоем:",
			value: sucks.length,
			class: "sucks"
		},
		{
			icon: <img title="Иконка палец вверх!" className="extended-comment__like" src="/images/icons/heartRead.svg" alt="Иконка сердца в красном круге" />,
			text: "Лайков:",
			value: likes.length,
			class: "like-block"
		},
		{
			icon: <img title="Палец вниз, дизлайк" className="extended-comment__dislike" src="/images/icons/dislikeRead.svg" alt={`Иконка "Дизлайк" в красном круге`} />,
			text: "Дизлайков:",
			value: dislikes.length,
			class: "dislike-block"
		}
	]
	// HANDLERS
	const handlerClickBtnMore = () => setShowComment(true)
	useEffect(() => {
		setHeightComment(commentText.current.offsetHeight)
	}, [])
	useEffect(() => {
		if (heightComment > MAX_HEIGHT_COMMENT) setConfigStylesContainerComment({ height: `${MAX_HEIGHT_COMMENT}px` })
	}, [heightComment])
	useEffect(() => {
		if (isShowComment) setConfigStylesContainerComment({ height: `${heightComment}px` })
	}, [heightComment, isShowComment])
	return (
		<div className={`${classesParent}__comment extended-comment`}>
			<div className="extended-comment__column-comment">
				<div className="extended-comment__row-left-column">
					<div className="extended-comment__avatar-container">
						<Link to={`/profile/${userId}`}><img title={`Перейти на страницу профиля --> ${nickName}`} className="extended-comment__avatar-img" src={`/images/users/avatar/${avatar}`} alt={`Аватарка пользователя --> ${nickName}`} /></Link>
					</div>
					<div className="extended-comment__content-for-user">
						<p className="extended-comment__nickname">Оставил(-a): <Link title={`Перейти на страницу профиля --> ${nickName}`} to={`/profile/${userId}`}>{nickName}</Link></p>
						<p style={{ color }} className="extended-comment__rank">{title}</p>
						<p className="extended-comment__comments-user">Всего комментариев: <span>{hisComments.length}</span></p>
						<p className="extended-comment__reviews-user">Всего рецензий: <span>{hisReviews.length}</span></p>
					</div>
				</div>
			</div>
			<div className="extended-comment__column-comment">
				<div className="extended-comment__content-right">
					<div className="extended-comment__right-head">
						<div className="extended-comment__column-head">
							<img title={`Иконка статуса комментария: ${text}(${status})`} className="extended-comment__icon-status" src={`/images/icons/${icon}`} alt={`Иконка статуса комментария: ${icon}`} />
							<p className="extended-comment__status-text">{text}</p>
						</div>
						<Link to="/aboutUs"><img title={`Перейти на страницу "О Factory". Вы сможете познакомиться с нами поближе.`} src={`/images/icons/logoFactory.svg`} className="extended-comment__logo-icon" alt="Иконка платформы Factory.inc" /></Link>
					</div>
					<div className="extended-comment__container-basic-info">
						{elementsStatistics.map((element, index) => <p key={index} className={`extended-comment__${element.class}`}>{element.text}<span>{element.value}</span></p>)}
						{elementsWithIcons.map((item, index) => <p key={index} className={`extended-comment__${item.class}`}>{item.icon}{item.text}<span>{item.value}</span></p>)}
						<div style={configStylesContainerComment} className="extended-comment__container-text-comment">
							<p ref={commentText} className="extended-comment__text-comment">"{textComment}"</p>
						</div>
						{heightComment > MAX_HEIGHT_COMMENT && !isShowComment &&
							<div className="extended-comment__container-btn">
								<button title="Нажмите на кнопку, чтобы полностью развернуть комментарий пользователя" onClick={handlerClickBtnMore} className="extended-comment__more-btn" type="button">Подробнее</button>
							</div>
						}
						<CommentActivityPanel idComment={_id} onClickReaction={onClickReaction} parentClass="extended-comment" />
					</div>
					{isDiscussionSection &&
						<div className="extended-comment__his-discussions-container container-his-discussions">
							<p className="container-his-discussions__text">Ответы этому комментарию:</p>
							<Link title="Нажмите на эту ссылку, чтобы подробно ознакомиться с этим комментарием и ответить автору." className="container-his-discussions__link" to={`/comment/${_id}`}>
								<img src="/images/icons/discussion.svg" alt="Иконка сообщения, на котором пишет карандаш" />
								<span>{hisDiscussions.length}</span>
							</Link>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

ExtendedComment.defaultProps = {
	isDiscussionSection: false
}

ExtendedComment.propTypes = {
	avatar: PropTypes.string.isRequired,
	nickName: PropTypes.string.isRequired,
	rank: PropTypes.object.isRequired,
	hisComments: PropTypes.array.isRequired,
	hisReviews: PropTypes.array.isRequired,
	status: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	funnyStatus: PropTypes.array.isRequired,
	awards: PropTypes.array.isRequired,
	consonants: PropTypes.array.isRequired,
	disagree: PropTypes.array.isRequired,
	sucks: PropTypes.array.isRequired,
	likes: PropTypes.array.isRequired,
	dislikes: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onClickReaction: PropTypes.func.isRequired,
	_id: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired,
	hisDiscussions: PropTypes.array.isRequired,
	isDiscussionSection: PropTypes.bool.isRequired
}

export default ExtendedComment
