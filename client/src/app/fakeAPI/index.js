import getHomeCategory from "./categoryHome"
import getCategoryHomeGames from "./categoryHomeGames"
import getCategoryScreensData from "./categoryScreens"
import getCategoryStore from "./storeCategory"
import getStoreWalletLinks from "./storeWallet"
import getTopGames from "./videoGamesCollectionTopStore"
import getGamesCollectionMiddle from "./videoGamesCollectionMiddle"
import getCommentsGamesForSliderStore, { getCommentsForTheLastWeek, getCommentsForTheMainWallByIdNoLastWeek, fetchCommentsForCommentsPage } from "./commentsGamesForSliderStore"
import getUsersObjectForSliderStoreComments, { getUserById, getValueAllUsers } from "./users"
import getScopeSliderData from "./scopeSliderStoreData"
import getCountries from "./countries"
import getBigDataGameById from "./gamePage"
import getArrayRussianGames from "./russianGames"
import getVideoGamesCollectionLite from "./videoGamesCollectionLite"

const fakeApi = {
	getHomeCategory,
	getCategoryHomeGames,
	getCategoryScreensData,
	getCategoryStore,
	getStoreWalletLinks,
	getTopGames,
	getGamesCollectionMiddle,
	getCommentsGamesForSliderStore,
	getUsersObjectForSliderStoreComments,
	getScopeSliderData,
	getCountries,
	getBigDataGameById,
	getArrayRussianGames,
	getVideoGamesCollectionLite,
	getUserById,
	getCommentsForTheLastWeek,
	getCommentsForTheMainWallByIdNoLastWeek,
	getValueAllUsers,
	fetchCommentsForCommentsPage
}

export default fakeApi
