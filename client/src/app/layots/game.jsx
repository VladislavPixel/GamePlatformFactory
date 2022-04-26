import React from "react"

// Components
import GamePage from "../components/pages/gamePage"
import GamePageLoader from "../components/HOC/gamePageLoader"

const Game = () => {
	return (
		<GamePageLoader>
			<GamePage />
		</GamePageLoader>
	)
}

export default Game
