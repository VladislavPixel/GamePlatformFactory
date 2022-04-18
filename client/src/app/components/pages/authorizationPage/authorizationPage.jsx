import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import AuthorizationRightColumn from "../../ui/authorizationRightColumn"
import FormComponent, { TextField } from "../../common/form"

const AuthorizationPage = () => {
	// STATE
	const [data] = useState({
		loginAccount: "",
		email: "",
		password: ""
	})

	// HANDLERS
	const handlerSubmitForm = (newData) => {
		console.log("Данные на отправку. Авторизация: ", newData)
	}

	// AUXILIARY
	const validatorConfig = {
		loginAccount: { isRequired: { message: `Поле "Логин" обязательно для заполнения` } },
		email: {
			isRequired: { message: `Поле "Почта" обязаельно для заполнения` },
			isEmail: { message: `Поле "Почта" не удовлетворяет требованиям` }
		},
		password: {
			isRequired: { message: `Поле "Пароль" обязательно для заполнения` },
			num: { message: `Пароль должен содержать хотя бы одну цифру` },
			upperEl: { message: `Пароль должен содержать хотя бы одну букву в верхнем регистре. Эта буква должна быть на латинице.` },
			specialCharacter: { message: `Пароль должен содержать хотя бы один специальный символ: !@#$%&^*?` },
			minElements: { message: `Пароль должен быть не меньше 8 символов`, value: 8 }
		}
	}
	return (
		<div className="block-content__auth-container container-auth">
			<div className="container-auth__column">
				<div className="container-auth__block-form form-block-auth">
					<h1 className="form-block-auth__title">Авторизоваться</h1>
					<div className="form-block-auth__container">
						<FormComponent onSubmit={handlerSubmitForm} config={validatorConfig} defaultData={data} classesParent="form-block-auth">
							<TextField name="loginAccount" label="Имя аккаунта Factory.inc" placeholder="введите имя аккаунта" />
							<TextField name="email" label="Почта" placeholder="укажите почту аккаунта" />
							<TextField name="password" label="Пароль" placeholder="введите пароль" />
							<button className="form-block-auth__btn-sub" type="submit">Войти</button>
						</FormComponent>
					</div>
					<Link title="Нужна помощь?" className="form-block-auth__recovery-link" to="/">Забыли пароль?</Link>
				</div>
			</div>
			<AuthorizationRightColumn />
		</div>
	)
}

export default AuthorizationPage
