import React from "react"
import PropTypes from "prop-types"
import PopularGamesSliderBlock from "./popularGamesSliderBlock"

const PopularGamesCommentsSlider = ({ classesParent, pathMp4, pathWebm }) => {
	return (
		<div className={`${classesParent}__comments-slider slider-comments`}>
			<div className="slider-comments__container _container">
				<div className="slider-comments__head">
					<h2 className="slider-comments__title">Сообщество Factory.inc рекомендует</h2>
					<p className="slider-comments__sub-title">Перед тем как выбирать игры библиотеки ознакомьтесь с личным топом пользователей нашей платформы, а также прочтите комментарии. Нам кажется, что иногда они бывают очень смешные ^_^</p>
				</div>
				<PopularGamesSliderBlock />
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
