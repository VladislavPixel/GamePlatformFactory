import { createSlice } from "@reduxjs/toolkit"
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null,
	dataUsersForCommentsSlider: {},
	errorFetchUsers: null,
	isLoadingFetchUsers: true
}

const commentsGamesStoreSlider = createSlice({
	name: "commentsGamesStoreSlider",
	initialState,
	reducers: {
		commentsGamesStoreSliderRequested(state) {
			state.isLoading = true
			state.error = null
		},
		commentsGamesStoreSliderReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		commentsGamesStoreSliderRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		commentsGamesStoreSliderUsersRequestFailed(state, action) {
			state.errorFetchUsers = action.payload
			state.isLoadingFetchUsers = false
		}
	}
})

const { actions, reducer: commentsGamesStoreSliderReducer } = commentsGamesStoreSlider
const {
	commentsGamesStoreSliderRequested,
	commentsGamesStoreSliderReceived,
	commentsGamesStoreSliderRequestFailed,
	commentsGamesStoreSliderUsersRequestFailed
} = actions

// Actions
export function fetchAllCommentsGamesStoreSliderByArrayGames(arrGames) {
	return async (dispatch, getState) => {
		dispatch(commentsGamesStoreSliderRequested())
		fakeApi.getCommentsGamesForSliderStore(arrGames)
			.then(data => {
				dispatch(commentsGamesStoreSliderReceived(data))
				fakeApi.getUsersObjectForSliderStoreComments(data) // Получение комментариев
					.then(dataUsers => {
						
					})
					.catch(err => {
						const { message } = err
						dispatch(commentsGamesStoreSliderUsersRequestFailed(message))
					})
			})
			.catch(err => {
				const { message } = err
				dispatch(commentsGamesStoreSliderRequestFailed(message))
			})
		console.log(getState().commentsGamesStoreSlider, "STET")
		
	}
}

// Selectors
export const getIsLoadingCommentsGames = () => {
	return (state) => {
		return state.commentsGamesStoreSlider.isLoading
	}
}
export const getCommentsGamesData = () => {
	return (state) => {
		return state.commentsGamesStoreSlider.entities
	}
}
export const getArrayCommentsByIdGames = (arrayGames) => {
	return (state) => {
		const arrayComments = []
		for (let i = arrayGames.length - 1; i >= 0; i--) {
			const arrayCommentsForGame = state.commentsGamesStoreSlider.entities.filter(comment => arrayGames[i]._id === comment.idGame)
			arrayComments.push(arrayCommentsForGame)
		}
		return arrayComments
	}
}

export default commentsGamesStoreSliderReducer
