import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"
import StoreGamesBlock from "../../ui/storeGamesBlock"
import { getIsLoadingGamesMiddle, fetchAllGamesMiddleData, getDataGamesMiddle } from "../../../store/games"
import Spinner from "../../common/spinner"

const StorePage = () => {
	const dispatch = useDispatch()
	const [selectedCategory, setSelectedCategory] = useState({})
	const handlerSelectedCategory = (elementSelected) => setSelectedCategory(elementSelected)
	const isLoadingGamesMiddle = useSelector(getIsLoadingGamesMiddle())
	const dataGamesMiddle = useSelector(getDataGamesMiddle())
	useEffect(() => {
		if (isLoadingGamesMiddle) dispatch(fetchAllGamesMiddleData())
	}, [isLoadingGamesMiddle, dispatch])
	return (
		<div className="block-content__store store">
			<StoreHeadNavigation selectedElement={selectedCategory} onHandlerSelectedCategory={handlerSelectedCategory} />
			{isLoadingGamesMiddle ? <Spinner /> : <StoreGamesBlock data={dataGamesMiddle} />}
		</div>
	)
}

export default StorePage
