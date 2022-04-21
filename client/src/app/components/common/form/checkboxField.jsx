import React from "react"
import PropTypes from "prop-types"

const CheckboxField = ({ type, name, label, value, onChange, error }) => {
	// HANDLERS
	const handlerChange = () => onChange({ name: name, value: !value })

	return (
		<div className="form__checkbox-block">
			<input checked={value} value="" onChange={handlerChange} className="form__checkbox" id={name} type={type} name={name} />
			<label className="form__checkbox-label" htmlFor={name}>{label}</label>
			{error && <p className="form__checkbox-error">{error}</p>}
		</div>
	)
}

CheckboxField.defaultProps = {
	type: "checkbox"
}

CheckboxField.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]),
	onChange: PropTypes.func.isRequired
}

export default React.memo(CheckboxField)
