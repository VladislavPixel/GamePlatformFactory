import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

// Auxiliary
import validator from "../../../utils/validator"

const FormComponent = ({ children, onSubmit, defaultData, config, classesParent }) => {
	// STATE
	const [data, setData] = useState(defaultData || {})
	const [errors, setErrors] = useState({})

	// HANDLERS
	const handlerSubmit = (event) => {
		event.preventDefault()
		const isValidFormData = validation()
		if (!isValidFormData) return
		onSubmit(data)
	}
	const handlerChange = (newValue) => setData( prevState => ({ ...prevState, [newValue.name]: newValue.value }) )

	// AUXILIARY
	function validation(dataTarget) {// Направляет конфиг и данные формы в валидатор, он проверяет и отдает ошибки, если они есть
		const errorSet = validator(dataTarget, config)
		setErrors(errorSet)
		return Object.keys(errorSet).length === 0 // Доп.проверка для handlerSubmit
	}
	const isDisabledBtn = !(Object.keys(errors).length === 0)
	const newChildren = React.Children.map(children, child => {
		let newConfigChild // т.к. мы используем универсальную форму нам нужно дополнить детей некоторыми props
		if (typeof child.type === "function") {
			newConfigChild = {
				...child.props,
				value: data[child.props.name],
				error: errors[child.props.name],
				onChange: handlerChange
			}
		}
		if (child.type === "button") {
			if (child.props.type === undefined || child.props.type === "submit") {
				newConfigChild = {
					...child.props,
					className: child.props.className + (isDisabledBtn ? " no-active" : ""),
					disabled: isDisabledBtn
				}
			}
		}

		return React.cloneElement(child, newConfigChild)
	})

	useEffect(() => { // При каждом изменении данных формы, когда мы вводим что-то в input, запускается валидация полей
		validation(data)
	}, [data])
	return (
		<form className={`${classesParent}__form form`} onSubmit={handlerSubmit}>
			{newChildren}
		</form>
	)
}

FormComponent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	onSubmit: PropTypes.func.isRequired,
	defaultData: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired,
	classesParent: PropTypes.string.isRequired
}

export default FormComponent
