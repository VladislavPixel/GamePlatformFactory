import React from "react"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const AboutUsHead = () => {
	return (
		<div className="about-us-block__head head-about-us-block">
			<div className="head-about-us-block__container">
				<div className="head-about-us-block__row">
					<div className="head-about-us-block__column">
						<div className="head-about-us-block__icon">
							<img src="./images/icons/sword.svg" alt="Рыцарский меч игровой" />
							<h1 className="head-about-us-block__name">Factory.inc</h1>
						</div>
						<p className="head-about-us-block__text">Factory - амбициозная, свежая платформа для игроков и разработчиков из России</p>
						<div className="head-about-us-block__platform">
							<span>Мы работаем с такими платформами как:</span>
							<div className="head-about-us-block__platform-list">
								{configAuxiliary.platforms.map((item, index) => <img key={index} src={`./images/platformsIcon/${item.path}`} alt={item.name} />)}
							</div>
						</div>
					</div>
					<div className="head-about-us-block__column">
						<img className="head-about-us-block__poster" src="./images/aboutUs/hydrometry.jpg" alt="Абстрактная фигура" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsHead
