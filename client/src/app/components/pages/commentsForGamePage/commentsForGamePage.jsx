import React from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"

// Auxiliary
import { getDataTitleGameById } from "../../../store/games"

const CommentsForGamePage = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const titleGame = useSelector(getDataTitleGameById(idGame))
	return (
		<div className="block-content__commentsForGame comments-game-block">
			<div className="comments-game-block__container _container">
				<div className="comments-game-block__head">
					<h1 className="comments-game-block__title-game">{titleGame}</h1>
					<Link className="comments-game-block__link" title="При нажатии Вы перейдете на страницу этой игры, где будут представлены расширенные данные по ней." to={`/game/${idGame}`}>Перейти на страницу игры</Link>
				</div>
			</div>
		</div>
	)
}

export default CommentsForGamePage
