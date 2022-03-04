import React from "react"
import PropTypes from "prop-types"

const ItemCategory = ({ path, poster, alt, title, platform, price, tags }) => {
	const getValuePrice = (value) => {
		if (typeof value === "number") return `${value} pуб.`
		return value
	}
	return (
		<div className="category-block__game-card card-game">
			<div className="card-game__column">
				<img src={`${path}${poster}`} alt={alt} />
			</div>
			<div className="card-game__column">
				<div className="card-game__title">{title}</div>
				<div className="card-game__row">
					<div className="card-game__content-column">
						{platform.map((platformPath, m) => <img key={m} src={"./images/platformsIcon/" + platformPath} alt="Иконка платформы на которой работает игра." />)}
					</div>
					<div className="card-game__content-column">
						<div className="card-game__price">{getValuePrice(price)}</div>
					</div>
				</div>
				<div className="card-game__tags">
					{tags.map((tag, index) => <div className="card-game__el-tag" key={index}>{tag}</div>)}
				</div>
			</div>
		</div>
	)
}

ItemCategory.propTypes = {
	path: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	platform: PropTypes.array.isRequired,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	tags: PropTypes.array.isRequired
}

export default ItemCategory
