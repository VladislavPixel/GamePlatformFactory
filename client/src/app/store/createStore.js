import { configureStore, combineReducers } from "@reduxjs/toolkit"

// REDUCERS
import gamesReducer from "./games"
import categoryStoreReducer from "./categoryStore"
import walletLinksReducer from "./walletLinks"
import searchGamesStoreReducer from "./searchGamesStore"
import commentsGamesStoreSliderReducer from "./commentsGamesStoreSlider"
import countriesReducer from "./countries"
import gamePageReducer from "./gamePage"
import russianGamesForWideScaleSliderHomeReducer from "./russianGamesForWideScaleSliderHome"

const rootReducer = combineReducers({
	games: gamesReducer,
	categoryStore: categoryStoreReducer,
	walletLinks: walletLinksReducer,
	searchGamesStore: searchGamesStoreReducer,
	commentsGamesStoreSlider: commentsGamesStoreSliderReducer,
	countries: countriesReducer,
	gamePage: gamePageReducer,
	russianGamesForWideScaleSliderHome: russianGamesForWideScaleSliderHomeReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
