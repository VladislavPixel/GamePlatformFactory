import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import LiteMessage from "../common/liteMessage"
import ListCategoryStore from "./listCategoryStore"
import { getIsLoadingCategoryStore, fetchAllCategoryStoreData, getCategoryStoreData } from "../../store/categoryStore"
import withLoading from "../HOC/withLoading"
import withMessage from "../HOC/withMessage"

const ModalCategoryStore = ({ targetBtn, onHandlerSelectedCategory, selectedElement }) => {
	const dispatch = useDispatch()
	const isLoadingCategoryStore = useSelector(getIsLoadingCategoryStore())
	const categoryStore = useSelector(getCategoryStoreData())
	const ListCategoryStoreWithMessage = withMessage(<ListCategoryStore data={categoryStore} selectedElement={selectedElement} onHandlerSelectedCategory={onHandlerSelectedCategory} />, <LiteMessage title="В настоящее время категории игр недоступны" offer="Вы сможете воспользоваться ими позже" classes="modal-category__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />, categoryStore.length)
	const ListCategoryStoreWithMessageWithLoading = withLoading(ListCategoryStoreWithMessage, isLoadingCategoryStore)
	useEffect(() => {
		if (isLoadingCategoryStore) dispatch(fetchAllCategoryStoreData())
	}, [])
	return (
		<div className={`navigation-store__category-modal modal-category${targetBtn === "category" ? " active" : ""}`}>
			<ListCategoryStoreWithMessageWithLoading />
		</div>
	)
}

ModalCategoryStore.propTypes = {
	targetBtn: PropTypes.string.isRequired,
	onHandlerSelectedCategory: PropTypes.func.isRequired,
	selectedElement: PropTypes.object.isRequired
}

export default ModalCategoryStore
