import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

export const DEFAULT_SELECTED_CATEGORY = {_id: "all-124", name: "all"}

const initialState = {
	entities: [],
	isLoading: true,
	error: null,
	selectedCategory: DEFAULT_SELECTED_CATEGORY
}

const categoryStoreSlice = createSlice({
	name: "categoryStore",
	initialState,
	reducers: {
		categoryStoreRequested(state) {
			state.isLoading = true
			state.error = null
		},
		categoryStoreReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		categoryStoreRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		categoryStoreSelectedReceived(state, action) {
			state.selectedCategory = action.payload
		}
	}
})

const { actions, reducer: categoryStoreReducer } = categoryStoreSlice
const {
	categoryStoreRequested,
	categoryStoreReceived,
	categoryStoreRequestFailed,
	categoryStoreSelectedReceived
} = actions

// Actions
export function fetchAllCategoryStoreData() {
	return async (dispatch) => {
		dispatch(categoryStoreRequested())
		fakeApi.getCategoryStore()
			.then(data => dispatch(categoryStoreReceived(data)))
			.catch(err => {
				const { message } = err
				dispatch(categoryStoreRequestFailed(message))
			})
	}
}
export function updateCategoryStoreSelected(newCategory) {
	return (dispatch) => {
		dispatch(categoryStoreSelectedReceived(newCategory))
	}
}

// Selectors
export const getIsLoadingCategoryStore = () => {
	return (state) => {
		return state.categoryStore.isLoading
	}
}
export const getCategoryStoreData = () => {
	return (state) => {
		return state.categoryStore.entities
	}
}
export const getSelectedCategoryStore = () => {
	return (state) => {
		return state.categoryStore.selectedCategory
	}
}

export default categoryStoreReducer
