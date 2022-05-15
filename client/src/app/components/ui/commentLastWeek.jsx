import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"
import getDateInStringFormat from "../../utils/getDateInStringFormat"
// Components
import CommentActivityPanel from "../common/commentActivityPanel"

const CommentLastWeek = ({ status, date, nickName, rank, userId, text:textComment, onClickReaction }) => {
	const { text, icon } = configAuxiliary.statusNewComment.find(item => item.value === status)
	return (
		<div className="block-last-week__comment">
			<div className="block-last-week__head">
				<div className="block-last-week__status">
					<img title="Иконка символизирующая посыл комментария пользователя" className="block-last-week__icon" src={`/images/icons/${icon}`} alt={`Иконка статуса --> ${text}`} />
					<p className="block-last-week__text-status">{text}</p>
				</div>
				<p className="block-last-week__date">{getDateInStringFormat(date)}</p>
				<img title="Логотип платформы Factory.inc" className="block-last-week__logo-factory" src="/images/icons/logoFactory.svg" alt="Иконка платформы - Factory.inc" />
			</div>
			<div className="block-last-week__content">
				<p className="block-last-week__nickname">Оставил: <Link to={`/profile/${userId}`}>{nickName}</Link></p>
				<p style={{ color: configAuxiliary.ranks[rank._id].color }} className="block-last-week__rank-user">{rank.title}</p>
				<p className="block-last-week__text-comment">"{textComment}"</p>
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
