import React from "react"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataCountries } from "../../../store/countries"

const RegistrationPage = () => {
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())
	return (
		<div className="block-content__registration registration-block">
			<div className="registration-block__container _container">
				<div className="registration-block__content">
					<img className="registration-block__icon-img" src="./images/icons/swords.svg" alt="Перекрещенные мечи" />
					<h1 className="registration-block__title">Factory.inc</h1>
					<h2 className="registration-block__sub-title">Ну что ж, давайте начинать</h2>
					<p className="registration-block__message">Мы проверяем некоторую информацию о вас, чтобы ваше пребывание здесь было максимально комфортным.</p>
					<p className="registration-block__edditional-text"></p>
					<div className="registration-block__slider slider-registration">
						<div className="slider-registration__wrapper">

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegistrationPage
