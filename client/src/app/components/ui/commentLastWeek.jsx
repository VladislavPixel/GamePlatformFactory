import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"
import getDateInStringFormat from "../../utils/getDateInStringFormat"
// Components
import CommentActivityPanel from "../common/commentActivityPanel"

const CommentLastWeek = ({ status, date, nickName, rank, userId, text:textComment, onClickReaction }) => {
	// STATE
	const [isShowContainerComment, setShowContainerComment] = useState(false)
	const [heightComment, setHeightComment] = useState(null)
	const [configContainerComment, setConfigContainerComment] = useState({ height: "auto" })
	// AUXILIARY
	const MAX_HEIGHT_COMMENT = 160
	const textBlock = useRef(null)
	const { text, icon } = configAuxiliary.statusNewComment.find(item => item.value === status)
	// HANDLERS
	const handlerClickBtnMore = () => setShowContainerComment(true)
	useEffect(() => {
		setHeightComment(textBlock.current.offsetHeight)
	}, [])
	useEffect(() => {
		if (heightComment > MAX_HEIGHT_COMMENT) setConfigContainerComment({ height: `${MAX_HEIGHT_COMMENT}px` })
	}, [heightComment])
	useEffect(() => {
		if (isShowContainerComment) setConfigContainerComment({ height: `${heightComment}px` })
	}, [isShowContainerComment, heightComment])
	return (
		<div className="block-last-week__comment">
			<div className="block-last-week__head">
				<div className="block-last-week__status">
					<img title="Иконка символизирующая посыл комментария пользователя" className="block-last-week__icon" src={`/images/icons/${icon}`} alt={`Иконка статуса --> ${text}`} />
					<p className="block-last-week__text-status">{text}</p>
				</div>
				<p className="block-last-week__date">{getDateInStringFormat(date)}</p>
				<Link to="/aboutUs"><img title={`Перейти на страницу "О Factory". Вы сможете познакомиться с нами поближе.`} className="block-last-week__logo-factory" src="/images/icons/logoFactory.svg" alt="Иконка платформы - Factory.inc" /></Link>
			</div>
			<div className="block-last-week__content">
				<p className="block-last-week__nickname">Оставил(-a): <Link title={`Перейти на страницу профиля --> ${nickName}`} to={`/profile/${userId}`}>{nickName}</Link></p>
				<p style={{ color: configAuxiliary.ranks[rank._id].color }} className="block-last-week__rank-user">{rank.title}</p>
				<div style={configContainerComment} className="block-last-week__container-text-comment">
					<p ref={textBlock} className="block-last-week__text-comment">"{textComment}"</p>
				</div>
				{(heightComment > MAX_HEIGHT_COMMENT && !isShowContainerComment) && <div className="block-last-week__container-more-btn"><button onClick={handlerClickBtnMore} className="block-last-week__more-comment" type="button">Подробнее</button></div>}
			</div>
			<CommentActivityPanel onClickReaction={onClickReaction} parentClass="block-last-week" />
		</div>
	)
}

CommentLastWeek.propTypes = {
	status: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	nickName: PropTypes.string.isRequired,
	rank: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onClickReaction: PropTypes.func.isRequired
}

export default CommentLastWeek
