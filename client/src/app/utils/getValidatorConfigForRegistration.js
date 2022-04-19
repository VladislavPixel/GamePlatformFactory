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
}

export default getValidatorConfigForRegistration
