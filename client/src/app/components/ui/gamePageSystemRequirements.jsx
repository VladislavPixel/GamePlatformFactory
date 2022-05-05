import React, { useState } from "react"
import PropTypes from "prop-types"

// Components
import GamePagePlatformElement from "./gamePagePlatformElement"

const GamePageSystemRequirements = ({ data }) => {
	// AUXILIARY
	const arrKeysPlatform = Object.keys(data)
	// STATE
	const [currentPlatform, setCurrentPlatform] = useState(arrKeysPlatform[0])
	// HANDLERS
	const handlerUpdatePlatform = (newPlatformKey) => setCurrentPlatform(newPlatformKey)

	return (
		<div className="game-block__system-requirements system-requirements-game">
			<div className="system-requirements-game__container _container">
				<div className="system-requirements-game__column">
					<h2 className="system-requirements-game__title">Системные требования</h2>
				</div>
				<div className="system-requirements-game__column">
					<div className="system-requirements-game__platforms">
						{arrKeysPlatform.map((key, index) => {
							return (
								<button onClick={() => handlerUpdatePlatform(key)} style={{ flex: `0 1 ${100 / arrKeysPlatform.length}%` }} className={"system-requirements-game__btn-platform" + (currentPlatform === key ? " active" : "")} key={index}>
									<img src={`/images/platformsIcon/${key.toLowerCase()}.svg`} alt={`Иконка платформы: ${key}`} />
									{key}
								</button>
							)
						})}
					</div>
					<GamePagePlatformElement data={data[currentPlatform]} />
				</div>
			</div>
		</div>
	)
}

GamePageSystemRequirements.propTypes = {
	data: PropTypes.object.isRequired
}

export default GamePageSystemRequirements
