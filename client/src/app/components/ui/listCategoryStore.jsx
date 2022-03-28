import React from "react"
import PropTypes from "prop-types"
import ListSubCategoryStore from "./listSubCategoryStore"

const ListCategoryStore = ({ onHandlerSelectedCategory, selectedElement, data }) => {
	return (
		data.map(el => (
			<nav key={el._id} className="modal-category__wrap-list-category">
				<h4 className="modal-category__title">{el.titleCategory}</h4>
				{el.elements &&
					<ul className="modal-category__list">
						{el.elements.map(element => <li className={selectedElement.name === element.name ? "active" : ""} onClick={() => onHandlerSelectedCategory(element)} key={element._id}>{element.name}</li>)}
					</ul>
				}
				{el.subGenres && el.subGenres.map(item => <ListSubCategoryStore selectedElement={selectedElement} onHandlerSelectedCategory={onHandlerSelectedCategory} key={item._id} {...item} />)}
			</nav>
		))
	)
}

ListCategoryStore.propTypes = {
	onHandlerSelectedCategory: PropTypes.func.isRequired,
	selectedElement: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired
}

export default ListCategoryStore
