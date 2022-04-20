import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import FormComponent, { TextField, SelectField, StockTextField } from "../common/form"
// Auxiliary
import getValidatorConfigForRegistration from "../../utils/getValidatorConfigForRegistration"
import { getDataCountries } from "../../store/countries"

const SlideForRegistrationSlider = ({ index }) => {
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())

	// STATE
	const [isShowPhantom, setShowPhantom] = useState(true)
	const [data] = useState({
		country: "",
		birthDay: "",
		monthOfBirth: "",
		yearOfBirth: ""
	})

	// AUXILIARY
	const validatorConfig = getValidatorConfigForRegistration(index)

	// HANDLERS
	const handlerCallbackField = () => {
		setShowPhantom(prevState => !prevState)
	}
	const handlerSubmit = () => {}
	return (
		<div className="slider-registration__slide">
			{index === 0 &&
				<FormComponent config={validatorConfig} onSubmit={handlerSubmit} classesParent="slider-registration" defaultData={data} >
					<SelectField label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" />
					{isShowPhantom && <TextField error="обязательно к заполнению" label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" onCallback={handlerCallbackField} />}
					{!isShowPhantom &&
						<div className="birthday-block">
							<label htmlFor="birthDay" className="birthday-block__label">Дата рождения</label>
							<div className="birthday-block__group-birthday">
								<StockTextField type="number" placeholder="дд" name="birthDay" />
								<StockTextField type="number" placeholder="мм" name="monthOfBirth" />
								<StockTextField type="number" placeholder="гггг" name="yearOfBirth" isSpan={false} />
							</div>
						</div>
					}
					<button className="slider-registration__btn-next" type="button">Далее</button>
				</FormComponent>
			}
			{/* {index === 1 &&
				<FormComponent onSubmit={handlerSubmit} defaultData={data} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="name" label="Имя" placeholder="Ваше имя" />
					<TextField name="surName" label="Фамилия" placeholder="Ваша фамилия" />
					<button className="slider-registration__btn-next" type="button">Далее</button>
					<button className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			} */}
		</div>
	)
}

SlideForRegistrationSlider.propTypes = {
	index: PropTypes.number.isRequired
}

export default SlideForRegistrationSlider



{/* <form className="slider-registration__form form">
					<GroupElementsFieldForRegistration errorObject={error} onChange={handlerChangeData} dataForm={data} />
					<button className="slider-registration__btn-next" type="button">Далее</button>
				</form> */}