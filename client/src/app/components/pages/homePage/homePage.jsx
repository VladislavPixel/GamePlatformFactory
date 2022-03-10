import React, { useState, useEffect } from "react"
import HomeHead from "../../ui/homeHead"
import HomeCards from "../../ui/homeCards"
import SliderGallery from "../../common/sliderGallery"
import WeHave from "../../ui/weHave"
import HomeCategoryBlock from "../../common/homeCategoryBlock"
import fakeApi from "../../../fakeAPI"
import Spinner from "../../common/spinner"

const HomePage = () => {
	const [sliderGalleryLoader, setSliderGalleryLoader] = useState(true)
	const [homeCategoryLoader, setHomeCategoryLoader] = useState(true)
	const [sliderGalleryData, setSliderGalleryData] = useState(null)
	const [homeCategoryData, setHomeCategoryData] = useState(null)
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
	}, [])
	useEffect(() => {
		if (sliderGalleryData) { setSliderGalleryLoader(false) }
	}, [sliderGalleryData])
	useEffect(() => {
		if (homeCategoryData) { setHomeCategoryLoader(false) }
	}, [homeCategoryData])
	return (
		<div className="block-content__home home-block">
			<HomeHead />
			<HomeCards />
			{
				sliderGalleryLoader ? <Spinner /> :
				<SliderGallery title="Популярное и рекомендуемое" posters={sliderGalleryData[1]} data={sliderGalleryData[0]} globPath="./images/sliderGalleryGame/" />
			}
			<WeHave />
			{
				homeCategoryLoader ? <Spinner /> :
				<HomeCategoryBlock path="./images/categoryBlockGame/" title="Возможно Вам будет интересно" categories={homeCategoryData[0]} games={homeCategoryData[1]} screens={homeCategoryData[2]} />
			}
		</div>
	)
}

export default HomePage
