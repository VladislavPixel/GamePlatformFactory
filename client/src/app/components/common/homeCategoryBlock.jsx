import React, { useState } from "react"
import PropTypes from "prop-types"
import ItemCategory from "../ui/itemCategory"

const HomeCategoryBlock = ({ title, categories, games, path }) => {
	const [selectedCategory, setSelectedCategory] = useState(categories[0])
	const handlerUpdateCategory = (newCategory) => setSelectedCategory(newCategory)
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
							{games.map((item, i) => <ItemCategory key={i} {...item} path={path} />)}
						</div>
					</div>
					<div className="category-block__column">
						<div className="category-block__screens-block">
							
						</div>
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
	path: PropTypes.string.isRequired
}

export default HomeCategoryBlock
