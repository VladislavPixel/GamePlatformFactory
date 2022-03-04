import React from "react"
import HomeHead from "../../ui/homeHead"
import HomeCards from "../../ui/homeCards"
import SliderGallery from "../../common/sliderGallery"
import configAuxiliary from "../../../configAuxiliary.json"
import WeHave from "../../ui/weHave"
import HomeCategoryBlock from "../../common/homeCategoryBlock"

const HomePage = () => {
	return (
		<div className="block-content__home home-block">
			<HomeHead />
			<HomeCards />
			<SliderGallery title="Популярное и рекомендуемое" posters={configAuxiliary.sliderGalleryPostersGame} data={configAuxiliary.sliderGalleryGame} globPath="./images/sliderGalleryGame/" />
			<WeHave />
			<HomeCategoryBlock title="Возможно Вам будет интересно" categories={configAuxiliary.homeBlockCategory} />
		</div>
	)
}

export default HomePage
