import React from "react"
import PropTypes from "prop-types"
import ListSubCategoryStore from "./listSubCategoryStore"
import { useDispatch, useSelector } from "react-redux"
import { updateCategoryStoreSelected, getSelectedCategoryStore } from "../../store/categoryStore"

const ListCategoryStore = ({ data }) => {
	const dispatch = useDispatch()
	const handlerSelectedCategory = (newCategory) => dispatch(updateCategoryStoreSelected(newCategory))
	const selectedElement = useSelector(getSelectedCategoryStore())
	return (
		data.map(el => (
			<nav key={el._id} className="modal-category__wrap-list-category">
				<h4 className="modal-category__title">{el.titleCategory}</h4>
				{el.elements &&
					<ul className="modal-category__list">
						{el.elements.map(element => <li className={selectedElement.name === element.name ? "active" : ""} onClick={() => handlerSelectedCategory(element)} key={element._id}>{element.name}</li>)}
					</ul>
				}
				{el.subGenres && el.subGenres.map(item => <ListSubCategoryStore selectedElement={selectedElement} onHandlerSelectedCategory={handlerSelectedCategory} key={item._id} {...item} />)}
			</nav>
		))
	)
}

ListCategoryStore.propTypes = {
	data: PropTypes.array.isRequired
}

export default ListCategoryStore
