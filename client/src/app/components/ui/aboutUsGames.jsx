import React from "react"
import { Link } from "react-router-dom"
import configAuxiliary from "../../configAuxiliary.json"
import AboutUsGamesColumn from "./aboutUsGamesColumn"

const AboutUsGames = () => {
	const delimiterIndex = configAuxiliary.aboutUsGames.length / 2
	const arrayColumns = [
		configAuxiliary.aboutUsGames.filter((item, index) => index < delimiterIndex),
		configAuxiliary.aboutUsGames.filter((item, index) => index >= delimiterIndex)
	]
	return (
		<div className="about-us-block__games games-about-us">
			<div className="games-about-us__row">
				{arrayColumns.map((dataArray, i) => <AboutUsGamesColumn key={i} data={dataArray} />)}
				<div className="games-about-us__content">
					<h2 className="games-about-us__title">Библиотека игр</h2>
					<p className="games-about-us__text">Factory platform предлагает около 35 игр на любой вкус, большие рецензии на них + рейтинги, а также эксклюзивные предложения. Мы также работаем над возможностью автоматического обновления игр.</p>
					<Link to="/store"><span>Перейти в магазин</span><img src="./images/icons/arrow-blue-sky.svg" alt="Иконка стрелочки" /></Link>
				</div>
			</div>
		</div>
	)
}

export default AboutUsGames
