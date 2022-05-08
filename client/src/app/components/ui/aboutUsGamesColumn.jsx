import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const AboutUsGamesColumn = ({ data, classes }) => {
	return (
		<div className={`games-about-us__column games-about-us__column_${classes}`}>
			{data.map((imageConfig, index) => {
				let correctConfig = null
				if (imageConfig.aboutUsGames && Object.values(imageConfig.aboutUsGames).length === 2) {
					correctConfig = imageConfig.aboutUsGames
				} else {
					correctConfig = { path: "geimpad.jpg", alt: "Джойстик" }
				}
				const { path, alt } = correctConfig
				return (
					<div key={index} className="games-about-us__img-wrap">
						<Link title={`Нажми, чтобы перейти на страницу игры: "${imageConfig.title}"`} to={`/game/${imageConfig._id}`}><img src={`/images/aboutUsGames/${path}`} alt={alt} /></Link>
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
