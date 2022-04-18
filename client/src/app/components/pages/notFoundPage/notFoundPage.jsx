import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
	return (
		<div className="block-content__not-found block-not-found">
			<video autoPlay muted loop preload="auto" className="block-not-found__video">
				<source type="video/webm" src={`./videos/gameElements.webm`} />
				<source type="video/mp4" src={`./videos/gameElements.mp4`} />
			</video>
			<div className="block-not-found__content">
				<h1 className="block-not-found__title">404 - страница не найдена</h1>
				<p className="block-not-found__text">Продолжите ваши приключения, используя панель навигации вверху, или перейдите по этой ссылке.</p>
				<Link className="block-not-found__link" to="/">На главную</Link>
			</div>
		</div>
	)
}

export default NotFoundPage
