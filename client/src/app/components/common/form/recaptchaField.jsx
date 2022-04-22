import ReCAPTCHA from "react-google-recaptcha"
import PropTypes from "prop-types"
import React from "react"

const RecaptchaField = ({ label, name, onChange, error }) => {
	// AUXILIARY
	const handlerOnChangeRecaptcha = (valueToken) => onChange({ name: name, value: valueToken })

	return (
		<div className="form__recaptcha-field">
			<label className="form__recaptcha-label">{label}</label>
			<ReCAPTCHA className="form__recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY} onChange={handlerOnChangeRecaptcha} />
			{error && <p className="form__recaptcha-error">{error}</p>}
		</div>
	)
}

RecaptchaField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
}

export default React.memo(RecaptchaField)
