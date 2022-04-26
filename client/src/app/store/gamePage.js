import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	essence: {},
	error: null,
	fetchStatus: "didNotSend"
}

const gamePageSlice = createSlice({
	name: "gamePage",
	initialState,
	reducers: {
		gamePageRequested(state) {
			state.fetchStatus = "didNotSend"
			state.error = null
		},
		gamePageReceived(state, action) {
			state.essence[action.payload.idMiddleParent] = action.payload
			state.fetchStatus = "success"
		},
		gamePageSetStatus(state) {
			state.fetchStatus = "dataGameNotFound"
		},
		gamePageRequestField(state, action) {
			state.error = action.payload
			state.fetchStatus = "dataGameNotFound"
		}
	}
})

const { actions, reducer: gamePageReducer } = gamePageSlice
const { gamePageRequested, gamePageReceived, gamePageRequestField, gamePageSetStatus } = actions

// Actions
export function fetchDataGame(idGame) {
	return async (dispatch) => {
		dispatch(gamePageRequested())
		fakeApi.getBigDataGameById(idGame)
			.then(data => {
				if (data) {
					dispatch(gamePageReceived(data))
				} else {
					dispatch(gamePageSetStatus())
				}
			})
			.catch(err => {
				const { message } = err
				dispatch(gamePageRequestField(message))
			})
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
		return state.gamePage.fetchStatus
	}
}

export default gamePageReducer
