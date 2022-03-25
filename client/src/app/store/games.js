import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
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
		}
	}
})

const { actions, reducer: gamesReducer } = gamesSlice
const {
	gamesRequested,
	gamesRequestFailed,
	gamesReceived
} = actions


// Actions
export function fetchAllGoodsData() {
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


export default gamesReducer
