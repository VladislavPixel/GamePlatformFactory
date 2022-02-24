import React from "react"

const HomePage = () => {
	return (
		<div className="block-content__home home-block">
			<div className="home-block__container">
				<div className="home-block__column">
					<div className="home-block__content">
						<h1 className="home-block__title">Присоединяйся к сообществу, оценивающему игры. Помоги game индустрии выйти на новый уровень.</h1>
						<div className="home-block__sub-title">Мы ценим общительность, толерантность, экологичность и открытость. Не стесняйтесь заводить друзей, вместе обсуждать игры, играть и веселиться.</div>
						<div className="home-block__statistics"><span className="home-block__circle"></span>На платформе зарегистрировано<span className="home-block__number">1000</span></div>
					</div>
				</div>
				<div className="home-block__column">
					<img src="./images/icons/appleWindow.svg" alt="Монитор mac" />
				</div>
			</div>
		</div>
	)
}

export default HomePage
