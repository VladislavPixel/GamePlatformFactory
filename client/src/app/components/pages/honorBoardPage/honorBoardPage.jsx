import React from "react"

// Components
import UsersTop100DataLoaderGlobal from "../../HOC/usersTop100DataLoaderGlobal"
import HonorBoardVerticalSlider from "../../ui/honorBoardVerticalSlider"

const HonorBoardPage = () => {
	return (
		<div className="block-content__honor-board board-honor-wrapper">
			<UsersTop100DataLoaderGlobal>
				<HonorBoardVerticalSlider />
			</UsersTop100DataLoaderGlobal>
		</div>
	)
}

export default HonorBoardPage
