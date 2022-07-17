import React from "react"

// Components
import AboutUsActivityElement from "./aboutUsActivityElement"
// Auxiliary
import aboutUsActivity from "../../configAuxiliary/aboutUsActivity.json"

const AboutUsActivity = () => {
	return (
		<div className="about-us-block__activity activity-about-us">
			<div className="activity-about-us__container _container">
				<div className="activity-about-us__head">
					<h2 className="activity-about-us__caption">Активности площадки</h2>
					<p className="activity-about-us__sub-caption">Каждый день мы стараемся придумать что-то новое, чтобы улучшить опыт пользовательского взаимодействия с нашей игровой платформой.</p>
				</div>
				<div className="activity-about-us__list">
					{aboutUsActivity.map((item, index) => <AboutUsActivityElement key={index} {...item} />)}
				</div>
			</div>
		</div>
	)
}

export default AboutUsActivity
