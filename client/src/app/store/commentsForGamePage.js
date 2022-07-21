import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	targetIdGame: null,
	commentsForTheLastWeek: null, // за последние 7 дней
	isLoadingCommentsForTheLastWeek: true,
	errorCommentsForTheLastWeek: null,
	commentsForTheMainWall: null, // для блока
	isLoadingCommentsForTheMainWall: true,
	errorCommentsForTheMainWall: null
}

const commentsForGamePageSlice = createSlice({
	name: "commentsForGamePage",
	initialState,
	reducers: {
		commentsForTheLastWeekRequested(state, action) {
			if (state.targetIdGame !== action.payload) state.targetIdGame = null
			state.errorCommentsForTheLastWeek = null
			state.isLoadingCommentsForTheLastWeek = true
		},
		commentsForTheLastWeekReceived(state, action) {
			const { data, id } = action.payload
			if (state.targetIdGame !== id) state.targetIdGame = id
			state.commentsForTheLastWeek = data
			state.isLoadingCommentsForTheLastWeek = false
		},
		commentsForTheLastWeekRequestField(state, action) {
			state.errorCommentsForTheLastWeek = action.payload
			state.isLoadingCommentsForTheLastWeek = false
		},
		commentsForTheMainWallRequested(state, action) {
			if (state.targetIdGame !== action.payload) state.targetIdGame = null
			state.errorCommentsForTheMainWall = null
			state.isLoadingCommentsForTheMainWall = true
		},
		commentsForTheMainWallReceived(state, action) {
			const { data, id } = action.payload
			if (state.targetIdGame !== id) state.targetIdGame = id
			state.commentsForTheMainWall = data
			state.isLoadingCommentsForTheMainWall = false
		},
		commentsForTheMainWallRequestField(state, action) {
			state.errorCommentsForTheMainWall = action.payload
			state.isLoadingCommentsForTheMainWall = false
		}
	}
})

const { actions, reducer: commentsForGamePageReducer } = commentsForGamePageSlice
const {
	commentsForTheLastWeekRequested,
	commentsForTheLastWeekReceived,
	commentsForTheLastWeekRequestField,
	commentsForTheMainWallRequested,
	commentsForTheMainWallReceived,
	commentsForTheMainWallRequestField
} = actions

// Actions
export function fetchDataCommentsForTheLastWeek(idGame) {
	return async (dispatch) => {
		dispatch(commentsForTheLastWeekRequested(idGame))
		try {
			const commentsArr = await fakeApi.getCommentsForTheLastWeek(idGame)
			const updateComments = await Promise.all(commentsArr.map(async (item) => {
				const rank = await fakeApi.getRankByPoints(item.rankPoints)
				return { ...item, rank }
			}))
			dispatch(commentsForTheLastWeekReceived({ data: updateComments, id: idGame }))
		} catch(err) {
			const { message } = err
			dispatch(commentsForTheLastWeekRequestField(message))
		}
	}
}
export function fetchDataCommentsForTheMainWall(idGame) {
	return async (dispatch) => {
		dispatch(commentsForTheMainWallRequested(idGame))
		try {
			const comments = await fakeApi.getCommentsForTheMainWallByIdNoLastWeek(idGame)
			const updateComments = await Promise.all(comments.map(async (item) => {
				const rank = await fakeApi.getRankByPoints(item.rankPoints)
				return { ...item, rank }
			}))
			dispatch(commentsForTheMainWallReceived({ data: updateComments, id: idGame }))
		} catch(err) {
			const { message } = err
			dispatch(commentsForTheMainWallRequestField(message))
		}
	}
}

// Selectors
export const getDataCommentsForTheLastWeek = () => {
	return (state) => {
		return state.commentsForGamePage.commentsForTheLastWeek
	}
}
export const getStatusLoadingCommentsForTheLastWeek = () => {
	return (state) => {
		return state.commentsForGamePage.isLoadingCommentsForTheLastWeek
	}
}
export const getDataCommentsForTheMainWall = () => {
	return (state) => {
		return state.commentsForGamePage.commentsForTheMainWall
	}
}
export const getStatusLoadingCommentsForTheMainWall = () => {
	return (state) => {
		return state.commentsForGamePage.isLoadingCommentsForTheMainWall
	}
}
export const getTargetIdGameForComments = () => {
	return (state) => {
		return state.commentsForGamePage.targetIdGame
	}
}

export default commentsForGamePageReducer