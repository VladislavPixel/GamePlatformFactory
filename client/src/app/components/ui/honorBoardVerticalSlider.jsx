import React, { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// Auxiliary
import { getDataUsersTop100 } from "../../store/usersTop100Data"
import getDateInStringFormat from "../../utils/getDateInStringFormat"

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
	const {
		avatar,
		hisComments,
		hisReviews,
		nickName,
		rank,
		rankPoints,
		regDateOnPlatform,
		slogan,
		_id
	} = dataSlider[currentIndexUser]
	const { color, text, title } = rank
	useEffect(() => {
		if (slideRef.current) {
			heightSlide.current = slideRef.current.clientHeight
			if (!isLessFive) setContainerOffset({ transform: `translateY(-${heightSlide.current * cloneDataSliderHead.length / 2}px)` })
		}
	}, [isLessFive, cloneDataSliderHead.length])
	return (
		<div className="board-honor-wrapper__slider-container slider-board-honor">
			<div className="slider-board-honor__container _container">
				<h2 className="slider-board-honor__title">Лучшие из лучших</h2>
				<div className="slider-board-honor__wrapper">
					<div className="slider-board-honor__column slider-board-honor__column_first column-first-slider-board">
						<span className="column-first-slider-board__element1"></span>
						<span className="column-first-slider-board__element2"></span>
						<div className="column-first-slider-board__head">
							<h3 className="column-first-slider-board__title">Информационная карточка</h3>
							<img title="Кубок*" className="column-first-slider-board__icon" src="/images/icons/cup.svg" alt="Иконка кубка в руке" />
						</div>
						<div className="column-first-slider-board__row">
							<div className="column-first-slider-board__column">
								<Link className="column-first-slider-board__link-nick" to={`/profile/${_id}`} title={`Перейти на страницу пользователя --> ${nickName}`}>{nickName}</Link>
								<Link className="column-first-slider-board__container-avatar" to={`/profile/${_id}`} title={`Перейти на страницу пользователя --> ${nickName}`}>
									<img alt={`Аватарка профиля ${nickName}`} className="column-first-slider-board__avatar" src={`/images/users/avatar/${avatar}`} />
								</Link>
							</div>
							<div className="column-first-slider-board__column">
								<p className="column-first-slider-board__date-reg">Был замечен на платформе с <span>{getDateInStringFormat(regDateOnPlatform)}</span></p>
								<Link className="column-first-slider-board__link-profile" to={`/profile/${_id}`} title={`Нажмите для перехода на страницу --> ${nickName}`}>Перейти в profile пользователя</Link>
								<p style={{ color }} className="column-first-slider-board__rank-title">{title}</p>
								<p className="column-first-slider-board__lvl">{text}</p>
								<div className="column-first-slider-board__statistics-block">
									<h4 className="column-first-slider-board__title-statistics">Основная активность пользователя</h4>
									<p className="column-first-slider-board__comments">Количество оставленных комментариев на платформе: <span>{hisComments.length}</span></p>
									<p className="column-first-slider-board__reviews">Рецензии: <span>{hisReviews.length}</span></p>
								</div>
								<div className="column-first-slider-board__container-points">
									<div className="column-first-slider-board__points">Ресурсов: <span>{rankPoints}</span></div>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-board-honor__column">
						<div style={containerOffset} className="slider-board-honor__container-block honor-board-slider">
							{[...cloneDataSliderHead, ...dataSlider, ...cloneDataSliderBottom].map((slide, index) => {
								const isActive = isLessFive && index === currentIndexUser ? true :
									!isLessFive && index - cloneDataSliderHead.length === currentIndexUser ? true :
									false
								return (
									<div ref={slideRef} key={index} className={`honor-board-slider__slide${isActive ? " active" : ""}`}>
										<div className="honor-board-slider__tagline-die">
											<p className="honor-board-slider__slogan-txt">{slogan}</p>
										</div>
										<div className="honor-board-slider__image-wrapper">
											<span className="honor-board-slider__flag1"></span>
											<span className="honor-board-slider__flag2"></span>
											<span className="honor-board-slider__flag3"></span>
											<span className="honor-board-slider__flag4"></span>
											<img src={`/images/users/avatar/${slide.avatar}`} className="honor-board-slider__image" alt="Аватарка пользователя платформы Factory.inc" />
										</div>
										<div className="honor-board-slider__close-el"></div>
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
