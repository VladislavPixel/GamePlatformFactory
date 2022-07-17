import React, { useState, useEffect } from "react"

// Components
import HomeHead from "../../ui/homeHead"
import HomeCards from "../../ui/homeCards"
import SliderGallery from "../../common/sliderGallery"
import WeHave from "../../ui/weHave"
import HomeCategoryBlock from "../../common/homeCategoryBlock"
import Spinner from "../../common/spinner"
import WideScaleSlider from "../../common/wideScaleSlider"
import RusGamesForWideScaleHomeGlobalLoader from "../../HOC/rusGamesForWideScaleHome"
import GamesRateGallerySliderLoaderGlobalForHome from "../../HOC/gamesRateGallerySliderLoaderGlobalForHome"
// Auxiliary
import weHaveList from "../../../configAuxiliary/weHaveList.json"
import weHaveBlocksHomePage from "../../../configAuxiliary/weHaveBlocksHomePage.json"
import fakeApi from "../../../fakeAPI"

const HomePage = () => {
	const [homeCategoryLoader, setHomeCategoryLoader] = useState(true)
	const [homeCategoryData, setHomeCategoryData] = useState(null)
	useEffect(() => {
		Promise.all([
			fakeApi.getHomeCategory(),
			fakeApi.getCategoryHomeGames(),
			fakeApi.getCategoryScreensData()
		]).then(data => { setHomeCategoryData(data) })
	}, [])
	useEffect(() => {
		if (homeCategoryData) { setHomeCategoryLoader(false) }
	}, [homeCategoryData])
	return (
		<div className="block-content__home home-block">
			<HomeHead />
			<HomeCards />
			<GamesRateGallerySliderLoaderGlobalForHome>
				<SliderGallery title="Популярное и рекомендуемое" globPath="/images/sliderGalleryGame/" />
			</GamesRateGallerySliderLoaderGlobalForHome>
			<WeHave directionCircle="right" isOffsetCircle={true} isList={true} dataList={weHaveList} />
			{
				homeCategoryLoader ? <Spinner /> :
				<HomeCategoryBlock path="/images/categoryBlockGame/" title="Возможно Вам будет интересно" categories={homeCategoryData[0]} games={homeCategoryData[1]} screens={homeCategoryData[2]} />
			}
			<RusGamesForWideScaleHomeGlobalLoader>
				<WideScaleSlider pathImages="/images/homeWideScaleSlider/" classWrap="home-block" title="Популярные продукты российских разработчиков" />
			</RusGamesForWideScaleHomeGlobalLoader>
			<WeHave dataBlocks={weHaveBlocksHomePage} themeColors={["#4579F5", "#0044e2 0px 14px 34px", "#4579F5", "#4579F5 0px 14px 34px"]} isBlueCircle={true} isList={false} />
		</div>
	)
}

export default HomePage
