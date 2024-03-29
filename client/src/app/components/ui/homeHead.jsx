import React, { useEffect } from "react"
import { useSelector } from "react-redux"

// Auxiliary
import { getValueRegisteredUsers } from "../../store/users"
import showElementsNumber from "../../utils/showElementsNumber"

const HomeHead = () => {
	// REDUX
	const valueRegisteredUsers = useSelector(getValueRegisteredUsers())
	useEffect(() => {
		showElementsNumber()
	}, [])
	return (
		<div className="home-block__container">
			<div className="home-block__column">
				<div className="home-block__content">
					<h1 className="home-block__title">Присоединяйся к сообществу, оценивающему игры. Помоги game индустрии выйти на новый уровень.</h1>
					<p className="home-block__sub-title">Мы ценим общительность, толерантность, экологичность и открытость. Не стесняйтесь заводить друзей, вместе обсуждать игры, участвовать в массовых events, играть и веселиться. Также у тебя есть прекрасная возможность заявить о своих проектах. Проинформировать людей об Alpha/Betta релизах. Если ты разработчик игр, тогда тебе сюда!</p>
					<div className="home-block__statistics"><span className="home-block__circle"></span>На платформе зарегистрировано<span className="home-block__number element-number-show">{valueRegisteredUsers}</span></div>
				</div>
			</div>
			<div className="home-block__column">
				<div className="home-block__images-container">
					<img className="home-block__window" src="/images/icons/appleWindow.svg" alt="Монитор mac" />
					<img className="home-block__cup" src="/images/icons/cupOfCoffee.svg" alt="Иконка чашка с кофе " />
				</div>
			</div>
		</div>
	)
}

export default HomeHead
