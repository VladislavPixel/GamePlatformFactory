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
	isLoadingSubsequent: true
}

const commentsForCommentsPageSlice = createSlice({
	name: "commentsForCommentsPage",
	initialState,
	reducers: {
		commentsForCommentsPageReceived(state, action) {
			const { data, messageQuerySequence, group, idGame } = action.payload
			if (data.length) state.entities[group] = data
			if (messageQuerySequence === "first") {
				if (data.length) state.commentsForFirstLoad = data
				state.isLoadingGlobal = false
			}
			state.targerIdGame = idGame
		},
		commentsForCommentsPageReceivedFirstDownload(state, action) {
			const bundleObject = {}
			const { commentsForFirstLoad } = state
			if (commentsForFirstLoad) bundleObject[action.payload] = commentsForFirstLoad
			state.entities = bundleObject
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
	commentsForCommentsPageReceived,
	commentsForCommentsPageReceivedFirstDownload,
	commentsForCommentsPageRequestFieldGlobal,
	commentsForCommentsPageRequestFieldSubsequent
} = actions

// Actions
export function fetchDataCommentsForCommentsPage(config, messageQuerySequence, group, idGame) {
	return async (dispatch) => {
		try {
			const data = await fakeApi.fetchCommentsForCommentsPage(config, group, idGame)
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


export default commentsForCommentsPageReducer
