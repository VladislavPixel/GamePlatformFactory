import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"
import StoreGamesBlock from "../../ui/storeGamesBlock"
import { getIsLoadingGamesMiddle, fetchAllGamesMiddleData, getDataGamesMiddle } from "../../../store/games"
import Spinner from "../../common/spinner"

const StorePage = () => {
	const dispatch = useDispatch()
	const isLoadingGamesMiddle = useSelector(getIsLoadingGamesMiddle())
	const dataGamesMiddle = useSelector(getDataGamesMiddle())
	useEffect(() => {
		if (isLoadingGamesMiddle) dispatch(fetchAllGamesMiddleData())
	}, [isLoadingGamesMiddle, dispatch])
	return (
		<div className="block-content__store store">
			<StoreHeadNavigation />
			{isLoadingGamesMiddle ? <Spinner /> : <StoreGamesBlock data={dataGamesMiddle} />}
			<div className="store__reset-category-wrap"><button type="button">Сброс категории</button></div>
		</div>
	)
}

export default StorePage
