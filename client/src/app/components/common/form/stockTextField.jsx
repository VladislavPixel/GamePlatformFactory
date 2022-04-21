import React from "react"
import PropTypes from "prop-types"

const StockTextField = ({ type, placeholder, name, isSpan, value, onChange }) => {
	// HENDLERS
	const handlerChange = ({ target }) => onChange({ name: name, value: target.value })

	return (
		<React.Fragment>
			<input value={value} onChange={handlerChange} placeholder={placeholder} type={type} id={name} name={name} />
			{isSpan && <span>.</span>}
		</React.Fragment>
	)
}

StockTextField.defaultProps = {
	isSpan: true
}

StockTextField.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isSpan: PropTypes.bool.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default React.memo(StockTextField)