import React from "react"
import PropTypes from "prop-types"
import ListSubCategoryStore from "./listSubCategoryStore"

const ListCategoryStore = ({ titleCategory, elements, subGenres }) => {
	return (
		<nav className="modal-category__wrap-list-category">
			<h4 className="modal-category__title">{titleCategory}</h4>
			{elements &&
				<ul className="modal-category__list">
					{elements.map(element => <li key={element._id}>{element.name}</li>)}
				</ul>
			}
			{subGenres && subGenres.map(item => <ListSubCategoryStore key={item._id} {...item} />)}
		</nav>
	)
}

ListCategoryStore.propTypes = {
	titleCategory: PropTypes.string.isRequired,
	elements: PropTypes.array,
	subGenres: PropTypes.array
}

export default ListCategoryStore
