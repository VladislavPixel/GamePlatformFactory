import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	entitiesTop18: [],
	isLoading: true,
	error: null,
	sortedBy: "highRatingPriority",
	scopeSliderStore: null,
	scopeSliderLoading: true,
	scopeSliderError: null
}

const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {
		gamesRequested(state) {
			state.isLoading = true
			state.error = null
		},
		gamesReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		gamesRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		gamesTop18Received(state, action) {
			state.entitiesTop18 = action.payload
		},
		gamesStatusSortedReceived(state, action) {
			state.sortedBy = action.payload
		},
		scopeSliderDataRequested(state) {
			state.scopeSliderError = null
			state.scopeSliderLoading = true
		},
		scopeSliderDataReceived(state, action) {
			state.scopeSliderStore = action.payload
			state.scopeSliderLoading = false
		},
		scopeSliderDataRequestFailed(state, action) {
			state.scopeSliderError = action.payload
			state.scopeSliderLoading = false
		}
	}
})

const { actions, reducer: gamesReducer } = gamesSlice
const {
	gamesRequested,
	gamesRequestFailed,
	gamesReceived,
	gamesTop18Received,
	gamesStatusSortedReceived,
	scopeSliderDataRequested,
	scopeSliderDataReceived,
	scopeSliderDataRequestFailed
} = actions

// Actions
export function fetchAllGamesMiddleData() {
	return async (dispatch) => {
		dispatch(gamesRequested())
		fakeApi.getGamesCollectionMiddle()
			.then(data => {
				dispatch(gamesReceived(data))
				const cloneDataMiddleGames = [...data]
				cloneDataMiddleGames.sort((a, b) => {
					if (a.rate > b.rate) return -1
					if (a.rate < b.rate) return 1
					return 0
				})
				let arrayTop18 = null
				if (cloneDataMiddleGames.length <= 18) {
					arrayTop18 = cloneDataMiddleGames
				} else {
					arrayTop18 = cloneDataMiddleGames.filter((item, index) => index <= 17)
				}
				dispatch(gamesTop18Received(arrayTop18))
			})
			.catch(err => {
				const { message } = err
				dispatch(gamesRequestFailed(message))
			})
	}
}
export function setStatusSortedGames(newStatus) {
	return (dispatch, getState) => {
		if (getState().games.sortedBy !== newStatus) {
			dispatch(gamesStatusSortedReceived(newStatus))
		}
	}
}
export function fetchScopeSliderData() {
	return (dispatch) => {
		dispatch(scopeSliderDataRequested())
		fakeApi.getScopeSliderData()
			.then(data => {
				dispatch(scopeSliderDataReceived(data))
			})
			.catch(err => {
				const { message } = err
				dispatch(scopeSliderDataRequestFailed(message))
			})
	}
}

// Selectors
export const getIsLoadingGamesMiddle = () => {
	return (state) => {
		return state.games.isLoading
	}
}
export const getDataGamesMiddle = () => {
	return (state) => {
		return state.games.entities
	}
}
export const getDataTop18Games = () => {
	return (state) => {
		return state.games.entitiesTop18
	}
}
export const getStatusGamesSortedBy = () => {
	return (state) => {
		return state.games.sortedBy
	}
}
export const getStatusLoaderScopeSlider = () => {
	return (state) => {
		return state.games.scopeSliderLoading
	}
}
export const getDataScopeSlider = () => {
	return (state) => {
		return state.games.scopeSliderStore
	}
}

export default gamesReducer
