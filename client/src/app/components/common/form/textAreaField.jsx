import React from "react"
import PropTypes from "prop-types"

const TextAreaField = ({ label, name, error, placeholder, value, onChange }) => {
	// HANDLERS
	const handlerChangeArea = ({ target }) => onChange({ name: name, value: target.value })
	return (
		<div className="form__area-block">
			<label htmlFor={name} className="form__label-area">{label}</label>
			<div className="form__area-container">
				<textarea onChange={handlerChangeArea} id={name} name={name} className="form__area" value={value} placeholder={placeholder}></textarea>
				{value && <img onClick={() => handlerChangeArea({ target: { value: "" } })} className="form__area-cross" src="/images/icons/cross.svg" alt="Желтый крестик для очистки поля ввода текста" />}
			</div>
			{error && <p className="form__area-error">{error}</p>}
		</div>
	)
}

TextAreaField.defaultProps = {
	label: "Поле ввода Вашего текста"
}

TextAreaField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func
}

export default React.memo(TextAreaField)
