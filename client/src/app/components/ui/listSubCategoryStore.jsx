import React from "react"
import PropTypes from "prop-types"

const ListSubCategoryStore = ({ subTitleCategory, elements }) => {
	return (
		<nav className="modal-category__wrap-list-sub-category">
			<h5 className="modal-category__sub-title">{subTitleCategory}</h5>
			<ul className="modal-category__list">
				{elements.map(el => <li key={el._id}>{el.name}</li>)}
			</ul>
		</nav>
	)
}

ListSubCategoryStore.propTypes = {
	subTitleCategory: PropTypes.string.isRequired,

}

export default ListSubCategoryStore
