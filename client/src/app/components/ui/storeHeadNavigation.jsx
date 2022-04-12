import React, { useState } from "react"
import { Link } from "react-router-dom"

// Components
import ModalCategoryStore from "./modalCategoryStore"
import ModalFastAccess from "./modalFastAccessStore"
import ModalWalletStore from "./modalWalletStore"
import SearchHeadNavigationStore from "./searchHeadNavigationStore"

const StoreHeadNavigation = () => {
	const [targetBtnNavigation, setTargetBtnNavigation] = useState("")
	const handlerBtnNavigation = (message) => {
		if (targetBtnNavigation === message) {
			setTargetBtnNavigation("")
			return
		}
		if (message === "fastAccess") setTargetBtnNavigation(message)
		if (message === "category") setTargetBtnNavigation(message)
		if (message === "wallet") setTargetBtnNavigation(message)
		if (message === "") setTargetBtnNavigation("")
	}
	return(
		<div className="store__container _container">
			<nav className="store__navigation navigation-store">
				<div className="navigation-store__column">
					<button title="Быстрый доступ к ТОП-18 игр" onClick={() => handlerBtnNavigation("fastAccess")} className={`navigation-store__fast-access${targetBtnNavigation === "fastAccess" ? " active" : ""}`}>Быстрый доступ к играм<span className="navigation-store__flag"></span></button>
					<button title="Категории игр, фильтрация по ним" onClick={() => handlerBtnNavigation("category")} className={`navigation-store__category-btn${targetBtnNavigation === "category" ? " active" : ""}`}>Категории<span className="navigation-store__flag"></span></button>
					<button title="Перейти на страницу самых горячих предложений этого периода" className="navigation-store__sale">
						<Link to="/store/sale-hot">Весенняя распродажа</Link>
					</button>
					<ModalCategoryStore onHandlerBtnNavigation={handlerBtnNavigation} targetBtn={targetBtnNavigation} />
					<ModalFastAccess targetBtn={targetBtnNavigation} />
				</div>
				<SearchHeadNavigationStore onHandlerBtnNavigation={handlerBtnNavigation} />
				<div className="navigation-store__column">
					<button title="Список желаемого для Вас" className="navigation-store__btn-heart">
						<img src="./images/icons/heartNoArms.svg" alt="Иконка сердца с кардиограммой" />
					</button>
				</div>
				<div className="navigation-store__column">
					<button title="Вся информация по кошельку" onClick={() => handlerBtnNavigation("wallet")} className={`navigation-store__wallet-btn${targetBtnNavigation === "wallet" ? " active" : ""}`}>Кошелек Factory.inc<span className="navigation-store__flag"></span></button>
					<ModalWalletStore targetBtn={targetBtnNavigation} />
				</div>
			</nav>
		</div>
	)
}

export default StoreHeadNavigation
