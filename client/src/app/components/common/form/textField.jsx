import React from "react"
import PropTypes from "prop-types"

const TextField = ({ name, label, placeholder, value, error, onChange }) => {
	// HANDLERS
	const handlerChange = ({ target }) => onChange({ name: name, value: target.value })

	return (
		<div className="form__input-block">
			<label htmlFor={name} className="form__label-input">{label}</label>
			<div className="form__input-container">
				<input onChange={handlerChange} className="form__input" value={value} name={name} id={name} placeholder={placeholder} />
			</div>
			{error && <p className="form__input-error">{error}</p>}
		</div>
	)
}

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func
}

export default TextField
