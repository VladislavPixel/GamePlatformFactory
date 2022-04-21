function getValidatorConfigForRegistration(index) {
	if (index === 0) {
		return {
			country: { isRequired: { message: "Страна проживания должна быть обязательно выбрана" } },
			birthDay: {
				isRequired: { message: "День рождения должен быть указан"},
				range: { message: "День рождения в диапазоне от 1 до 31", min: 1, max: 31 }
			},
			monthOfBirth: {
				isRequired: { message: "Месяц рождения обязателен к заполнению" },
				range: { message: "Месяц рождения в диапазоне от 1 до 12", min: 1, max: 12 }
			},
			yearOfBirth: {
				isRequired: { message: "Год рождения должен быть заполнен" },
				range: { message: "Год рождения в диапазоне от 1900 до 2022", min: 1900, max: 2022 }
			}
		}
	}
	if (index === 1) {
		return {
			name: { isRequired: { message: "Имя обязательно к заполнению" } },
			surName: { isRequired: { message: "Поле фамилия должно быть заполнено" } }
		}
	}
	if (index === 2) {
		return {
			email: {
				isRequired: { message: `Поле "Почта" обязаельно для заполнения` },
				isEmail: { message: `Поле "Почта" не удовлетворяет требованиям` }
			},
			numberPhone: {
				isRequired: { message: `Поле "Телефон" обязательно для заполнения...` },
				isPhone: {
					message: `Поле "Телефон" должно начинаться с 8 и иметь в своем составе только цифры`
				},
				specificAmountElements: {
					message: `Поле "Телефон" должно содержать 11 цифр, не меньше и не больше`,
					score: 11
				}
			}
		}
	}
}

export default getValidatorConfigForRegistration
