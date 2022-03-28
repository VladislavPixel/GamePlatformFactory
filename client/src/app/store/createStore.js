import { configureStore, combineReducers } from "@reduxjs/toolkit"
import gamesReducer from "./games"
import categoryStoreReducer from "./categoryStore"
import walletLinksReducer from "./walletLinks"

const rootReducer = combineReducers({
	games: gamesReducer,
	categoryStore: categoryStoreReducer,
	walletLinks: walletLinksReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}