import React, { useState } from "react"
import StoreHeadNavigation from "../../ui/storeHeadNavigation"

const StorePage = () => {
	const [selectedCategory, setSelectedCategory] = useState({})
	const handlerSelectedCategory = (elementSelected) => {
		setSelectedCategory(elementSelected)
	}
	return (
		<div className="block-content__store store">
			<div className="store__container _container">
				<StoreHeadNavigation selectedElement={selectedCategory} onHandlerSelectedCategory={handlerSelectedCategory} />
			</div>
		</div>
	)
}

export default StorePage
