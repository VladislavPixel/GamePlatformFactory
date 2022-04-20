import React from "react"
import PropTypes from "prop-types"

const StockTextField = ({ type, placeholder, name, isSpan }) => {
	return (
		<React.Fragment>
			<input placeholder={placeholder} type={type} id={name} name={name} />
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
	isSpan: PropTypes.bool.isRequired
}

export default React.memo(StockTextField)