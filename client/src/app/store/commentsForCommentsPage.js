import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	targerIdGame: null,
	isLoadingGlobal: true,
	errorGlobal: null,
	entities: {},
	commentsForFirstLoad: null,
	errorForSubsequentRequests: null, // Последующие запросы данных
	isLoadingSubsequent: false
}

const commentsForCommentsPageSlice = createSlice({
	name: "commentsForCommentsPage",
	initialState,
	reducers: {
		commentsForCommentsPageRequestedSubsequentCalls(state) {
			state.errorForSubsequentRequests = null
			state.isLoadingSubsequent = true
		},
		commentsForCommentsPageReceived(state, action) {
			const { data, messageQuerySequence, group, idGame } = action.payload
			if (messageQuerySequence === "first") {
				state.entities = {}
				if (data.length) state.commentsForFirstLoad = data
				state.isLoadingGlobal = false
			}
			if (data.length) state.entities[group] = data
			state.targerIdGame = idGame
			state.isLoadingSubsequent = false
		},
		commentsForCommentsPageReceivedFirstDownload(state, action) {
			const bundleObject = {}
			const { commentsForFirstLoad } = state
			if (commentsForFirstLoad) bundleObject[action.payload] = commentsForFirstLoad
			state.entities = bundleObject
			if (state.isLoadingSubsequent) state.isLoadingSubsequent = false
		},
		commentsForCommentsPageRequestFieldGlobal(state, action) {
			state.errorGlobal = action.payload
			state.isLoadingGlobal = false
		},
		commentsForCommentsPageRequestFieldSubsequent(state, action) {
			state.errorForSubsequentRequests = action.payload
			state.isLoadingSubsequent = false
		}
	}
})

const { actions, reducer:commentsForCommentsPageReducer } = commentsForCommentsPageSlice
const {
	commentsForCommentsPageRequestedSubsequentCalls,
	commentsForCommentsPageReceived,
	commentsForCommentsPageReceivedFirstDownload,
	commentsForCommentsPageRequestFieldGlobal,
	commentsForCommentsPageRequestFieldSubsequent
} = actions

// Actions
export function fetchDataCommentsForCommentsPage(config, messageQuerySequence, group, idGame) {
	return async (dispatch) => {
		if (messageQuerySequence === "second") dispatch(commentsForCommentsPageRequestedSubsequentCalls())
		try {
			const data = await fakeApi.fetchCommentsForCommentsPage(config, group, idGame)
			console.log(data, "ЕЩЕ ОДНА ПАЧКА", group)
			dispatch(commentsForCommentsPageReceived({ data, messageQuerySequence, group, idGame }))
		} catch (err) {
			const { message } = err
			if (messageQuerySequence === "first") {
				dispatch(commentsForCommentsPageRequestFieldGlobal(message))
				return
			}
			dispatch(commentsForCommentsPageRequestFieldSubsequent(message))
		}
	}
}
export function setDataCommentsOnFirstDownload(group) {
	return (dispatch) => {
		dispatch(commentsForCommentsPageReceivedFirstDownload(group))
	}
}
// Selectors
export const getTargetIdGameForCommentsPage = () => {
	return (state) => {
		return state.commentsForCommentsPage.targerIdGame
	}
}
export const getStatusGlobalLoaderForCommentsPage = () => {
	return (state) => {
		return state.commentsForCommentsPage.isLoadingGlobal
	}
}
export const getErrorGlobalForCommentsPage = () => {
	return (state) => {
		return state.commentsForCommentsPage.errorGlobal
	}
}
export const getAllDataComments = () => {
	return (state) => {
		return state.commentsForCommentsPage.entities
	}
}
export const getDataCommentsForFirstLoad = () => {
	return (state) => {
		return state.commentsForCommentsPage.commentsForFirstLoad
	}
}
export const getStatusLoaderForSubsequentCalls = () => {
	return (state) => {
		return state.commentsForCommentsPage.isLoadingSubsequent
	}
}


export default commentsForCommentsPageReducer
