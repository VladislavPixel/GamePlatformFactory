import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// Components
import ActivityMenuForGamePage from "../../ui/activityMenuForGamePage"
// Auxiliary
import { getDataGameById } from "../../../store/gamePage"
import { getDataGameMiddleById  } from "../../../store/games"

const GamePage = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const game = useSelector(getDataGameById(idGame))
	const gameMiddleData = useSelector(getDataGameMiddleById(idGame))

	console.log(game, "ДАННЫЕ ПО ИГРЕ ДЛЯ СТРАНИЦЫ")
	return (
		<div className="block-content__game game-block">
			<div className="game-block__head-container container-head-game-block">
				<img className="container-head-game-block__poster" src={`/images/gamePage/posters/${game.poster}`} alt={game.posterAlt} />
				<div className="container-head-game-block__publisher">
					Ссылка на издателя:
					<a href={game.linkPublisher} target="_blank" className="container-head-game-block__publish-link">{game.linkPublisher}</a>
				</div>
				<ActivityMenuForGamePage {...gameMiddleData} {...game} />
			</div>
		</div>
	)
}

export default GamePage
