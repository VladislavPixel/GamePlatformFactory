import React from "react"
import configAuxiliary from "../../configAuxiliary.json"
import CircleDance from "../common/circleDance"

const WeHave = () => {
	return (
		<div className="home-block__we-have we-have">
			<div className="we-have__container _container">
				<h2 className="we-have__title">Что вы найдете у нас?</h2>
				<div className="we-have__block">
					<div className="we-have__column">
						<ul className="we-have__list">
							{configAuxiliary.weHaveList.map((text, i) => <li key={i}><span></span>{text}</li>)}
						</ul>
					</div>
					<div className="we-have__column">
						<CircleDance letter="F" color="#8AF9AD" shadow="0px 14px 34px rgba(140, 249, 172, 0.4)" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeHave
