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
	isLoadingSubsequent: false,
	startGroupIndex: 1,
	endGroupIndex: 2
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
			const { data, messageQuerySequence, idGame, groupConfig } = action.payload
			if (messageQuerySequence === "first") {
				state.entities = {}
				if (data.length && !state.commentsForFirstLoad) state.commentsForFirstLoad = data
				state.isLoadingGlobal = false
			}
			if (data.length) state.entities[groupConfig.valueGroup] = data
			state.targerIdGame = idGame
			if (groupConfig.direction === "top") state.startGroupIndex += 1
			if (groupConfig.direction === "bottom") state.endGroupIndex += 1
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

const { actions, reducer: commentsForCommentsPageReducer } = commentsForCommentsPageSlice
const {
	commentsForCommentsPageRequestedSubsequentCalls,
	commentsForCommentsPageReceived,
	commentsForCommentsPageReceivedFirstDownload,
	commentsForCommentsPageRequestFieldGlobal,
	commentsForCommentsPageRequestFieldSubsequent
} = actions

// Actions
export function fetchDataCommentsForCommentsPage(config, messageQuerySequence, idGame, directionDownLoad, group) {
	return async (dispatch, getState) => {
		if (messageQuerySequence === "second") dispatch(commentsForCommentsPageRequestedSubsequentCalls())
		try {
			console.log("Запрашиваемая пачка под номером: ", group)
			const { startGroupIndex, endGroupIndex } = getState().commentsForCommentsPage
			const groupConfig = directionDownLoad === "top" ?
				{ valueGroup: startGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "bottom" ?
				{ valueGroup: endGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "arbitrary" ?
				{ valueGroup: group, direction: directionDownLoad } : {}
			const data = await fakeApi.fetchCommentsForCommentsPage(config, idGame, groupConfig.valueGroup)
			dispatch(commentsForCommentsPageReceived({ data, messageQuerySequence, idGame, groupConfig }))
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
