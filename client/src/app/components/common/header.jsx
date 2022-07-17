import React from "react"
import { NavLink, Link } from "react-router-dom"

// Auxiliary
import menuHeaderRoutes from "../../configAuxiliary/menuHeaderRoutes.json"

const Header = () => {
	return (
		<header className="wrapper__header header">
			<div className="header__container _container">
				<div className="header__auth-block block-auth">
					<NavLink title="Перейти на страницу Регистрации" className="block-auth__link block-auth__link_reg" to="/signUp">Регистрация</NavLink>
					<NavLink title="Нажмите для перехода на страницу Авторизации" className="block-auth__link block-auth__link_auth" to="/signIn">Войти</NavLink>
				</div>
				<div className="header__menu menu-header">
					<div className="menu-header__logo">
						<img title="Factory.inc: ведем свою деятельность для Вас!" className="menu-header__img" src="/images/icons/gameController.svg" alt="Иконка игрового контроллера" />
						<Link title="При нажатии, Вы будете перенаправлены на Домашнюю страницу" to="/">Factory.inc</Link>
					</div>
					<ul className="menu-header__list">
						{menuHeaderRoutes.map((item, index) => <li key={index}><NavLink className={index === menuHeaderRoutes.length - 1 ? "menu-header__item-last" : ""} to={item.path}>{item.text}</NavLink></li>)}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
