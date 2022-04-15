import React, { useState } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"

// Components
import PopularGamesSliderBlock from "./popularGamesSliderBlock"
// Auxiliary
import getArrayByNumber from "../../utils/getArrayByNumber"
import { getDataTop18Games } from "../../store/games"

const PopularGamesCommentsSlider = ({ classesParent, pathMp4, pathWebm }) => {
	// REDUX
	const dataGamesTop18 = useSelector(getDataTop18Games())
	// STATE
	const [currentPagin, setCurrentPagin] = useState(0)
	const [automaticStatus, setAutomaticStatus] = useState(true)
	// Auxiliary
	const dataGamesTop12 = dataGamesTop18.slice(0, 12)
	const arrayPagins = getArrayByNumber(dataGamesTop12.length)
	// Handlers
	const handlerUpdatePagin = (newCurrent) => setCurrentPagin(newCurrent)
	const getIconAutomaticControl = (status) => {
		if (status) return <img src="./images/icons/pauseElement.svg" alt="Иконка - поставить на паузу" />
		if (!status) return <img src="./images/icons/playElement.svg" alt="Иконка - play" />
	}
	const updateStatusAutomatic = () => setAutomaticStatus(prevState => !prevState)
	return (
		<div className={`${classesParent}__comments-slider slider-comments`}>
			<div className="slider-comments__container _container">
				<div className="slider-comments__head">
					<h2 className="slider-comments__title">Сообщество Factory.inc рекомендует</h2>
					<p className="slider-comments__sub-title">Перед тем как выбирать игры библиотеки ознакомьтесь с личным топом пользователей нашей платформы, а также прочтите комментарии. Нам кажется, что иногда они бывают очень смешные ^_^</p>
				</div>
				<PopularGamesSliderBlock data={dataGamesTop12} onUpdatePagin={handlerUpdatePagin} currentPagin={currentPagin} />
				<div className="slider-comments__paginations-wrap">
					<div onClick={updateStatusAutomatic} className="slider-comments__automatic">{getIconAutomaticControl(automaticStatus)}</div>
					{arrayPagins.map(el => <span onClick={() => handlerUpdatePagin(el._id)} className={`slider-comments__pagin${el._id === currentPagin ? " active" : ""}`} key={el._id}></span>)}
				</div>
			</div>
			<video autoPlay muted loop preload="auto" className="slider-comments__video">
				<source type="video/webm" src={`./videos/${pathWebm}`} />
				<source type="video/mp4" src={`./videos/${pathMp4}`} />
			</video>
		</div>
	)
}

PopularGamesCommentsSlider.classesParent = {
	classesParent: PropTypes.string.isRequired,
	pathMp4: PropTypes.string.isRequired,
	pathWebm: PropTypes.string.isRequired
}

export default PopularGamesCommentsSlider
