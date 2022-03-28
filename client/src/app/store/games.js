import { createSlice, createAction } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null,
	entitiesTop18: [],
	isLoadingTop18: true
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
			state.isLoadingTop18 = false
		}
	}
})

const { actions, reducer: gamesReducer } = gamesSlice
const {
	gamesRequested,
	gamesRequestFailed,
	gamesReceived,
	gamesTop18Received
} = actions

// AdditionalActions
const gamesTop18Requested = createAction("games/gamesTop18Requested")
const gamesTop18RequestFailed = createAction("games/gamesTop18RequestFailed")

// Actions
export function fetchAllGamesMiddleData() {
	return async (dispatch) => {
		dispatch(gamesRequested())
		fakeApi.getGamesCollectionMiddle()
			.then(data => dispatch(gamesReceived(data)))
			.catch(err => {
				const { message } = err
				dispatch(gamesRequestFailed(message))
			})
	}
}
export function fetchAllGamesTop18() {
	return async (dispatch) => {
		dispatch(gamesTop18Requested())
		fakeApi.getTopGames()
			.then(data => dispatch(gamesTop18Received(data)))
			.catch(err => {
				const { message } = err
				dispatch(gamesTop18RequestFailed(message))
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
export const getIsLoadingTop18Games = () => {
	return (state) => {
		return state.games.isLoadingTop18
	}
}
export const getDataTop18Games = () => {
	return (state) => {
		return state.games.entitiesTop18
	}
}

export default gamesReducer
