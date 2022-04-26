import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// Auxiliary
import { getDataGameById } from "../../../store/gamePage"

const GamePage = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const game = useSelector(getDataGameById(idGame))

	console.log(game, "ДАННЫЕ ПО ИГРЕ ДЛЯ СТРАНИЦЫ")
	return (
		<div className="block-content__game game-block">

		</div>
	)
}

export default GamePage
