import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// Components
import ChatRules from "../common/chatRules"
// Auxiliary
import { getIdCommentForCommentPage, getDataForCommentPage } from "../../store/comment"

const GameBlockForCommentPage = () => {
	// REDUX
	const idComment = useSelector(getIdCommentForCommentPage())
	const data = useSelector(getDataForCommentPage())
	return (
		<div className="blocks-comment__column">
			<div className="blocks-comment__game-container">
				<div className="blocks-comment__img-game-container">
					<Link title={idComment ? `Перейти на страницу игры: ${data.gameData.title}` : "Перейти в магазин Factory.inc"} to={idComment ? `/game/${data.gameData._id}` : "/store"}>
						<img className="blocks-comment__game-img" alt={idComment ? `Постер игры: ${data.gameData.title}` : "Инопланетный монстр смотрит на девочку"} src={"/images/" + (idComment ? `storeGamesMiddle/${data.gameData.imageMiddle}` : "monstr.jpg")} />
					</Link>
				</div>
				<div className="blocks-comment__sub-img">
					<div className="blocks-comment__link">
						<img className="blocks-comment__basket" src="/images/icons/basket.svg" alt="Иконка корзины-тележки" />
						<Link title={idComment ? `Перейти на страницу игры: ${data.gameData.title}` : "Перейти в магазин Factory.inc"} to={idComment ? `/game/${data.gameData._id}` : "/store"}>{idComment ? "Открыть страницу продукта" : "Перейти в магазин"}</Link>
					</div>
					<p className="blocks-comment__message">{idComment ? "Поддержите беседу, отреагируйте на комментарий пользователя платформы Factory.inc. Бывает, люди здесь находят себе друзей) Как правило беседа получается увлекательной и оригинальной. У нас самое лучшее community <3" : "Кажется такого комментарий еще нет на нашей платформе. Возможно что-то пошло не так, для проверки попробуйте обновить страницу. Если Вы все еще видите эту страницу, перейдите по ссылкам в наш магазин."}</p>
				</div>
				<ChatRules classesParent="blocks-comment" />
			</div>
		</div>
	)
}

export default GameBlockForCommentPage
