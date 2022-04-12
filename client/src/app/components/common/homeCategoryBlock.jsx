import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

// Components
import ItemCategory from "../ui/itemCategory"
import ScreensBlock from "../ui/screensBlock"

const HomeCategoryBlock = ({ title, categories, games, path, screens }) => {
	const [selectedCategory, setSelectedCategory] = useState(categories[0])
	const handlerUpdateCategory = (newCategory) => setSelectedCategory(newCategory)
	const filteredArray = games.filter(el => el.category === selectedCategory._id)
	const [gameTarget, setGameTarget] = useState(filteredArray[0])
	const [screensConfig, setScreensConfig] = useState(screens.find(item => item._id === filteredArray[0]._id))
	const handlerMouseOverItemCategory = ({ target }) => {
		let id = target.dataset.id
		if (!id) {
			id = target.closest(".category-block__game-card").dataset.id
		}
		setGameTarget(filteredArray.find(el => el._id === id))
	}
	useEffect(() => {
		setScreensConfig(screens.find(item => item._id === filteredArray[0]._id))
		setGameTarget(filteredArray[0])
	}, [selectedCategory])
	useEffect(() => {
		setScreensConfig(screens.find(item => item._id === gameTarget._id))
	}, [gameTarget])
	return (
		<div className="home-block__category category-block">
			<div className="category-block__container _container">
				<h2 className="category-block__title">{title}</h2>
				<div className="category-block__wrap wrap-category">
					{categories.map(item => <button onClick={() => handlerUpdateCategory(item)} type="button" key={item._id} className={"wrap-category__item" + (selectedCategory._id === item._id ? " active" : "") }>{item.title}</button>)}
				</div>
				<div className="category-block__row">
					<div className="category-block__column">
						<div className="category-block__games-block">
							{filteredArray.map(item => <ItemCategory onMouseOver={handlerMouseOverItemCategory} isTarget={gameTarget._id === item._id} key={item._id} {...item} path={path} />)}
						</div>
					</div>
					<div className="category-block__column">
						<ScreensBlock title={gameTarget.title} tags={gameTarget.tags} path={path} images={screensConfig.images} />
					</div>
				</div>
			</div>
		</div>
	)
}

HomeCategoryBlock.propTypes = {
	title: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	games: PropTypes.array.isRequired,
	path: PropTypes.string.isRequired,
	screens: PropTypes.array.isRequired
}

export default HomeCategoryBlock
