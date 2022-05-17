import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const CommentMainWall = ({ avatar, nickName, rank, hisComments, hisReviews, status, date, funnyStatus, awards, consonants, sucks, likes, dislikes, userId }) => {
	console.log(rank)
	const { title, color } = configAuxiliary.ranks[rank._id]
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
			<div className="block-main-wall__column-comment"></div>
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
	userId: PropTypes.string.isRequired
}

export default CommentMainWall
