import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const AboutUsGamesColumn = ({ data, classes }) => {
	return (
		<div className={`games-about-us__column games-about-us__column_${classes}`}>
			{data.map((imageConfig, index) => {
				return (
					<div key={index} className="games-about-us__img-wrap">
						<Link to="/"><img src={`/images/aboutUsGames/${imageConfig.path}`} alt={imageConfig.alt} /></Link>
					</div>
				)
			})}
		</div>
	)
}

AboutUsGamesColumn.propTypes = {
	data: PropTypes.array.isRequired,
	classes: PropTypes.string.isRequired
}

export default AboutUsGamesColumn
