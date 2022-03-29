import { configureStore, combineReducers } from "@reduxjs/toolkit"
import gamesReducer from "./games"
import categoryStoreReducer from "./categoryStore"
import walletLinksReducer from "./walletLinks"
import searchGamesStoreReducer from "./searchGamesStore"
import commentsGamesReducer from "./commentsGames"

const rootReducer = combineReducers({
	games: gamesReducer,
	categoryStore: categoryStoreReducer,
	walletLinks: walletLinksReducer,
	searchGamesStore: searchGamesStoreReducer,
	commentsGames: commentsGamesReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
