import React, { useState, useEffect, useRef } from "react"

// Components
import SlideForRegistrationSlider from "../../ui/slideForRegistrationSlider"
// Auxiliary
import configAuxiliary from "../../../configAuxiliary.json"

const RegistrationPage = () => {
	// STATE
	const [widthWrapper, setWidthWrapper] = useState(0)
	const [currentStage, setCurrentStage] = useState(2)
	const [styleWrapper, setStyleWrapper] = useState({ transform: "translateX(0px)" })
	const [data] = useState({
		country: "",// 1 страница геймифицированной регистрации
		birthDay: "",
		monthOfBirth: "",
		yearOfBirth: "",
		name: "", // 2 страница ГР
		surName: "",
		email: "", // 3 страница ГР
		numberPhone: ""
	})
	// AUXILIARY
	const additionalConfig = configAuxiliary.modalRegConfig[`${currentStage}`]
	const wrapperSlides = useRef(null)
	// HANDLERS
	const handlerSubmit = () => {}
	const handlerUpdateStage = (message) => {
		if (message === "next") setCurrentStage(prevState => prevState + 1)
		if (message === "prev") setCurrentStage(prevState => prevState - 1)
	}
	useEffect(() => {
		setWidthWrapper(wrapperSlides.current.offsetWidth)
	}, [])
	useEffect(() => {
		setStyleWrapper({ transform: `translateX(-${currentStage * widthWrapper}px)` })
	}, [currentStage, widthWrapper])
	return (
		<div className="block-content__registration registration-block">
			<div className="registration-block__container _container">
				<div className="registration-block__content">
					<img className="registration-block__icon-img" src="./images/icons/swords.svg" alt="Перекрещенные мечи" />
					<h1 className="registration-block__title">Factory.inc</h1>
					<h2 className="registration-block__sub-title">{configAuxiliary.titlesReg[currentStage].title}</h2>
					<p className="registration-block__message">{configAuxiliary.messagesReg[currentStage].value}</p>
					{additionalConfig &&
						<div className="registration-block__additional-wrapper wrapper-additional-registration">
							<p className="wrapper-additional-registration__question">{additionalConfig.text}</p>
							<div className="wrapper-additional-registration__clarification">{additionalConfig.modalText}</div>
						</div>
					}
					<div className="registration-block__slider slider-registration">
						<div ref={wrapperSlides} style={styleWrapper} className="slider-registration__wrapper">
							{configAuxiliary.titlesReg.map((item, i) => <SlideForRegistrationSlider dataObject={data} onSubmitForm={handlerSubmit} onUpdateStage={handlerUpdateStage} key={i} index={i} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegistrationPage
