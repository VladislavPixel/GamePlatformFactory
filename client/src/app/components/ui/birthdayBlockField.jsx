import React from "react"
import PropTypes from "prop-types"

// Components
import { StockTextField } from "../common/form"

const BirthdayBlockField = ({ value, error, onChange }) => {
	const errorMessage = error["birthDay"] ?
	error["birthDay"] :
	error["monthOfBirth"] ?
	error["monthOfBirth"] :
	error["yearOfBirth"]
	return (
		<div className="birthday-block">
			<label htmlFor="birthDay" className="birthday-block__label">Дата рождения</label>
			<div className="birthday-block__group-birthday">
				<StockTextField value={value["birthDay"]} onChange={onChange} type="number" placeholder="дд" name="birthDay" />
				<StockTextField value={value["monthOfBirth"]} onChange={onChange} type="number" placeholder="мм" name="monthOfBirth" />
				<StockTextField value={value["yearOfBirth"]} onChange={onChange} type="number" placeholder="гггг" name="yearOfBirth" isSpan={false} />
			</div>
			{errorMessage && <p className="birthday-block__error">{errorMessage}</p>}
		</div>
	)
}

BirthdayBlockField.propTypes = {
	value: PropTypes.object.isRequired,
	error: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

export default React.memo(BirthdayBlockField)
