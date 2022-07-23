import React, { useState } from "react"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataUsersTop100 } from "../../store/usersTop100Data"

const HonorBoardVerticalSlider = () => {
	// REDUX
	const entities = useSelector(getDataUsersTop100())
	// AUXILIARY
	const fiveElements = entities.slice(0, 5)
	const initialData = fiveElements.length < 5 ?
		fiveElements :
		[
			...fiveElements.slice(-3, fiveElements.length),
			...fiveElements,
			...fiveElements.slice(0, 3)
		]
	const [dataSlider, setDataSlider] = useState(initialData)
	const [currentUser, setCurrentUser] = useState(fiveElements[0])
		console.log(currentUser)
	return (
		<div className="board-honor-wrapper__slider-container slider-board-honor">
			<h2 className="slider-board-honor__title">Лучшие из лучших</h2>
			<div className="slider-board-honor__wrapper">
				<div className="slider-board-honor__column slider-board-honor__column_first column-first-slider-board">
					<h3 className="column-first-slider-board__title">Досье на пользователя</h3>
					<div className="column-first-slider-board__row">
						<div className="column-first-slider-board__coloumn"></div>
						<div className="column-first-slider-board__coloumn"></div>
					</div>
				</div>
				<div className="slider-board-honor__column"></div>
			</div>
		</div>
	)
}

export default HonorBoardVerticalSlider
