import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	searchTxt: ""
}

const searchGamesStore = createSlice({
	name: "searchGamesStore",
	initialState,
	reducers: {
		searchGamesStoreReceived(state, action){
			state.searchTxt = action.payload
		},
		searchGamesStoreReset(state) {
			state.searchTxt = ""
		}
	}
})

const { actions, reducer: searchGamesStoreReducer } = searchGamesStore
const { searchGamesStoreReceived, searchGamesStoreReset } = actions

// Actions
export function updateSearch(data) {
	return (dispatch) => {
		dispatch(searchGamesStoreReceived(data))
	}
}
export function resetSearch() {
	return (dispatch) => {
		dispatch(searchGamesStoreReset())
	}
}

// Selectors
export const getValueSearchGamesStore = () => {
	return (state) => {
		return state.searchGamesStore.searchTxt
	}
}

export default searchGamesStoreReducer
