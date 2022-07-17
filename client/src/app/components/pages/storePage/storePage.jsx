import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import PopularGamesCommentsSlider from "../../common/popularGamesCommentsSlider"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"
import StoreGamesBlock from "../../ui/storeGamesBlock"
import ScopeSlider from "../../common/scopeSlider"
import StoreTop5 from "../../common/storeTop5"
// Auxiliary
import storeTop5 from "../../../configAuxiliary/storeTop5.json"
import {
	getSelectedCategoryStore,
	updateCategoryStoreSelected,
	DEFAULT_SELECTED_CATEGORY
} from "../../../store/categoryStore"

const StorePage = () => {
	// REDUX
	const dispatch = useDispatch()
	const selectedCategory = useSelector(getSelectedCategoryStore())
	// STATE
	const [widthWrapResetCategory, setWidthWrapResetCategory] = useState(null)
	const [stylessResetCategoryWrap, setStylessResetCategoryWrap] = useState({})
	// AUXILIARY
	const refWrapBtnReset = useRef(null)
	// HANDLERS
	const handlerBtnReset = () => dispatch(updateCategoryStoreSelected(DEFAULT_SELECTED_CATEGORY))

	useEffect(() => {
		setWidthWrapResetCategory(refWrapBtnReset.current.offsetWidth)
	}, [])
	useEffect(() => {
		if (selectedCategory.name !== "all") setStylessResetCategoryWrap({ left: `-${widthWrapResetCategory / 2 - 20}px` })
		if (selectedCategory.name === "all") setStylessResetCategoryWrap({ left: "-100%" })
	}, [selectedCategory, widthWrapResetCategory])
	return (
		<div className="block-content__store store">
			<PopularGamesCommentsSlider classesParent="store" pathMp4="commentsSliderStore.mp4" pathWebm="commentsSliderStoreOptimaze.webm" />
			<StoreHeadNavigation />
			<StoreGamesBlock />
			<div ref={refWrapBtnReset} style={stylessResetCategoryWrap} className="store__reset-category-wrap">
				<button onClick={handlerBtnReset} className="store__reset-category-btn" type="button">Сброс категории</button>
			</div>
			<ScopeSlider classesParent="store" />
			<StoreTop5 classesParent="store" config={storeTop5} />
		</div>
	)
}

export default StorePage
