import React from "react"

// Components
import UsersTop100DataLoaderGlobal from "../../HOC/usersTop100DataLoaderGlobal"
import HonorBoardVerticalSlider from "../../ui/honorBoardVerticalSlider"
import UsersTop100DataNumberController from "../../HOC/usersTop100DataNumberController"

const HonorBoardPage = () => {
	return (
		<div className="block-content__honor-board board-honor-wrapper">
			<UsersTop100DataLoaderGlobal>
				<UsersTop100DataNumberController>
					<HonorBoardVerticalSlider />
				</UsersTop100DataNumberController>
			</UsersTop100DataLoaderGlobal>
		</div>
	)
}

export default HonorBoardPage
