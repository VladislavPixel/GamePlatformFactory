import React, { useState, useEffect, useRef } from "react"

// Components
import SlideForRegistrationSlider from "../../ui/slideForRegistrationSlider"
// Auxiliary
import configAuxiliary from "../../../configAuxiliary.json"

const RegistrationPage = () => {
	// STATE
	const [widthWrapper, setWidthWrapper] = useState(0)
	const [currentStage, setCurrentStage] = useState(0)
	const [styleWrapper, setStyleWrapper] = useState({ transform: "translateX(0px)" })
	const [isModalClarification, setModalClarification] = useState(false)
	const [data, setData] = useState({ country: "", birthDay: "", monthOfBirth: "", yearOfBirth: "" })
	const [data1, setData1] = useState({ name: "", surName: "" })
	const [data2, setData2] = useState({ email: "", numberPhone: "" })
	const [data3, setData3] = useState({ recaptchaTag: "", accessPolicy: "" })
	const [data4, setData4] = useState({ password: "" })
	const [data5] = useState({ loginAccount: "", nickName: "" })
	// AUXILIARY
	const additionalConfig = configAuxiliary.modalRegConfig[`${currentStage}`]
	const wrapperSlides = useRef(null)
	const stylessPosterYoda = {
		"background-repeat": "no-repeat",
		background: "url(./images/posterYoda.jpg)",
		"background-position": "0 0",
		"background-size": "cover",
		"background-attachment": "fixed"
	}
	// HANDLERS
	const handlerUpdateQuestion = () => setModalClarification(prevState => !prevState)
	const handlerUpdateStage = (message) => {
		if (message === "next") setCurrentStage(prevState => prevState + 1)
		if (message === "prev") setCurrentStage(prevState => prevState - 1)
	}
	const handlerSubmit = (newData) => {
		if (currentStage === 0) setData(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 1) setData1(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 2) setData2(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 3) setData3(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 4) setData4(prevState => ({ ...prevState, ...newData }))
		if (currentStage === 5) {
			console.log({ // СОБРАННЫЙ PULL
				...data,
				...data1,
				...data2,
				...data3,
				...data4,
				...newData
			})
		}
		handlerUpdateStage("next")
	}

	useEffect(() => {
		setWidthWrapper(wrapperSlides.current.offsetWidth)
	}, [])
	useEffect(() => {
		setStyleWrapper({ transform: `translateX(-${currentStage * widthWrapper}px)` })
	}, [currentStage, widthWrapper])
	return (
		<div style={(currentStage === 6 ? stylessPosterYoda : {})} className="block-content__registration registration-block">
			<div className="registration-block__container _container">
				<div className="registration-block__content">
					<img className="registration-block__icon-img" src="./images/icons/swords.svg" alt="Перекрещенные мечи" />
					<h1 className="registration-block__title">Factory.inc</h1>
					<h2 className="registration-block__sub-title">{configAuxiliary.titlesReg[currentStage].title}</h2>
					{configAuxiliary.messagesReg[currentStage] && <p className="registration-block__message">{configAuxiliary.messagesReg[currentStage].value}</p>}
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
							{configAuxiliary.titlesReg.map((_, i) => <SlideForRegistrationSlider currentStage={currentStage} key={i} index={i} pullData={[data, data1, data2, data3, data4, data5]} onSubmitForm={handlerSubmit} onUpdateStage={handlerUpdateStage} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegistrationPage
