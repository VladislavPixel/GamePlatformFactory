import React from "react"
import PropTypes from "prop-types"

const HomeCategoryBlock = ({ title, categories }) => {
	return (
		<div className="home-block__category category-block">
			<div className="category-block__container _container">
				<h2 className="category-block__title">{title}</h2>
				<div className="category-block__wrap wrap-category">
					{categories.map(item => <button type="button" key={item._id} className="wrap-category__item">{item.title}</button>)}
				</div>
			</div>
		</div>
	)
}

HomeCategoryBlock.propTypes = {
	title: PropTypes.string.isRequired
}

export default HomeCategoryBlock
