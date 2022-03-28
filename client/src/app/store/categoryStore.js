import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
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
		}
	}
})

const { actions, reducer: categoryStoreReducer } = categoryStoreSlice
const {
	categoryStoreRequested,
	categoryStoreReceived,
	categoryStoreRequestFailed
} = actions

// Actions
export function fetchAllCategoryStoreData() {
	return async (dispatch) => {
		dispatch(categoryStoreRequested)
		fakeApi.getCategoryStore()
			.then(data => dispatch(categoryStoreReceived(data)))
			.catch(err => {
				const { message } = err
				dispatch(categoryStoreRequestFailed(message))
			})
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

export default categoryStoreReducer
