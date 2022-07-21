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
			// Получаем сам комментарий (самый главный, чья страница)
			const dataComment = await fakeApi.getCommentById(idComment)
			if (dataComment) {
				// Получаем автора этого комментария
				const authorComment = await fakeApi.getUserById(dataComment.userId)
				const rankForAuthorComment = await fakeApi.getRankByPoints(authorComment.rankPoints)
				const arrGamesMiddleData = getState().games.entities
				// Получаем игру, на которую был оставлен главный комментарий
				let targetGame
				if (arrGamesMiddleData.length) {
					targetGame = arrGamesMiddleData.find(game => game._id === dataComment.idGame)
				} else {
					targetGame = await fakeApi.getGameById(dataComment.idGame)
				}
				// Получаем сущности дискуссий на главный комментарий
				const discussionsIntermediate = await fakeApi.getAllDiscussionsById(dataComment._id)
				// Склеиваем дискуссии с данными их авторов
				const discussions = await Promise.all(
					discussionsIntermediate.map(async (discus) => {
					const user = await fakeApi.getUserById(discus.userId)
					// к каждой дискуссии мы получаем также ранг ее автора
					const rank = await fakeApi.getRankByPoints(user.rankPoints)
					return { ...user, ...discus, rank }
				}))
				discussions.sort((dis1, dis2) => {
					// Сортируем дискуссии, те, которые позже - выше
					if (dis1.date > dis2.date) return -1
					if (dis1.date < dis2.date) return 1
					return 0
				})
				// Записываем все в store
				dispatch(commentPageReceived({
					id: dataComment._id,
					discussions,
					data: { commentData: dataComment, authorData: {...authorComment, rank: rankForAuthorComment }, gameData: targetGame }
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
