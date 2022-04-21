import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import ReCAPTCHA from "react-google-recaptcha"

// Components
import FormComponent, { TextField, SelectField, CheckboxField } from "../common/form"
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
	function handlerOnChange(value) {
		console.log("succsess", value)
	}

	return (
		<div className="slider-registration__slide">
			{/* {index === 0 &&
				<FormComponent config={validatorConfig} onSubmit={onSubmitForm} classesParent="slider-registration" defaultData={dataObject} >
					<SelectField label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" />
					{isShowPhantom && <TextField error="Обязательно к заполнению" label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" onCallback={handlerCallbackField} />}
					{!isShowPhantom && <BirthdayBlockField data-trigger="birthdayGroup" />}
					<button title="Только вперед" className="slider-registration__btn-next" type="submit">Далее</button>
				</FormComponent>
			}
			{index === 1 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={dataObject} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="name" label="Имя" placeholder="Ваше имя" />
					<TextField name="surName" label="Фамилия" placeholder="Ваша фамилия" />
					<button title="Не сдавайся, регистрация не такой уж и сложный процесс" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Возможно что-то требуется поменять на предыдущем шаге?" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 2 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={dataObject} classesParent="slider-registration" config={validatorConfig}>
					<TextField name="email" label="Почта" placeholder="Укажите почту" />
					<TextField name="numberPhone" label="Телефон" placeholder="Мобильный телефон" />
					<button title="Молодец, переходим к следующему этапу" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Есть возможность поменять данные на предыдущем шаге" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			} */}
			{index === 3 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={dataObject} classesParent="slider-registration" config={validatorConfig}>
					<ReCAPTCHA sitekey="6LeNXI8fAAAAAI3jAPAVzYWXQUxgbFBdEmCCuePJ" onChange={handlerOnChange} />
					<CheckboxField name="accessPolicy" label="Я подтверждаю, что мне исполнилось 13 лет, и соглашаюсь с условиями соглашения подписчика Factory.inc и политикой конфиденциальности Factory.inc. Я также даю полное согласие на обработку моих персональных данных." />
					<button title="Больше половины пути пройдено, поднажми!" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Ничего страшного, есть возможность что-то добавить позади. Воспользуйся, если нужно." data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
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
