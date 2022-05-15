import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const RelationshipBtnsList = ({ onUpdate, currentStatus, configMessage }) => {
	// AUXILIARY
	const { isMessage, color } = configMessage
	return (
		<div className="block-add-comment__relationship-btns">
			<p className="block-add-comment__explanation">Укажите какой посыл у вашего комментария:</p>
			<div className="block-add-comment__list">
				{configAuxiliary.statusNewComment.map(configBtn => <button onClick={() => onUpdate(configBtn)} title={`При отметке другие пользователи смогут "явно" видеть посыл комментария`} key={configBtn._id} className={`block-add-comment__btn-status block-add-comment__btn-status_${configBtn.value}` + (currentStatus === configBtn.value ? " active" : "")} type="button">{configBtn.text}</button>)}
			</div>
			{isMessage && <p style={{ color }} className="block-add-comment__error-status-comment">Посыл комментария должен быть обязательно выбран!</p>}
		</div>
	)
}

RelationshipBtnsList.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	currentStatus: PropTypes.string.isRequired,
	configMessage: PropTypes.object.isRequired
}

export default RelationshipBtnsList
