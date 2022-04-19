import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"

// Components
import FormComponent, { TextField } from "../common/form"
import GroupElementsFieldForRegistration from "./groupElementsFieldForRegistration"
// Auxiliary
import getValidatorConfigForRegistration from "../../utils/getValidatorConfigForRegistration"
import validator from "../../utils/validator"

const SlideForRegistrationSlider = ({ index }) => {
	// STATE
	const [error, setError] = useState({})
	const [data, setData] = useState({
		country: "",
		birthDay: "",
		monthOfBirth: "",
		yearOfBirth: ""
	})

	// AUXILIARY
	const validatorConfig = getValidatorConfigForRegistration(index)
	// HANDLERS
	const validation = useCallback((dataTarget) => {// Направляет конфиг и данные формы в валидатор, он проверяет и отдает ошибки, если они есть
		const errorSet = validator(dataTarget, validatorConfig)
		setError(errorSet)
	}, [validatorConfig, setError])
	const handlerSubmit = () => {}
	const handlerChangeData = (object) => setData(prevState => ({ ...prevState, [object.name]: object.value }))

	useEffect(() => {
		validation(data)
	}, [data])
	return (
		<div className="slider-registration__slide">
			{index === 0 &&
				<form className="slider-registration__form form">
					<GroupElementsFieldForRegistration errorObject={error} onChange={handlerChangeData} dataForm={data} />
					<button className="slider-registration__btn-next" type="button">Далее</button>
				</form>
			}
			{index === 1 &&
				<FormComponent onSubmit={handlerSubmit} defaultData={data} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="name" label="Имя" placeholder="Ваше имя" />
					<TextField name="surName" label="Фамилия" placeholder="Ваша фамилия" />
					<button className="slider-registration__btn-next" type="button">Далее</button>
					<button className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
		</div>
	)
}

SlideForRegistrationSlider.propTypes = {
	index: PropTypes.number.isRequired
}

export default SlideForRegistrationSlider
