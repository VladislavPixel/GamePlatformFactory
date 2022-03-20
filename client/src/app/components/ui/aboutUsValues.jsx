import React from "react"
import configAuxiliary from "../../configAuxiliary.json"
import AboutUsPrincip from "./aboutUsPrincip"

const AboutUsValues = () => {
	return (
		<div className="about-us-block__values values-about-us">
			<div className="values-about-us__container _container">
				<div className="values-about-us__head">
					<h2 className="values-about-us__title">Наши ценности</h2>
					<p className="values-about-us__sub-title">Наш фокус на том, чтобы создать самую потрясающую платформу для покупки, оценки, комментирования игр, общения людей и их совместного времяпрепровождения. Свои убеждения мы нарабатывали годами и хотим ими поделиться с Вами, чтобы у Вас сложилось полноценное мнение о нас. Эти принципы находят отражение в повседневной деятельности наших сотрудников.</p>
				</div>
				<div className="values-about-us__list">
					{configAuxiliary.aboutUsValues.map((item, i) => <AboutUsPrincip key={i} {...item} />)}
				</div>
			</div>
		</div>
	)
}

export default AboutUsValues
