import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const commentsGames = createSlice({
	name: "commentsGames",
	initialState,
	reducers: {
		commentsGamesRequested(state) {
			state.isLoading = true
			state.error = null
		},
		commentsGamesReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		commentsGamesRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: commentsGamesReducer } = commentsGames
const {
	commentsGamesRequested,
	commentsGamesReceived,
	commentsGamesRequestFailed
} = actions

// Actions
export function fetchAllCommentsGamesData() {
	return async (dispatch) => {
		dispatch(commentsGamesRequested())
		fakeApi.getCommentsGames()
			.then(data => dispatch(commentsGamesReceived(data)))
			.catch(err => {
				const { message } = err
				dispatch(commentsGamesRequestFailed(message))
			})
	}
}

// Selectors
export const getIsLoadingCommentsGames = () => {
	return (state) => {
		return state.commentsGames.isLoading
	}
}
export const getCommentsGamesData = () => {
	return (state) => {
		return state.commentsGames.entities
	}
}
export const getArrayCommentsByIdGames = (arrayGames) => {
	return (state) => {
		const arrayComments = []
		for (let i = arrayGames.length - 1; i >= 0; i--) {
			const arrayCommentsForGame = state.commentsGames.entities.filter(comment => arrayGames[i]._id === comment.idGame)
			arrayComments.push(arrayCommentsForGame)
		}
		return arrayComments
	}
}

export default commentsGamesReducer
