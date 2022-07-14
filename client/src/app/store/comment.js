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

	}
})

const { actions, reducer: commentPageReducer } = commentPageSlice
const {

} = actions

// Actions
export function fetchDataComment(idComment) {
	return async(dispatch, getState) => {
		try {
			const dataComment = await fakeApi.getCommentById(idComment)
			const authorComment = await fakeApi.getUserById(dataComment.userId)
			const arrGamesMiddleData = getState().games.entities
			let targetGame
			if (arrGamesMiddleData.length) {
				targetGame = arrGamesMiddleData.find(game => game._id === dataComment.idGame)
			} else {
				targetGame = await fakeApi.getGameById(dataComment.idGame)
			}
			console.log(dataComment, "Data comment")
			console.log(authorComment, "AuthorComment")
			console.log(targetGame, "Middle game")
		} catch (err) {
			const { message } = err
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
