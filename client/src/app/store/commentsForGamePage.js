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
		commentsForTheLastWeekRequested(state) {
			state.targetIdGame = null
			state.errorCommentsForTheLastWeek = null
			state.isLoadingCommentsForTheLastWeek = true
		},
		commentsForTheLastWeekReceived(state, action) {
			const { data, id } = action.payload
			state.targetIdGame = id
			state.commentsForTheLastWeek = data
			state.isLoadingCommentsForTheLastWeek = false
		},
		commentsForTheLastWeekRequestField(state, action) {
			state.errorCommentsForTheLastWeek = action.payload
			state.isLoadingCommentsForTheLastWeek = false
		}
	}
})

const { actions, reducer: commentsForGamePageReducer } = commentsForGamePageSlice
const {
	commentsForTheLastWeekRequested,
	commentsForTheLastWeekReceived,
	commentsForTheLastWeekRequestField
} = actions

// Actions
export function fetchDataCommentsForTheLastWeek(idGame) {
	return async (dispatch) => {
		dispatch(commentsForTheLastWeekRequested())
		try {
			const commentsArr = await fakeApi.getCommentsForTheLastWeek(idGame)
			dispatch(commentsForTheLastWeekReceived({ data: commentsArr, id: idGame }))
		} catch(err) {
			const { message } = err
			dispatch(commentsForTheLastWeekRequestField(message))
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