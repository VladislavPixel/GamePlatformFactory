import getHomeCategory from "./categoryHome"
import getCategoryHomeGames from "./categoryHomeGames"
import getCategoryScreensData from "./categoryScreens"
import getCategoryStore from "./storeCategory"
import getStoreWalletLinks from "./storeWallet"
import getTopGames from "./videoGamesCollectionTopStore"
import getGamesCollectionMiddle from "./videoGamesCollectionMiddle"
import getCommentsGamesForSliderStore from "./commentsGamesForSliderStore"
import getUsersObjectForSliderStoreComments from "./users"
import getScopeSliderData from "./scopeSliderStoreData"
import getCountries from "./countries"
import getBigDataGameById from "./gamePage"
import getArrayRussianGames from "./russianGames"
import getVideoGamesCollectionLite from "./videoGamesCollectionLite"
import getSliderGalleryGamePosters from "./sliderGalleryGamePoster"
import getSliderGalleryGameData from "./sliderGalleryGame"

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
	getSliderGalleryGamePosters,
	getSliderGalleryGameData
}

export default fakeApi
