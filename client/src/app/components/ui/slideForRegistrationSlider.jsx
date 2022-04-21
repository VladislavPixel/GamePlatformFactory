import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import FormComponent, { TextField, SelectField } from "../common/form"
import BirthdayBlockField from "./birthdayBlockField"
// Auxiliary
import getValidatorConfigForRegistration from "../../utils/getValidatorConfigForRegistration"
import { getDataCountries } from "../../store/countries"

const SlideForRegistrationSlider = ({ index, onUpdateStage, onSubmitForm, dataObject }) => {
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())
	// STATE
	const [isShowPhantom, setShowPhantom] = useState(true)
	// AUXILIARY
	const validatorConfig = getValidatorConfigForRegistration(index)
	// HANDLERS
	const handlerCallbackField = () => setShowPhantom(prevState => !prevState)

	return (
		<div className="slider-registration__slide">
			{index === 0 &&
				<FormComponent config={validatorConfig} onSubmit={onSubmitForm} classesParent="slider-registration" defaultData={dataObject} >
					<SelectField label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" />
					{isShowPhantom && <TextField error="Обязательно к заполнению" label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" onCallback={handlerCallbackField} />}
					{!isShowPhantom && <BirthdayBlockField data-trigger="birthdayGroup" />}
					<button title="Только вперед" onClick={() => onUpdateStage("next")} className="slider-registration__btn-next" type="button">Далее</button>
				</FormComponent>
			}
			{index === 1 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={dataObject} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="name" label="Имя" placeholder="Ваше имя" />
					<TextField name="surName" label="Фамилия" placeholder="Ваша фамилия" />
					<button title="Не сдавайся, регистрация не такой уж и сложный процесс" onClick={() => onUpdateStage("next")} className="slider-registration__btn-next" type="button">Далее</button>
					<button title="Возможно что-то требуется поменять на предыдущем шаге?" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 2 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={dataObject} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="email" label="Почта" placeholder="Укажите почту" />
					<TextField name="numberPhone" label="Телефон" placeholder="Мобильный телефон" />
					<button title="Молодец, переходим к следующему этапу" onClick={() => onUpdateStage("next")} className="slider-registration__btn-next" type="button">Далее</button>
					<button title="Есть возможность поменять данные на предыдущем шаге" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
		</div>
	)
}

SlideForRegistrationSlider.propTypes = {
	index: PropTypes.number.isRequired,
	onUpdateStage: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired
}

export default SlideForRegistrationSlider
