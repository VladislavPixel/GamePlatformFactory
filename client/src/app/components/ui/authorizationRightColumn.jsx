import React from "react"
import { Link } from "react-router-dom"

const AuthorizationRightColumn = () => {
	return (
		<div className="container-auth__column">
			<div className="container-auth__info-block">
				<img title="У нас важная миссия, мы создаем Альянс" className="container-auth__img-planets" src="./images/icons/planets.svg" alt="Иконка планет" />
				<p className="container-auth__message">Добро пожаловать в Factory.inc! Здесь есть игры на любой вкус. Откройте для себя новые миры.</p>
				<Link title="Перейти в секцию знакомства с платформой" className="container-auth__link" to="/aboutUs">Узнать больше</Link>
				<div title="Как только ты присоединишься к сообществу, станешь таким же крутым, как Master Chief" className="container-auth__block-poster">
					<img className="container-auth__poster" src="./images/authPages/halo.jpg" alt="Воин из игры Halo" />
				</div>
				<p className="container-auth__sub-image">Factory.inc - это быстро, прозрачно, понятно и самое главное бесплатно.</p>
				<Link title="Сообщество ждет тебя!" to="/signUp" className="container-auth__button-join">Присоединиться к Factory.inc</Link>
			</div>
			<img className="container-auth__mineral" src="./images/icons/mineral.svg" alt="mineral icon" />
		</div>
	)
}

export default AuthorizationRightColumn
