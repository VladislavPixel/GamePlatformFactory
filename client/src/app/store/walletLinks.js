import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const walletLinks = createSlice({
	name: "walletLinks",
	initialState,
	reducers: {
		walletLinksRequested(state) {
			state.isLoading = true
			state.error = null
		},
		walletLinksReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		walletLinksRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: walletLinksReducer } = walletLinks
const {
	walletLinksRequested,
	walletLinksReceived,
	walletLinksRequestFailed
} = actions

// Actions
export function fetchAllDataWalletLinks() {
	return async (dispatch) => {
		dispatch(walletLinksRequested())
		fakeApi.getStoreWalletLinks()
			.then(data => dispatch(walletLinksReceived(data)))
			.catch(err => {
				const { message } = err
				dispatch(walletLinksRequestFailed(message))
			})
	}
}

// Selectors
export const getIsLoadingWalletLinks = () => {
	return (state) => {
		return state.walletLinks.isLoading
	}
}
export const getDataWalletLinks = () => {
	return (state) => {
		return state.walletLinks.entities
	}
}

export default walletLinksReducer