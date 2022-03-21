import React, { useState } from "react"
import { Link } from "react-router-dom"

const StoreHeadNavigation = () => {
	const [isActiveFastAccess, setActiveFastAccess] = useState(false)
	const handlerBtnFastAccess = () => setActiveFastAccess(prevState => !prevState)
	return(
		<div className="store__navigation navigation-store">
			<div className="navigation-store__column">
				<button onClick={handlerBtnFastAccess} className={`navigation-store__fast-access${isActiveFastAccess ? " active" : ""}`}>Быстрый доступ к играм<span className="navigation-store__flag"></span></button>
				<button className="navigation-store__category-btn">Категории<span className="navigation-store__flag"></span></button>
				<button className="navigation-store__sale">
					<Link to="/">Весенняя распродажа</Link>
				</button>
			</div>
			<div className="navigation-store__column">
				<img src="./images/icons/search.svg" alt="Иконка поиска" />
				<div className="navigation-store__input-wrap">
					<input className="navigation-store__input" type="text" placeholder="Поиск по магазину" />
				</div>
			</div>
			<div className="navigation-store__column">
				<button className="navigation-store__btn-heart">
					<img src="./images/icons/heartNoArms.svg" alt="Иконка сердца с кардиограммой" />
				</button>
			</div>
			<div className="navigation-store__column">
				<button className="navigation-store__wallet-btn">Кошелек Factory.inc<span className="navigation-store__flag"></span></button>
			</div>
		</div>
	)
}

export default StoreHeadNavigation
