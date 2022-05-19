import React from "react"
import { NavLink, Link } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

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
						<img className="menu-header__img" src="/images/icons/gameController.svg" alt="Иконка игрового контроллера" />
						<Link title="При нажатии, Вы будете перенаправлены на Домашнюю страницу" to="/">Factory.inc</Link>
					</div>
					<ul className="menu-header__list">
						{configAuxiliary.menuHeaderRoutes.map((item, index) => <li key={index}><NavLink to={item.path}>{item.text}</NavLink></li>)}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
