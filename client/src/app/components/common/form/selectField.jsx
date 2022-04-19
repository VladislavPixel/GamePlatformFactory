import React from "react"
import PropTypes from "prop-types"

const SelectField = ({ label, name, dataOptions, value, defaultOption, onChange, error }) => {
	// HANDLERS
	const handlerChange = ({ target }) => onChange({ name: name, value: target.value })
	return (
		<div className="form__select-block">
			<label className="form__label-select">{label}</label>
			<div className="form__select-container">
				<select onChange={handlerChange} value={value} name={name} className="form__select">
					<option value="" disabled>{defaultOption}</option>
					{dataOptions.map(item => <option key={item._id} value={item.valueCode}>{item.title}</option>)}
				</select>
				{error && <p className="form__input-error">{error}</p>}
			</div>
		</div>
	)
}

SelectField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	dataOptions: PropTypes.array.isRequired,
	value: PropTypes.string,
	defaultOption: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
}

export default SelectField
