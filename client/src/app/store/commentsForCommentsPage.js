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
	endGroupIndex: 2,
	isReachedBottom: false
}

const commentsForCommentsPageSlice = createSlice({
	name: "commentsForCommentsPage",
	initialState,
	reducers: {
		commentsForCommentsPageRequestedSubsequentCalls(state, { payload }) {
			state.errorForSubsequentRequests = null
			if (!state.isReachedBottom && payload !== "bottom") state.isLoadingSubsequent = true
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
			if (data.length && groupConfig.direction === "bottom" && groupConfig.valueGroup > 4) {
				const cloneEntities = { ...state.entities }
				delete cloneEntities[state.startGroupIndex]
				state.startGroupIndex += 1
				state.entities = cloneEntities
			}
			state.isLoadingSubsequent = false
		},
		commentsForCommentsPageUpdatedReachedBottom(state) {
			state.isReachedBottom = true
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
	commentsForCommentsPageUpdatedReachedBottom,
	commentsForCommentsPageRequestFieldGlobal,
	commentsForCommentsPageRequestFieldSubsequent
} = actions

// Actions
export function fetchDataCommentsForCommentsPage(config, messageQuerySequence, idGame, directionDownLoad, group) {
	return async (dispatch, getState) => {
		const { startGroupIndex, endGroupIndex, isReachedBottom } = getState().commentsForCommentsPage
		if (messageQuerySequence === "second") dispatch(commentsForCommentsPageRequestedSubsequentCalls(directionDownLoad))
		try {
			const groupConfig = directionDownLoad === "top" ?
				{ valueGroup: startGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "bottom" ?
				{ valueGroup: endGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "arbitrary" ?
				{ valueGroup: group, direction: directionDownLoad } : {}
			const data = await fakeApi.fetchCommentsForCommentsPage(config, idGame, groupConfig.valueGroup)
			if (data.length) {
				dispatch(commentsForCommentsPageReceived({ data, messageQuerySequence, idGame, groupConfig }))
			} else if (!data.length && !isReachedBottom){
				console.log("Устанавливаю дно")
				dispatch(commentsForCommentsPageUpdatedReachedBottom())
			}
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
export const getStatusReachedBottom = () => {
	return (state) => {
		return state.commentsForCommentsPage.isReachedBottom
	}
}

export default commentsForCommentsPageReducer
