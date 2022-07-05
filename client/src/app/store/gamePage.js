import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	essence: {},
	error: null,
	isLoading: true,
	targerId: null
}

const gamePageSlice = createSlice({
	name: "gamePage",
	initialState,
	reducers: {
		gamePageRequested(state) {
			state.isLoading = true
			state.error = null
		},
		gamePageReceived(state, action) {
			state.essence[action.payload.idMiddleParent] = action.payload
			state.isLoading = false
		},
		gamePageRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		gamePageStoppingDownloadProcess(state) {
			state.isLoading = false
		},
		gamePageReceivedTargetId(state, action) {
			state.targerId = action.payload
		},
		gamePageCleared(state) {
			state.essence = {}
		}
	}
})

const { actions, reducer: gamePageReducer } = gamePageSlice
const {
	gamePageRequested,
	gamePageReceived,
	gamePageRequestField,
	gamePageStoppingDownloadProcess,
	gamePageReceivedTargetId,
	gamePageCleared
} = actions

// Actions
export function fetchDataGame(idGame) {
	return async (dispatch) => {
		dispatch(gamePageReceivedTargetId(idGame))
		dispatch(gamePageRequested())
		fakeApi.getBigDataGameById(idGame)
			.then(data => {
				if (data) {
					dispatch(gamePageReceived(data))
				} else {
					dispatch(gamePageStoppingDownloadProcess())
				}
			})
			.catch(err => {
				const { message } = err
				dispatch(gamePageRequestField(message))
			})
	}
}
export function clearStoreForGamePage() {
	return (dispatch) => {
		dispatch(gamePageCleared())
	} 
}

// Selectors
export const getDataGameById = (idGame) => {
	return (state) => {
		return state.gamePage.essence[idGame]
	}
}
export const getStatusFetchData = () => {
	return (state) => {
		return state.gamePage.isLoading
	}
}
export const getTargetIdElement = () => {
	return (state) => {
		return state.gamePage.targerId
	}
}
export const getNumberKeysEssenceGames = () => {
	return (state) => {
		return Object.keys(state.gamePage.essence).length
	}
}

export default gamePageReducer
