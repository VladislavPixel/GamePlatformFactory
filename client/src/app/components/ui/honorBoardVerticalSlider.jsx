import React, { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"

// Auxiliary
import { getDataUsersTop100 } from "../../store/usersTop100Data"
// Components
import HonorBoardVerticalSliderLeftColumn from "./honorBoardVerticalSliderLeftColumn"

const HonorBoardVerticalSlider = () => {
	// REDUX
	const entities = useSelector(getDataUsersTop100())
	// AUXILIARY
	const fiveElements = entities.slice(0, 5)
	const isLessFive = fiveElements.length < 5
	const [cloneDataSliderHead] = useState(isLessFive ? [] : fiveElements.slice(-3, fiveElements.length))
	const [dataSlider] = useState(fiveElements)
	const [cloneDataSliderBottom] = useState(isLessFive ? [] : fiveElements.slice(0, 3))
	const [currentIndexUser, setCurrentIndexUser] = useState(0)
	const [containerOffset, setContainerOffset] = useState({ transform: "translateY(0)" })
	const slideRef = useRef(null)
	const heightSlide = useRef(0)
	const indexActiveEl = currentIndexUser + cloneDataSliderHead.length
	// HANDLERS
	const handlerClickImageUser = (indexElement) => {
		setCurrentIndexUser(indexElement)
	}
	useEffect(() => {
		if (slideRef.current) {
			heightSlide.current = slideRef.current.clientHeight
			if (!isLessFive) setContainerOffset({ transform: `translateY(-${heightSlide.current * cloneDataSliderHead.length / 2}px)` })
		}
	}, [isLessFive, cloneDataSliderHead.length])
	return (
		<div className="board-honor-wrapper__slider-container slider-board-honor">
			<div className="slider-board-honor__container">
				<h2 className="slider-board-honor__title">Лучшие из лучших</h2>
				<div className="slider-board-honor__wrapper">
					<HonorBoardVerticalSliderLeftColumn {...dataSlider[currentIndexUser]} />
					<div className="slider-board-honor__column">
						<div style={containerOffset} className="slider-board-honor__container-block honor-board-slider">
							{[...cloneDataSliderHead, ...dataSlider, ...cloneDataSliderBottom].map((slide, index) => {
								const isActive = isLessFive && index === currentIndexUser ? true :
									!isLessFive && index - cloneDataSliderHead.length === currentIndexUser ? true :
									false
								const isHalf = isLessFive && index !== currentIndexUser || !isLessFive && (indexActiveEl - cloneDataSliderHead.length + 1 === index || indexActiveEl + cloneDataSliderHead.length - 1 === index) ? true : false 
								return (
									<div ref={slideRef} key={index} className={`honor-board-slider__slide${isActive ? " active" : ""}${isHalf ? " half" : ""}`}>
										<div className="honor-board-slider__tagline-die">
											<p className="honor-board-slider__slogan-txt">{dataSlider[currentIndexUser].slogan}</p>
										</div>
										<div onClick={() => handlerClickImageUser(index)} className="honor-board-slider__image-wrapper">
											<span className="honor-board-slider__flag1"></span>
											<span className="honor-board-slider__flag2"></span>
											<span className="honor-board-slider__flag3"></span>
											<span className="honor-board-slider__flag4"></span>
											<img src={`/images/users/avatar/${slide.avatar}`} className="honor-board-slider__image" alt="Аватарка пользователя платформы Factory.inc" />
											<div className="honor-board-slider__close-el">
												<span></span>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HonorBoardVerticalSlider
