import React, { useState } from "react"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"
import StoreGamesBlock from "../../ui/storeGamesBlock"

const StorePage = () => {
	const [selectedCategory, setSelectedCategory] = useState({})
	const handlerSelectedCategory = (elementSelected) => {
		setSelectedCategory(elementSelected)
	}
	return (
		<div className="block-content__store store">
			<StoreHeadNavigation selectedElement={selectedCategory} onHandlerSelectedCategory={handlerSelectedCategory} />
			<StoreGamesBlock />
		</div>
	)
}

export default StorePage
