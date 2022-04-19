import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	entitiesCountries: [],
	isLoading: true,
	error: null
}

const countriesSlice = createSlice({
	name: "countries",
	initialState,
	reducers: {
		countriesRequested(state) {
			state.isLoading = true
			state.error = null
		},
		countriesReceived(state, action) {
			state.entitiesCountries = action.payload
			state.isLoading = false
		},
		countriesRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: countriesReducer } = countriesSlice
const { countriesRequested, countriesReceived, countriesRequestFailed } = actions

// Actions
export function fetchAllCountriesData() {
	return (dispatch) => {
		dispatch(countriesRequested())
		fakeApi.getCountries()
			.then(data => {
				dispatch(countriesReceived(data))
			})
			.catch(err => {
				const { message } = err
				dispatch(countriesRequestFailed(message))
			})
	}
}

// Selectors
export const getStatusLoaderCountries = () => {
	return (state) => {
		return state.countries.isLoading
	}
}
export const getDataCountries = () => {
	return (state) => {
		return state.countries.entitiesCountries
	}
}


export default countriesReducer
