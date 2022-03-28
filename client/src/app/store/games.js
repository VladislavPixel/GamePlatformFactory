import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	entitiesTop18: [],
	isLoading: true,
	error: null,
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

export default gamesReducer
