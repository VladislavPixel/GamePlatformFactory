import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const usersTop100DataSlice = createSlice({
	name: "usersTop100Data",
	initialState,
	reducers: {
		usersTop100DataRequested(state) {
			state.error = null
			state.isLoading = true
		},
		usersTop100DataRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer:usersTop100DataReducer } = usersTop100DataSlice
const {
	usersTop100DataRequested,
	usersTop100DataRequestFailed
} = actions

// Actions
export function fetchDataUsersTop100() {
	return (dispatch) => {
		dispatch(usersTop100DataRequested())
		try {
			// Логика запроса
		} catch (err) {
			const { message } = err
			dispatch(usersTop100DataRequestFailed(message))
		}
	}
}

// Selectors
export const getStatusLoaderUsersTop100Data = () => {
	return (state) => {
		return state.usersTop100Data.isLoading
	}
}
export const getErrorForUsersTop100Data = () => {
	return (state) => {
		return state.usersTop100Data.error
	}
}
export const getDataUsersTop100 = () => {
	return (state) => {
		return state.usersTop100Data.entities
	}
}

export default usersTop100DataReducer