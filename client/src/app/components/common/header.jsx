import React from "react"
import { NavLink, Link } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const Header = () => {
	return (
		<header className="wrapper__header header">
			<div className="header__container _container">
				<div className="header__auth-block block-auth">
					<button className="block-auth__btn block-auth__btn_reg" type="button">
						<NavLink to="/signUp">Регистрация</NavLink>
					</button>
					<button className="block-auth__btn block-auth__btn_auth" type="button">
						<NavLink to="/signIn">Войти</NavLink>
					</button>
				</div>
				<div className="header__menu menu-header">
					<div className="menu-header__logo">
						<img className="menu-header__img" src="./images/icons/gameController.svg" alt="Иконка игрового контроллера" />
						<Link to="/">Factory.inc</Link>
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
