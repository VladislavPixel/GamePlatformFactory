import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	isLoadingGlobal: true, // Для первого раза (первая пачка данных)
	errorGlobal: null,
	isLoadingSubsequent: false, // Последующие запросы данных
	errorForSubsequentRequests: null,
	targerIdGame: null, // Вспомогательные
	entities: {},
	commentsForFirstLoad: null,
	startGroupIndex: 1,
	endGroupIndex: 2,
	isReachedBottom: false
}

const commentsForCommentsPageSlice = createSlice({
	name: "commentsForCommentsPage",
	initialState,
	reducers: {
		// REQUESTED =======================================================================
		commentsForCommentsPageRequestedFirst(state) {
			state.errorGlobal = null
			state.isLoadingGlobal = true
		},
		commentsForCommentsPageRequestedSubsequentCalls(state) {
			state.errorForSubsequentRequests = null
			state.isLoadingSubsequent = true
		},
		// =================================================================================
		commentsForCommentsPageReceived(state, { payload }) {
			const { data, messageQuerySequence, idGame, groupConfig } = payload
			if (groupConfig.direction === "top") {
				groupConfig.valueGroup -= 1
				state.startGroupIndex -= 1
				state.endGroupIndex -= 1
			}
			if (groupConfig.direction === "bottom") state.endGroupIndex += 1
			if (messageQuerySequence === "first") {
				// На случай первой подгрузки данных нам нужно установить дефолтную пачку данных, чтобы иметь возможность обратно ее поставить при размонтировании и последующем монтировании компонента
				state.entities = {}
				if (data.length && !state.commentsForFirstLoad) state.commentsForFirstLoad = data
				state.isLoadingGlobal = false
			}
			// Добавление новой пачки в store-redux
			if (data.length) state.entities[groupConfig.valueGroup] = data
			state.targerIdGame = idGame

			// Удаление ненужных данных, при добавлении новой пачки вниз или вверх(когда мы возвращаемся по скроллу)
			// 1 добавление приводит к одному удалению или сверху или снизу
			if (data.length && groupConfig.direction === "bottom" && groupConfig.valueGroup > 4) {
				const cloneEntities = { ...state.entities }
				delete cloneEntities[state.startGroupIndex]
				state.startGroupIndex += 1
				state.entities = cloneEntities
			}
			if (groupConfig.direction === "top") {
				const cloneEntities = { ...state.entities }
				delete cloneEntities[state.endGroupIndex]
				state.entities = cloneEntities
				state.isReachedBottom = false
			}
			state.isLoadingSubsequent = false
		},
		commentsForCommentsPageUpdatedReachedBottom(state, { payload }) {
			state.isReachedBottom = true
			state.isLoadingSubsequent = false
			if (payload === "first") state.isLoadingGlobal = false
		},
		commentsForCommentsPageReceivedFirstDownload(state, { payload }) {
			// Срабатывает, когда мы уже один раз заходили для получения комментариев игры и у нас была установлена дефолтная пачка, и сейчас user опять заходит на страницу комментариев той же игры
			const bundleObject = {}
			const { commentsForFirstLoad } = state
			if (commentsForFirstLoad) bundleObject[payload] = commentsForFirstLoad
			state.entities = bundleObject
			if (state.isLoadingSubsequent) state.isLoadingSubsequent = false
		},
		// ERRORS ===============================================================================
		commentsForCommentsPageRequestFieldGlobal(state, { payload }) {
			state.errorGlobal = payload
			state.isLoadingGlobal = false
		},
		commentsForCommentsPageRequestFieldSubsequent(state, { payload }) {
			state.errorForSubsequentRequests = payload
			state.isLoadingSubsequent = false
		}
		// ======================================================================================
	}
})

const { actions, reducer: commentsForCommentsPageReducer } = commentsForCommentsPageSlice
const {
	commentsForCommentsPageRequestedFirst,
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
		if (messageQuerySequence === "first") dispatch(commentsForCommentsPageRequestedFirst())
		if (messageQuerySequence === "second") dispatch(commentsForCommentsPageRequestedSubsequentCalls())
		try {
			const groupConfig = directionDownLoad === "top" ?
				{ valueGroup: startGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "bottom" ?
				{ valueGroup: endGroupIndex, direction: directionDownLoad } :
				directionDownLoad === "arbitrary" ?
				{ valueGroup: group, direction: directionDownLoad } : {}

			const data = await fakeApi.fetchCommentsForCommentsPage(config, idGame, groupConfig.valueGroup)

			if (data.length) { // Если пачка пришла, значит по указанным фильтрам данные есть
				dispatch(commentsForCommentsPageReceived({ data, messageQuerySequence, idGame, groupConfig }))

				// на случай, если мы получили данные и их меньше 15 (это максимальный размер пачки), получается, что нет смысла уже запрашивать еще
				if (data.length < 15) dispatch(commentsForCommentsPageUpdatedReachedBottom(messageQuerySequence))
			} else {
				if (!isReachedBottom) dispatch(commentsForCommentsPageUpdatedReachedBottom(messageQuerySequence))

				// На случай, если комментариев нет впринципе у выбранного фильтра
				if (groupConfig.valueGroup === 1) dispatch(commentsForCommentsPageReceived({ data, messageQuerySequence, idGame, groupConfig }))
			}
		} catch (err) {
			const { message } = err
			if (messageQuerySequence === "first") {
				dispatch(commentsForCommentsPageRequestFieldGlobal(message))
			} else {
				dispatch(commentsForCommentsPageRequestFieldSubsequent(message))
			}
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
export const getEndGroupIndexForCommentsPage = () => {
	return (state) => {
		return state.commentsForCommentsPage.endGroupIndex
	}
}

export default commentsForCommentsPageReducer
