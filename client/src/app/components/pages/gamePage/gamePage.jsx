import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

// Components
import ActivityMenuForGamePage from "../../ui/activityMenuForGamePage"
import GamePageSliderHeadController from "../../ui/gamePageSliderHeadController"
import GamePageAbout from "../../ui/gamePageAbout"
import GamePageBlocks from "../../ui/gamePageBlocks"
import GamePageSystemRequirements from "../../ui/gamePageSystemRequirements"
import GamePageComments from "../../ui/gamePageComments"
import MiddleMessage from "../../common/middleMessage"
// Auxiliary
import { getDataGameById } from "../../../store/gamePage"
import { getDataGameMiddleById  } from "../../../store/games"

const GamePage = () => {
	// AUXILIARY
	const navigate = useNavigate()
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
	const handlerMiddleMessageBtn = () => navigate("/store")

	const configTextForMiddleMessage = (!gameMiddleData ?
		{
			title: "У-у-упс, что-то пошло не так...Указанная в запросе игра не найдена в библиотеке. Вы запрашиваете цифровой продукт по id, которого не существует в нашей коллекции игр.",
			offer: "Попробуйте перейти в наш магазин и ознакомьтесь с предоставленными играми. У нас есть удобный поиск и фильтрации, быстрый доступ к играм, различные рубрики, например TOP-5, Диапазоны, Комментарии пользователей, Авторитеты рекомендуют и др.",
			btnText: "Воспользоваться возможностями Магазина"
		} : 
		{
			title: "У-у-упс, что-то пошло не так...Указанная в запросе игра действительно есть в нашей библиотеке, но видимо разработчик / издатель не предоставил ее расширенные данные.",
			offer: "Вы можете произвести быструю покупку / сделку через наш магазин + кошелек, но получить дополнительную информацию по игре у Вас не выйдет, т.к. издатель / разработчик пока медлит с предоставлением данных.",
			btnText: "Перейти в Магазин Factory.inc"
		}
	)
	return (
		<div className="block-content__game game-block">
			{game ?
				<React.Fragment>
					<div className="game-block__head-container container-head-game-block">
						<div className="container-head-game-block__column container-head-game-block__column_left">
							<div className="container-head-game-block__publisher">
								Ссылка на издателя:
								<a href={game.linkPublisher} title="Нажмите на ссылку, чтобы перейти на страницу издателя" target="_blank" rel="noreferrer" className="container-head-game-block__publish-link">Pablish - game</a>
							</div>
						</div>
						<div className="container-head-game-block__column container-head-game-block__column_rigth">
							<ActivityMenuForGamePage {...gameMiddleData} {...game} />
						</div>
						{configPoster.path && <button title="Нажмите, чтобы вернуть постер, который был изначально" onClick={() => handlerUpdatePoster(configPoster)} type="button" className="container-head-game-block__reset-poster">Вернуть базовый постер</button>}
						<img className="container-head-game-block__poster" src={`/images/gamePage/${configPoster.path === undefined ? "posters/" + game.poster : "slidesHead/" + configPoster.path}`} alt={configPoster.path === undefined ? game.posterAlt : configPoster.alt} />
					</div>
					<GamePageSliderHeadController currentConfig={configPoster} arrHeadData={game.slidersHead} onUpdatePoster={handlerUpdatePoster} />
					<GamePageAbout {...game.aboutTheGame} />
					<GamePageBlocks {...game.atmosphere} />
					<GamePageSystemRequirements data={game.systemRequirements} />
					<GamePageComments title="Комментарии пользователей нашей платформы" />
				</React.Fragment> :
				<MiddleMessage altIcon="Гриб от ядерного взрыва" iconPath="explosion.svg" onCallback={handlerMiddleMessageBtn} classesParent="game-block" title={configTextForMiddleMessage.title} offer={configTextForMiddleMessage.offer} textBtn={configTextForMiddleMessage.btnText} />
			}
		</div>
	)
}

export default GamePage
