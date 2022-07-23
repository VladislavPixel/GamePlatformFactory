import React from "react"

// Components
import UsersTop100DataLoaderGlobal from "../../HOC/usersTop100DataLoaderGlobal"
import HonorBoardVerticalSlider from "../../ui/honorBoardVerticalSlider"

const HonorBoardPage = () => {
	return (
		<div className="block-content__honor-board board-honor-wrapper">
			<div className="board-honor-wrapper__container _container">
				<UsersTop100DataLoaderGlobal>
					<HonorBoardVerticalSlider />
				</UsersTop100DataLoaderGlobal>
			</div>
		</div>
	)
}

export default HonorBoardPage
