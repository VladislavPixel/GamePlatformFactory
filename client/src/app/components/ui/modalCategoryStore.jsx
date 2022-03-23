import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Spinner from "../common/spinner"
import LiteMessage from "../common/liteMessage"
import ListCategoryStore from "./listCategoryStore"
import fakeApi from "../../fakeAPI"

const ModalCategoryStore = ({ targetBtn }) => {
	const [categoryStore, setCategoryStore] = useState(null)
	const [isLoadingCategory, setLoadingCategory] = useState(true)
	useEffect(() => {
		fakeApi.getCategoryStore()
			.then(data => setCategoryStore(data))
	}, [])
	useEffect(() => {
		if (categoryStore) {
			setLoadingCategory(false)
		}
	}, [categoryStore])
	return (
		<div className={`navigation-store__category-modal modal-category${targetBtn === "category" ? " active" : ""}`}>
			{
				(isLoadingCategory && <Spinner />) ||
				(categoryStore.length && categoryStore.map(item => <ListCategoryStore key={item._id} {...item} />)) ||
				<LiteMessage title="В настоящее время категории игр недоступны" offer="Вы сможете воспользоваться ими позже" classes="modal-category__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />
			}
		</div>
	)
}

ModalCategoryStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalCategoryStore
