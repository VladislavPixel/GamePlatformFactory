import React from "react"
import PropTypes from "prop-types"
import ListSubCategoryStore from "./listSubCategoryStore"

const ListCategoryStore = ({ titleCategory, elements, subGenres, onHandlerSelectedCategory, selectedElement }) => {
	return (
		<nav className="modal-category__wrap-list-category">
			<h4 className="modal-category__title">{titleCategory}</h4>
			{elements &&
				<ul className="modal-category__list">
					{elements.map(element => <li className={selectedElement.name === element.name ? "active" : ""} onClick={() => onHandlerSelectedCategory(element)} key={element._id}>{element.name}</li>)}
				</ul>
			}
			{subGenres && subGenres.map(item => <ListSubCategoryStore selectedElement={selectedElement} onHandlerSelectedCategory={onHandlerSelectedCategory} key={item._id} {...item} />)}
		</nav>
	)
}

ListCategoryStore.propTypes = {
	titleCategory: PropTypes.string.isRequired,
	elements: PropTypes.array,
	subGenres: PropTypes.array,
	onHandlerSelectedCategory: PropTypes.func.isRequired,
	selectedElement: PropTypes.object.isRequired
}

export default ListCategoryStore
