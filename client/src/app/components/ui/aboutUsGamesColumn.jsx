import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const AboutUsGamesColumn = ({ data }) => {
	return (
		<div className="games-about-us__column">
			{data.map((imageConfig, index) => {
				return (
					<div key={index} className="games-about-us__img-wrap">
						<Link to="/"><img src={`./images/aboutUsGames/${imageConfig.path}`} alt={imageConfig.alt} /></Link>
					</div>
				)
			})}
		</div>
	)
}

AboutUsGamesColumn.propTypes = {
	data: PropTypes.array.isRequired
}

export default AboutUsGamesColumn
