import React from "react"
import PropTypes from "prop-types"

const ListSubCategoryStore = ({ subTitleCategory, elements, onHandlerSelectedCategory, selectedElement }) => {
	return (
		<nav className="modal-category__wrap-list-sub-category">
			<h5 className="modal-category__sub-title">{subTitleCategory}</h5>
			<ul className="modal-category__list">
				{elements.map(el => <li className={selectedElement.name === el.name ? "active" : ""} onClick={() => onHandlerSelectedCategory(el)} key={el._id}>{el.name}</li>)}
			</ul>
		</nav>
	)
}

ListSubCategoryStore.propTypes = {
	subTitleCategory: PropTypes.string.isRequired,
	elements: PropTypes.array,
	onHandlerSelectedCategory: PropTypes.func.isRequired,
	selectedElement: PropTypes.object.isRequired
}

export default ListSubCategoryStore
