import React from "react"
import PropTypes from "prop-types"

const ModalStoreTop5 = ({ data, statusBtnSelected, onUpdateCurrentConfig }) => {
	return (
		<div className={"head-top5__modal-category" + (statusBtnSelected ? " active" : "")}>
			<ul className="head-top5__modal-list">
				{data.map(item => {
					return (
						<li key={item._id}>
							<img src="./images/icons/circleAbstraction.svg" alt="Иконка абстракции кругов" />
							<button onClick={() => onUpdateCurrentConfig(item)} className="head-top5__btn-list" type="button">{item.title}</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

ModalStoreTop5.propTypes = {
	data: PropTypes.array.isRequired,
	statusBtnSelected: PropTypes.bool.isRequired,
	onUpdateCurrentConfig: PropTypes.func.isRequired
}

export default ModalStoreTop5
