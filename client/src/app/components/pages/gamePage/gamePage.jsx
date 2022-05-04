import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// Components
import ActivityMenuForGamePage from "../../ui/activityMenuForGamePage"
import GamePageSliderHeadController from "../../ui/gamePageSliderHeadController"
import GamePageAbout from "../../ui/gamePageAbout"
// Auxiliary
import { getDataGameById } from "../../../store/gamePage"
import { getDataGameMiddleById  } from "../../../store/games"

const GamePage = () => {
	// AUXILIARY
	const { idGame } = useParams()
	// REDUX
	const game = useSelector(getDataGameById(idGame))
	const gameMiddleData = useSelector(getDataGameMiddleById(idGame))
	// STATE
	const [configPoster, setConfigPoster] = useState({})
	// HANDLERS
	const handlerUpdatePoster = (newPoster) => {
		if (configPoster.path === newPoster.path) {
			setConfigPoster({})
			return
		}
		setConfigPoster(newPoster)
	}
	return (
		<div className="block-content__game game-block">
			<div className="game-block__head-container container-head-game-block">
				{configPoster.path && <button onClick={() => handlerUpdatePoster(configPoster)} type="button" className="container-head-game-block__reset-poster">Вернуть базовый постер</button>}
				<img className="container-head-game-block__poster" src={`/images/gamePage/${configPoster.path === undefined ? "posters/" + game.poster : "slidesHead/" + configPoster.path}`} alt={configPoster.path === undefined ? game.posterAlt : configPoster.alt} />
				<div className="container-head-game-block__publisher">
					Ссылка на издателя:
					<a href={game.linkPublisher} target="_blank" className="container-head-game-block__publish-link">{game.linkPublisher}</a>
				</div>
				<ActivityMenuForGamePage {...gameMiddleData} {...game} />
			</div>
			<GamePageSliderHeadController currentConfig={configPoster} arrHeadData={game.slidersHead} onUpdatePoster={handlerUpdatePoster} />
			<GamePageAbout {...game.aboutTheGame} />
		</div>
	)
}

export default GamePage
