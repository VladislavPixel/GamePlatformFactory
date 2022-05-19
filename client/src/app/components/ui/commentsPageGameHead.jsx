import React from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"

// Auxiliary
import { getDataTitleGameById } from "../../store/games"

const CommentsPageGameHead = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const titleGame = useSelector(getDataTitleGameById(idGame))
	return (
		<div className="comments-page-game-block__head">
			<img className="comments-page-game-block__icon-communication" src="/images/icons/communication.svg" alt="Иконка символизирующая общение пользователей" />
			<h1 className="comments-page-game-block__title-game">{titleGame}</h1>
			<Link className="comments-page-game-block__link" title="При нажатии Вы перейдете на страницу этой игры, где будут представлены расширенные данные по ней." to={`/game/${idGame}`}>Перейти на страницу игры</Link>
		</div>
	)
}

export default CommentsPageGameHead
