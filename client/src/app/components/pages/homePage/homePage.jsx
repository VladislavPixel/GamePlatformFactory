import React, { useState, useEffect } from "react"
import HomeHead from "../../ui/homeHead"
import HomeCards from "../../ui/homeCards"
import SliderGallery from "../../common/sliderGallery"
import WeHave from "../../ui/weHave"
import HomeCategoryBlock from "../../common/homeCategoryBlock"
import fakeApi from "../../../fakeAPI"
import Spinner from "../../common/spinner"
import WideScaleSlider from "../../common/wideScaleSlider"
import configAuxiliary from "../../../configAuxiliary.json"

const HomePage = () => {
	const [sliderGalleryLoader, setSliderGalleryLoader] = useState(true)
	const [homeCategoryLoader, setHomeCategoryLoader] = useState(true)
	const [wideScaleSliderLoader, setWideScaleSliderLoader] = useState(true)
	const [sliderGalleryData, setSliderGalleryData] = useState(null)
	const [homeCategoryData, setHomeCategoryData] = useState(null)
	const [wideScaleSliderData, setWideScaleSliderData] = useState(null)
	useEffect(() => {
		Promise.all([
			fakeApi.getSliderGalleryGameData(),
			fakeApi.getSliderGalleryGamePosters()
		]).then(data => { setSliderGalleryData(data) })
		Promise.all([
			fakeApi.getHomeCategory(),
			fakeApi.getCategoryHomeGames(),
			fakeApi.getCategoryScreensData()
		]).then(data => { setHomeCategoryData(data) })
		fakeApi.getHomeWideScaleSliderData()
			.then(data => setWideScaleSliderData(data))
	}, [])
	useEffect(() => {
		if (sliderGalleryData) { setSliderGalleryLoader(false) }
	}, [sliderGalleryData])
	useEffect(() => {
		if (homeCategoryData) { setHomeCategoryLoader(false) }
	}, [homeCategoryData])
	useEffect(() => {
		if (wideScaleSliderData) { setWideScaleSliderLoader(false) }
	}, [wideScaleSliderData])
	return (
		<div className="block-content__home home-block">
			<HomeHead />
			{/* <HomeCards /> */}
			{/* {
				sliderGalleryLoader ? <Spinner /> :
				<SliderGallery title="Популярное и рекомендуемое" posters={sliderGalleryData[1]} data={sliderGalleryData[0]} globPath="./images/sliderGalleryGame/" />
			}
			<WeHave directionCircle="right" isOffsetCircle={true} isList={true} dataList={configAuxiliary.weHaveList} />
			{
				homeCategoryLoader ? <Spinner /> :
				<HomeCategoryBlock path="./images/categoryBlockGame/" title="Возможно Вам будет интересно" categories={homeCategoryData[0]} games={homeCategoryData[1]} screens={homeCategoryData[2]} />
			}
			{
				wideScaleSliderLoader ? <Spinner /> :
				<WideScaleSlider pathImages="./images/homeWideScaleSlider/" classWrap="home-block" title="Популярные продукты российских разработчиков" dataSliders={wideScaleSliderData} />
			}
			<WeHave dataBlocks={configAuxiliary.weHaveBlocksHomePage} themeColors={["#4579F5", "#0044e2 0px 14px 34px", "#4579F5", "#4579F5 0px 14px 34px"]} isBlueCircle={true} isList={false} /> */}
		</div>
	)
}

export default HomePage
