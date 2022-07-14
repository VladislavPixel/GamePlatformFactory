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
export function fetchDataComment() {
	return async(dispatch) => {

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
