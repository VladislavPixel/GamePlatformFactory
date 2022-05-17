import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Components
import CommentActivityPanel from "../common/commentActivityPanel"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"
import getDateInStringFormat from "../../utils/getDateInStringFormat"

const CommentMainWall = ({ avatar, nickName, rank, hisComments, hisReviews, status, date, funnyStatus, awards, consonants, sucks, likes, dislikes, userId, disagree, text:textComment }) => {
	// AUXILIARY
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
			icon: <img className="block-main-wall__poo" src="/images/icons/poo2.svg" alt="Иконка какашки с глазами" />,
			text: "Посчитали полным отстоем:",
			value: sucks.length,
			class: "sucks"
		},
		{
			icon: <img className="block-main-wall__like" src="/images/icons/heartRead.svg" alt="Иконка сердца в красном круге" />,
			text: "Лайков:",
			value: likes.length,
			class: "like-block"
		},
		{
			icon: <img className="block-main-wall__dislike" src="/images/icons/dislikeRead.svg" alt={`Иконка "Дизлайк" в красном круге`} />,
			text: "Дизлайков:",
			value: dislikes.length,
			class: "dislike-block"
		}
	]
	return (
		<div className="block-main-wall__comment">
			<div className="block-main-wall__column-comment">
				<div className="block-main-wall__row-left-column">
					<div className="block-main-wall__avatar-container">
						<Link to={`/profile/${userId}`}><img title={`Перейти на страницу профиля --> ${nickName}`} className="block-main-wall__avatar-img" src={`/images/users/avatar/${avatar}`} alt={`Аватарка пользователя --> ${nickName}`} /></Link>
					</div>
					<div className="block-main-wall__content-for-user">
						<p className="block-main-wall__nickname">Оставил(-a): <Link title={`Перейти на страницу профиля --> ${nickName}`} to={`/profile/${userId}`}>{nickName}</Link></p>
						<p style={{ color }} className="block-main-wall__rank">{title}</p>
						<p className="block-main-wall__comments-user">Всего комментариев: <span>{hisComments.length}</span></p>
						<p className="block-main-wall__reviews-user">Всего рецензий: <span>{hisReviews.length}</span></p>
					</div>
				</div>
			</div>
			<div className="block-main-wall__column-comment">
				<div className="block-main-wall__content-right">
					<div className="block-main-wall__right-head">
						<div className="block-main-wall__column-head">
							<img className="block-main-wall__icon-status" src={`/images/icons/${icon}`} alt={`Иконка статуса комментария: ${icon}`} />
							<p className="block-main-wall__status-text">{text}</p>
						</div>
						<Link to="/aboutUs"><img title={`Перейти на страницу "О Factory". Вы сможете познакомиться с нами поближе.`} src={`/images/icons/logoFactory.svg`} className="block-main-wall__logo-icon" alt="Иконка платформы Factory.inc" /></Link>
					</div>
					{elementsStatistics.map((element, index) => <p key={index} className={`block-main-wall__${element.class}`}>{element.text}<span>{element.value}</span></p>)}
					{elementsWithIcons.map((item, index) => <p key={index} className={`block-main-wall__${item.class}`}>{item.icon}{item.text}<span>{item.value}</span></p>)}
					<div className="block-main-wall__container-text-comment">
						<p className="block-main-wall__text-comment">"{textComment}"</p>
					</div>
					<CommentActivityPanel parentClass="block-main-wall" />
				</div>
			</div>
		</div>
	)
}

CommentMainWall.propTypes = {
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
	text: PropTypes.string.isRequired
}

export default CommentMainWall
