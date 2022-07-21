import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// Auxiliary
import { getIdCommentForCommentPage, getDataForCommentPage } from "../../store/comment"

const HeadUserInfo = () => {
	// REDUX
	const idComment = useSelector(getIdCommentForCommentPage())
	const data = useSelector(getDataForCommentPage())
	// AUXILIARY
	const colorSubText = idComment ? data.authorData.rank.color : "#8AF9AD"
	return (
		<div className="comment-wrapper__head-user user-head-comment">
			<div className="user-head-comment__row">
				<div className="user-head-comment__img-wrap">
					{idComment ? 
						<Link title="Нажмите для перехода на страницу пользователя" to={`/profile/${data.authorData._id}`}><img src={`/images/users/avatar/${data.authorData.avatar}`} alt={`Аватар пользователя: ${data.authorData.avatar}`} className="user-head-comment__avatar" /></Link> :
						<img className="user-head-comment__avatar" alt="Аватар несуществующего пользователя" src="/images/users/notAvatar.jpg" />
					}
				</div>
				<div className="user-head-comment__info">
					<div className="user-head-comment__left-element">
						<p className="user-head-comment__text">{idComment ? <Link title="Нажмите для перехода на страницу пользователя" to={`/profile/${data.authorData._id}`}>{data.authorData.nickName}</Link> : "Пользователь не найден..."}</p>
						<p style={{ color: colorSubText }} className="user-head-comment__sub-text">{idComment ? data.authorData.rank.title : "- / -"}</p>
					</div>
					<Link title="Перейти на страницу о платформе Factory.inc" to="/aboutUs"><img className="user-head-comment__icon" alt="Логотип платформы Factory.inc" src="/images/icons/logoFactory.svg" /></Link>
				</div>
			</div>
		</div>
	)
}

export default HeadUserInfo
