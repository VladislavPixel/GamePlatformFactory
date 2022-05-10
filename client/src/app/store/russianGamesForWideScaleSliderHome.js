import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const gamesSlice = createSlice({
	name: "russianGamesForWideScaleSliderHome",
	initialState,
	reducers: {
		rusGamesFetchDataRequested(state) {
			state.error = null
			state.isLoading = true
		},
		rusGamesFetchDataReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		rusGamesFetchDataRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: russianGamesForWideScaleSliderHomeReducer } = gamesSlice
const { rusGamesFetchDataRequestField, rusGamesFetchDataRequested, rusGamesFetchDataReceived } = actions

// Actions
export function fetchDataRussianGamesForWideScale() {
	return async (dispatch) => {
		dispatch(rusGamesFetchDataRequested())
		let arrIdRusGames = null
		let result = []
		try {
			arrIdRusGames = await fakeApi.getArrayRussianGames()
		} catch (err) {
			const { message } = err
			rusGamesFetchDataRequestField(message)
		}
		if (arrIdRusGames.length > 3) arrIdRusGames = arrIdRusGames.slice(0, 4)
		try {
			const dataLite = await fakeApi.getVideoGamesCollectionLite()
			for (let m = 0; m < arrIdRusGames.length; m++) {
				for (let n = 0; n < dataLite.length; n++) {
					if (arrIdRusGames[m].idMiddleParent === dataLite[n].idMiddleParent){
						result.push(...dataLite[n].homePageWideScale)
						break
					}
				}
			}
			dispatch(rusGamesFetchDataReceived(result))
		} catch (err) {
			const { message } = err
			rusGamesFetchDataRequestField(message)
		}
	}
}

// Selectors
export const getStatusLoaderRusGamesWideScaleHome = () => {
	return (state) => {
		return state.russianGamesForWideScaleSliderHome.isLoading
	}
}
export const getDataRusGamesForWideScaleHome = () => {
	return (state) => {
		return state.russianGamesForWideScaleSliderHome.entities
	}
}

export default russianGamesForWideScaleSliderHomeReducer
