import { configureStore, combineReducers } from "@reduxjs/toolkit"
import gamesReducer from "./games"

const rootReducer = combineReducers({
	games: gamesReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}