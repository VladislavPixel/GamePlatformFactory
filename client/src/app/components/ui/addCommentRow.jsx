import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Components
import FormComponent, { TextAreaField } from "../common/form"

const AddCommentRow = ({ avatar, nickName, onSubmit, defaultStateForm, _id }) => {
	// AUXILIARY
	const validatorConfig = {
		text: { isRequired: { message: `Поле обязаельно для заполнения` } }
	}
	return (
		<div className="block-add-comment__row">
			<div className="block-add-comment__column">
				<Link to={`/user/${_id}`}>
					<img title="Перейти к себе (на страницу профиля)" className="block-add-comment__avatar-user" src={`/images/users/avatar/${avatar}`} alt={`Аватар пользователя с ником: ${nickName}`} />
				</Link>
			</div>
			<div className="block-add-comment__column">
				<FormComponent onSubmit={onSubmit} config={validatorConfig} defaultData={defaultStateForm} classesParent="block-add-comment">
					<TextAreaField name="text" placeholder="Поделитесь своими соображениями" />
					<button className="block-add-comment__btn-sub" type="submit">Опубликовать</button>
				</FormComponent>
			</div>
		</div>
	)
}

AddCommentRow.propTypes = {
	avatar: PropTypes.string.isRequired,
	nickName: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	defaultStateForm: PropTypes.object.isRequired
}

export default AddCommentRow
