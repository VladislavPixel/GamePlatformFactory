import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	isLoading: true,
	error: null,
	entitiesDiscussions: [],
	data: {},
	idComment: null
}

const commentPageSlice = createSlice({
	name: "commentPage",
	initialState,
	reducers: {
		commentPageRequested(state) {
			state.isLoading = true
			state.error = null
		},
		commentPageReceived(state, action) {
			const { id, discussions, data } = action.payload
			state.idComment = id
			state.entitiesDiscussions = discussions
			state.data = data
			state.isLoading = false
		},
		commentPageRequestFailed(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		commentPageDisablingLoader(state) {
			state.idComment = null
			state.isLoading = false
		}
	}
})

const { actions, reducer: commentPageReducer } = commentPageSlice
const {
	commentPageRequested,
	commentPageReceived,
	commentPageRequestFailed,
	commentPageDisablingLoader
} = actions

// Actions
export function fetchDataComment(idComment) {
	return async(dispatch, getState) => {
		dispatch(commentPageRequested())
		try {
			const dataComment = await fakeApi.getCommentById(idComment)
			if (dataComment) {
				const authorComment = await fakeApi.getUserById(dataComment.userId)
				const arrGamesMiddleData = getState().games.entities
				let targetGame
				if (arrGamesMiddleData.length) {
					targetGame = arrGamesMiddleData.find(game => game._id === dataComment.idGame)
				} else {
					targetGame = await fakeApi.getGameById(dataComment.idGame)
				}
				const discussions = await fakeApi.getAllDiscussionsById(dataComment._id)
				dispatch(commentPageReceived({
					id: dataComment._id,
					discussions,
					data: { commentData: dataComment, authorData: authorComment, gameData: targetGame }
				}))
			} else {
				dispatch(commentPageDisablingLoader())
			}
		} catch (err) {
			const { message } = err
			dispatch(commentPageRequestFailed(message))
		}
	}
}

// Selectors
export const getLoadingStatusForCommentPage = () => {
	return (state) => {
		return state.commentPage.isLoading
	}
}
export const getErrorForCommentPage = () => {
	return (state) => {
		return state.commentPage.error
	}
}
export const getEntitiesDiscussionsForCommentPage = () => {
	return (state) => {
		return state.commentPage.entitiesDiscussions
	}
}
export const getDataForCommentPage = () => {
	return (state) => {
		return state.commentPage.data
	}
}
export const getIdCommentForCommentPage = () => {
	return (state) => {
		return state.commentPage.idComment
	}
}

export default commentPageReducer
