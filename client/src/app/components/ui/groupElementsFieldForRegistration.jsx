import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import { SelectField, TextField } from "../common/form"
// Auxiliary
import { getDataCountries } from "../../store/countries"

const GroupElementsFieldForRegistration = ({ onChange, dataForm, errorObject }) => {
	// REDUX
	const countriesForSelect = useSelector(getDataCountries())
	// STATE
	const [isShowPhantom, setShowPhantom] = useState(true)
	// HANDLERS
	const handlerCallbackField = () => setShowPhantom(prevState => !prevState)
	const handlerChangeElementsFirsSlide = (event) => {
		if (event.target) {
			onChange({ name: event.target.name, value: event.target.value })
		} else {
			onChange({ name: "country", value: event.value })
		}
	}
	const textErrorInput = errorObject.birthDay ?
		errorObject.birthDay :
		errorObject.monthOfBirth ?
		errorObject.monthOfBirth :
		errorObject.yearOfBirth
	return (
		<React.Fragment>
			<SelectField error={errorObject.country} onChange={handlerChangeElementsFirsSlide} label="Страна проживания" dataOptions={countriesForSelect} defaultOption="Выберите свою страну" name="country" value={dataForm.country} />
			{isShowPhantom &&<TextField error={textErrorInput} label="Дата рождения" placeholder="Дата рождения (дд . мм . гггг)" name="phantom" onCallback={handlerCallbackField} />}
			{!isShowPhantom &&
				<div className="slider-registration__block-birthday birthday-block">
					<label htmlFor="birthDay" className="birthday-block__label">Дата рождения</label>
					<div className="birthday-block__group-birthday">
						<input onChange={handlerChangeElementsFirsSlide} placeholder="дд" type="number" id="birthDay" name="birthDay" value={dataForm.birthDay} />
						<span>.</span>
						<input onChange={handlerChangeElementsFirsSlide} placeholder="мм" type="number" name="monthOfBirth" value={dataForm.monthOfBirth} />
						<span>.</span>
						<input onChange={handlerChangeElementsFirsSlide} placeholder="гггг" type="number" name="yearOfBirth" value={dataForm.yearOfBirth} />
					</div>
					{textErrorInput && <p className="form__input-error">{textErrorInput}</p>}
				</div>
			}
		</React.Fragment>
	)
}

GroupElementsFieldForRegistration.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default GroupElementsFieldForRegistration
