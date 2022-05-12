import { createSlice } from "@reduxjs/toolkit"

// Auxiliary
import fakeApi from "../fakeAPI"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
}

const gamesRateGallerySliderForHomeSlice = createSlice({
	name: "gamesRateGallerySliderForHome",
	initialState,
	reducers: {
		gamesRateGallerySliderForHomeRequested(state) {
			state.error = null
			state.isLoading = true
		},
		gamesRateGallerySliderForHomeReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		gamesRateGallerySliderForHomeRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

const { actions, reducer: gamesRateGallerySliderForHomeReducer } = gamesRateGallerySliderForHomeSlice
const {
	gamesRateGallerySliderForHomeRequested,
	gamesRateGallerySliderForHomeReceived,
	gamesRateGallerySliderForHomeRequestField
} = actions

// Actions
export function fetchDataRateGallerySliderForHome() {
	return async (dispatch, getState) => {
		const arrTop18Data = getState().games.entitiesTop18
		let arrTop9Data
		if (arrTop18Data.length > 9) {
			arrTop9Data = arrTop18Data.slice(0, 9)
		} else {
			arrTop9Data = arrTop18Data
		}
		dispatch(gamesRateGallerySliderForHomeRequested())
		try {
			const dataLite = await fakeApi.getVideoGamesCollectionLite() // Need REFACTORING
			let filterData = []
			let postersArr = []
			for (const game of arrTop9Data) {
				for (let n = 0; n < dataLite.length; n++) {
					if (game._id === dataLite[n].idMiddleParent) {
						postersArr.push(dataLite[n].homePageSliderGallery.poster)
						filterData.push({ ...dataLite[n].homePageSliderGallery.auxiliary, ...game })
						break
					}
				}
			}
			dispatch(gamesRateGallerySliderForHomeReceived([ filterData, postersArr ]))
		} catch (err) {
			const { message } = err
			dispatch(gamesRateGallerySliderForHomeRequestField(message))
		}
	}
}

// Selectors
export const getStatusLoaderGamesRateGallerySliderForHome = () => {
	return (state) => {
		return state.gamesRateGallerySliderForHome.isLoading
	}
}
export const getGamesDataRateGallerySliderForHome = () => {
	return (state) => {
		return state.gamesRateGallerySliderForHome.entities
	}
}

export default gamesRateGallerySliderForHomeReducer
