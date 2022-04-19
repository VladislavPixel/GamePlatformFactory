import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
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
		commentsGamesStoreSliderUsersRequested(state) {
			state.errorFetchUsers = null
			state.isLoadingFetchUsers = true
		},
		commentsGamesStoreSliderUsersReceived(state, action) {
			state.dataUsersForCommentsSlider = action.payload
			state.isLoadingFetchUsers = false
		},
		commentsGamesStoreSliderUsersRequestFailed(state, action) {
			state.errorFetchUsers = action.payload
			state.isLoadingFetchUsers = false
		}
	}
})

const { actions, reducer: commentsGamesStoreSliderReducer } = commentsGamesStoreSlider
const {
	commentsGamesStoreSliderRequested,// Для комментариев
	commentsGamesStoreSliderReceived,
	commentsGamesStoreSliderRequestFailed,
	commentsGamesStoreSliderUsersRequested,// Для пользователей, оставивших эти комментарии
	commentsGamesStoreSliderUsersReceived,
	commentsGamesStoreSliderUsersRequestFailed
} = actions

// Actions
export function fetchAllCommentsGamesStoreSliderByArrayGames(arrGames) {
	return async (dispatch) => {
		dispatch(commentsGamesStoreSliderRequested())
		let dataComments
		try {
			dataComments = await fakeApi.getCommentsGamesForSliderStore(arrGames)
			dispatch(commentsGamesStoreSliderReceived(dataComments))
		} catch (err) {
			const { message } = err
			dispatch(commentsGamesStoreSliderRequestFailed(message))
		}
		dispatch(commentsGamesStoreSliderUsersRequested())
		try {
			const dataUsers = await fakeApi.getUsersObjectForSliderStoreComments(dataComments)
			dispatch(commentsGamesStoreSliderUsersReceived(dataUsers))
		} catch (err) {
			const { message } = err
			dispatch(commentsGamesStoreSliderUsersRequestFailed(message))
		}
	}
}

// Selectors
// For Comments =============================================
export const getIsLoadingCommentsGames = () => {
	return (state) => {
		return state.commentsGamesStoreSlider.isLoading
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
// For Users =============================================
export const getStatusLoadingUsersForCommentsSlider = () => {
	return (state) => {
		return state.commentsGamesStoreSlider.isLoadingFetchUsers
	}
}
export const getDataUserForCommentById = (idUser) => {
	return (state) => {
		return state.commentsGamesStoreSlider.dataUsersForCommentsSlider[idUser]
	}
}

export default commentsGamesStoreSliderReducer
