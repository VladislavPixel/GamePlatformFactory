import React from "react"
import { Link, NavLink } from "react-router-dom"
import configAuxiliary from "../../configAuxiliary.json"

const Footer = () => {
	return (
		<footer className="wrapper__footer footer">
			<div className="footer__container _container">
				<div className="footer__logo">
					<img className="footer__img" src="./images/icons/gamepad.svg" alt="Геймпад-иконка" />
					<Link to="/">Factory.inc</Link>
				</div>
				<ul className="footer__list">
					{configAuxiliary.menuHeaderRoutes.map((item, index) => <li key={index}><NavLink to={item.path}>{item.text}</NavLink></li>)}
				</ul>
				<button className="footer__subscription" type="button">Подписаться на рассылку</button>
				<div className="footer__copyright">© FACTORY, INC., 2022 / Права защищены</div>
				<div className="footer__sub-copy">Все упомянутые товарные знаки являются собственностью соответствующих владельцев.</div>
			</div>
		</footer>
	)
}

export default Footer
