import React, { useState, useEffect, useRef } from "react"

// Components
import SlideForRegistrationSlider from "../../ui/slideForRegistrationSlider"
// Auxiliary
import configAuxiliary from "../../../configAuxiliary.json"

const RegistrationPage = () => {
	// STATE
	const [widthWrapper, setWidthWrapper] = useState(0)
	const [currentStage, setCurrentStage] = useState(3)
	const [styleWrapper, setStyleWrapper] = useState({ transform: "translateX(0px)" })
	const [isModalClarification, setModalClarification] = useState(false)
	const [data1, setData1] = useState({
		country: "",
		birthDay: "",
		monthOfBirth: "",
		yearOfBirth: "",
	})
	const [data2, setData2] = useState({
		name: "",
		surName: ""
	})
	const [data3, setData3] = useState({
		email: "",
		numberPhone: ""
	})
	const [data4, setData4] = useState({
		accessPolicy: ""
	})
	// AUXILIARY
	const additionalConfig = configAuxiliary.modalRegConfig[`${currentStage}`]
	const wrapperSlides = useRef(null)
	const data = currentStage === 0 ?
		data1 :
		currentStage === 1 ?
		data2 :
		currentStage === 2 ?
		data3 :
		data4
	// HANDLERS
	const handlerUpdateStage = (message) => {
		if (message === "next") setCurrentStage(prevState => prevState + 1)
		if (message === "prev") setCurrentStage(prevState => prevState - 1)
	}
	const handlerSubmit = (newData) => {
		if (currentStage === 0) setData1(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 1) setData2(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 2) setData3(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 3) setData4(prevState => ({ ...prevState, ...newData }))
		handlerUpdateStage("next")
	}
	const handlerUpdateQuestion = () => setModalClarification(prevState => !prevState)

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
							<p onMouseOver={handlerUpdateQuestion} onMouseLeave={handlerUpdateQuestion} className="wrapper-additional-registration__question">{additionalConfig.text}</p>
							<div className={"wrapper-additional-registration__clarification" + (isModalClarification ? " active" : "")}>
								{additionalConfig.modalText}
								<span className="wrapper-additional-registration__triangle-modal"></span>
							</div>
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
