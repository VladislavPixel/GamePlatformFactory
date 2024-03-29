import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

// Auxiliary
import getValuePrice from "../../utils/getValuePrice"

const ItemCategory = ({ path, poster, alt, title, platform, price, tags, _id, isTarget, onMouseOver, category, interest, newPrice }) => {
	// AUXILIARY
	const isDiscount = category === "discounts"
	const cardGameRef = useRef(null)

	useEffect(() => {
		cardGameRef.current.addEventListener("mouseover", onMouseOver)
	}, [onMouseOver])
	return (
		<div ref={cardGameRef} data-id={_id} className={"category-block__game-card card-game" + (isTarget ? " active" : "")}>
			<div className="card-game__column">
				<img src={`${path}${poster}`} alt={alt} />
			</div>
			<div className="card-game__column">
				<h3 className="card-game__title">{title}</h3>
				<div className="card-game__row">
					<div className="card-game__content-column">
						{platform.map((platformPath, m) => <img title={`Платформа, которой поддерживается эта игра: ${platformPath.split(".")[0]}`} key={m} src={"/images/platformsIcon/" + platformPath} alt="Иконка платформы на которой работает игра." />)}
					</div>
					<div className="card-game__content-column">
						<div className={"card-game__price" + (isDiscount ? " card-game__price_through" : "")}>{getValuePrice(price)}</div>
					</div>
				</div>
				<div className="card-game__tags">
					{tags.map((tag, index) => <div className="card-game__el-tag" key={index}>{tag}</div>)}
				</div>
				{isDiscount &&
					<div className="card-game__interest">
						<div className="card-game__left-interest">
							Скидка: <span>{interest}%</span>
						</div>
						<div className="card-game__new-prise">{newPrice} руб.</div>
					</div>
				}
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
	tags: PropTypes.array.isRequired,
	_id: PropTypes.string.isRequired,
	isTarget: PropTypes.bool.isRequired,
	onMouseOver: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	interest: PropTypes.number,
	newPrice: PropTypes.number
}

export default ItemCategory
