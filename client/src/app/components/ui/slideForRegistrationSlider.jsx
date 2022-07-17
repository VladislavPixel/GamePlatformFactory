import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// Components
import FormComponent, { TextField, SelectField, CheckboxField, RecaptchaField } from "../common/form"
import BirthdayBlockField from "./birthdayBlockField"
// Auxiliary
import getValidatorConfigForRegistration from "../../utils/getValidatorConfigForRegistration"
import { getDataCountries } from "../../store/countries"
import getArrayByNumber from "../../utils/getArrayByNumber"
import registrationModals from "../../configAuxiliary/registrationModals.json"

const SlideForRegistrationSlider = ({ index, onUpdateStage, onSubmitForm, pullData, currentStage }) => {
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())
	// STATE
	const [isShowPhantom, setShowPhantom] = useState(true)
	// AUXILIARY
	const navigate = useNavigate()
	const arrayPagesRegistration = getArrayByNumber(registrationModals.titlesReg.length)
	// HANDLERS
	const handlerCallbackField = () => setShowPhantom(prevState => !prevState)
	const handlerLastPageBtn = () => navigate("/")

	return (
		<div className="slider-registration__slide">
			{index === 0 &&
				<FormComponent config={getValidatorConfigForRegistration(index)} onSubmit={onSubmitForm} classesParent="slider-registration" defaultData={pullData[0]} >
					<SelectField label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" />
					{isShowPhantom && <TextField error="Обязательно к заполнению" label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" onCallback={handlerCallbackField} />}
					{!isShowPhantom && <BirthdayBlockField data-trigger="birthdayGroup" />}
					<button title="Только вперед" className="slider-registration__btn-next" type="submit">Далее</button>
				</FormComponent>
			}
			{index === 1 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={pullData[1]} classesParent="slider-registration" config={getValidatorConfigForRegistration(index)}>
					<TextField name="name" label="Имя" placeholder="Ваше имя" />
					<TextField name="surName" label="Фамилия" placeholder="Ваша фамилия" />
					<button title="Не сдавайся, регистрация не такой уж и сложный процесс" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Возможно что-то требуется поменять на предыдущем шаге?" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 2 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={pullData[2]} classesParent="slider-registration" config={getValidatorConfigForRegistration(index)}>
					<TextField name="email" label="Почта" placeholder="Укажите почту" />
					<TextField name="numberPhone" label="Телефон" placeholder="Мобильный телефон" />
					<button title="Молодец, переходим к следующему этапу" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Есть возможность поменять данные на предыдущем шаге" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 3 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={pullData[3]} classesParent="slider-registration" config={getValidatorConfigForRegistration(index)}>
					<RecaptchaField name="recaptchaTag" label="Подтверждение" />
					<CheckboxField name="accessPolicy" label="Я подтверждаю, что мне исполнилось 13 лет, и соглашаюсь с условиями соглашения подписчика Factory.inc и политикой конфиденциальности Factory.inc. Я также даю полное согласие на обработку моих персональных данных." />
					<button title="Больше половины пути пройдено, поднажми!" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Ничего страшного, есть возможность что-то добавить позади. Воспользуйся, если нужно." data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 4 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={pullData[4]} classesParent="slider-registration" config={getValidatorConfigForRegistration(index)}>
					<TextField name="password" label="Пароль" type="password" placeholder="введите пароль" />
					<button title="Следующий шаг последний, считай финиш" className="slider-registration__btn-next" type="submit">Далее</button>
					<button title="Ты всегда можешь что-то поменять" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 5 &&
				<FormComponent onSubmit={onSubmitForm} defaultData={pullData[5]} classesParent="slider-registration" config={getValidatorConfigForRegistration(index)}>
					<TextField name="nickName" label="Твой никнейм" placeholder="придумайте ник" />
					<TextField name="loginAccount" label="Логин" placeholder="укажите логин" />
					<button title="Для того чтобы пересечь финишную черту, нужно нажать кнопку" className="slider-registration__btn-next" type="submit">Регистрация</button>
					<button title="Там что-то не так с данными? Не переживай, ты можешь их поменять" data-status="alwaysWorking" onClick={() => onUpdateStage("prev")} className="slider-registration__btn-prev" type="button">Назад</button>
				</FormComponent>
			}
			{index === 6 &&
				<div className="slider-registration__quote-block">
					<p className="slider-registration__quote">«Светящиеся существа — это мы… а не эта грубая материя» — Йода</p>
					<button onClick={handlerLastPageBtn} title="Теперь будь храбр и не оглядывайся назад" className="slider-registration__btn-next" type="button">Используй свою силу!</button>
				</div>
			}
			<div className="slider-registration__pagins-list">
				{arrayPagesRegistration.map(item => <span className={"slider-registration__pagin" + (item._id < currentStage ? " passed" : currentStage === item._id ? " target" : "") } key={item._id}></span>)}
			</div>
		</div>
	)
}

SlideForRegistrationSlider.propTypes = {
	index: PropTypes.number.isRequired,
	onUpdateStage: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired,
	pullData: PropTypes.array.isRequired,
	currentStage: PropTypes.number.isRequired
}

export default SlideForRegistrationSlider
