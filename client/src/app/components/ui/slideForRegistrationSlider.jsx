import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import FormComponent, { SelectField, TextField } from "../common/form"
// Auxiliary
import { getDataCountries } from "../../store/countries"

const SlideForRegistrationSlider = ({ index }) => {
	// STATE
	const [data1] = useState({
		country: "",
		birthDay: "",
		monthOfBirth: "",
		yearOfBirth: ""
	})
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())
	// AUXILIARY
	const validatorConfig = index === 0 ?
		{
			country: { isRequired: { message: "Страна проживания должна быть обязательно выбрана" } },
			birthDay: { isRequired: { message: "День рождения должен быть указан"} },
			monthOfBirth: { isRequired: { message: "Месяц рождения обязателен к заполнению" } },
			yearOfBirth: { isRequired: { message: "Год рождения должен быть заполнен" } }
		} :
		index === 1 ?
		{
			name: { isRequired: { message: "Имя обязательно к заполнению" } },
			surName: { isRequired: { message: "Поле фамилия должно быть заполнено" } }
		} :
		""
	return (
		<div className="slider-registration__slide">
			{index === 0 &&
				<form className="slider-registration__form form">
					<SelectField label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" value={data1.country} />
					<TextField label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" />
					<button className="slider-registration__btn-next" type="button">Далее</button>
				</form>
			}
			{index === 1 &&
				<FormComponent config={validatorConfig}>
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
