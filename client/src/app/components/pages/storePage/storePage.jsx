import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"
import StoreGamesBlock from "../../ui/storeGamesBlock"
import {
	getSelectedCategoryStore,
	updateCategoryStoreSelected,
	DEFAULT_SELECTED_CATEGORY
} from "../../../store/categoryStore"
import PopularGamesCommentsSlider from "../../common/popularGamesCommentsSlider"
import CommentsGamesLoaderGlobal from "../../HOC/commentsGamesLoaderGlobal"

const StorePage = () => {
	const selectedCategory = useSelector(getSelectedCategoryStore())
	const [widthWrapResetCategory, setWidthWrapResetCategory] = useState(null)
	const [stylessResetCategoryWrap, setStylessResetCategoryWrap] = useState({})
	const refWrapBtnReset = useRef(null)
	const dispatch = useDispatch()
	const handlerBtnReset = () => dispatch(updateCategoryStoreSelected(DEFAULT_SELECTED_CATEGORY))
	useEffect(() => {
		setWidthWrapResetCategory(refWrapBtnReset.current.offsetWidth)
	}, [])
	useEffect(() => {
		if (selectedCategory.name !== "all") setStylessResetCategoryWrap({ left: `-${widthWrapResetCategory / 2 - 20}px` })
		if (selectedCategory.name === "all") setStylessResetCategoryWrap({ left: "-100%" })
	}, [selectedCategory])
	return (
		<div className="block-content__store store">
			<CommentsGamesLoaderGlobal>
				<PopularGamesCommentsSlider classesParent="store" pathMp4="commentsSliderStore.mp4" pathWebm="commentsSliderStoreOptimaze.webm" />
			</CommentsGamesLoaderGlobal>
			<StoreHeadNavigation />
			<StoreGamesBlock />
			<div ref={refWrapBtnReset} style={stylessResetCategoryWrap} className="store__reset-category-wrap">
				<button onClick={handlerBtnReset} className="store__reset-category-btn" type="button">Сброс категории</button>
			</div>
		</div>
	)
}

export default StorePage
