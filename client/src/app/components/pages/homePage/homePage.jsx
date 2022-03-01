import React from "react"
import HomeHead from "../../ui/homeHead"
import HomeCards from "../../ui/homeCards"
import SliderGallery from "../../common/sliderGallery"
import configAuxiliary from "../../../configAuxiliary.json"

const HomePage = () => {
	return (
		<div className="block-content__home home-block">
			<HomeHead />
			<HomeCards />
			<SliderGallery title="Популярное и рекомендуемое" posters={configAuxiliary.sliderGalleryPostersGame} data={configAuxiliary.sliderGalleryGame} globPath="./images/sliderGalleryGame/" />
		</div>
	)
}

export default HomePage
