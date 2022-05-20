import React from "react"
import { Link, NavLink } from "react-router-dom"

// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const Footer = () => {
	return (
		<footer className="wrapper__footer footer">
			<div className="footer__container _container">
				<div className="footer__logo">
					<img title="Все мы любим игры)" className="footer__img" src="/images/icons/gamepad.svg" alt="Геймпад-иконка" />
					<Link to="/">Factory.inc</Link>
				</div>
				<ul className="footer__list">
					{configAuxiliary.menuHeaderRoutes.map((item, index) => <li key={index}><NavLink to={item.path}>{item.text}</NavLink></li>)}
				</ul>
				<button title="У нас много интересно, не пропусти" className="footer__subscription" type="button">Подписаться на рассылку</button>
				<p className="footer__copyright">© FACTORY, INC., 2022 / Права защищены</p>
				<p className="footer__sub-copy">Все упомянутые товарные знаки являются собственностью соответствующих владельцев. Платформа Factory.inc создана с целью централизации сообщества любителей игр, общения людей, доступа к играм и их оценки. Мы не преследуем цель незаконного распространения материалов, поэтому если Вы являетесь правообладателем, сообщите нам о нарушении по указанным здесь контактам.</p>
				<div className="footer__email-author">
					<span>Автор платформы: Vladislav Shtukarev</span>
					<a href="mailto:pixel.develop@yandex.ru">pixel.develop@yandex.ru</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
