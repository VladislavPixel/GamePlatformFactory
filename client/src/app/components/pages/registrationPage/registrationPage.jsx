import React, { useState } from "react"

// Components
import SlideForRegistrationSlider from "../../ui/slideForRegistrationSlider"
// Auxiliary
import configAuxiliary from "../../../configAuxiliary.json"

const RegistrationPage = () => {
	// STATE
	const [currentStage, setCurrentStage] = useState(0)
	// AUXILIARY
	const additionalConfig = configAuxiliary.modalRegConfig[`${currentStage}`]
	return (
		<div className="block-content__registration registration-block">
			<div className="registration-block__container _container">
				<div className="registration-block__content">
					<img className="registration-block__icon-img" src="./images/icons/swords.svg" alt="Перекрещенные мечи" />
					<h1 className="registration-block__title">Factory.inc</h1>
					<h2 className="registration-block__sub-title">{configAuxiliary.titlesReg[currentStage].title}</h2>
					<p className="registration-block__message">{configAuxiliary.messagesReg[currentStage].value}</p>
					{additionalConfig && <p className="registration-block__edditional-text">{additionalConfig.text}</p>}
					<div className="registration-block__slider slider-registration">
						<div className="slider-registration__wrapper">
							{configAuxiliary.titlesReg.map((item, i) => <SlideForRegistrationSlider key={i} index={i} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegistrationPage
