import React from "react"
import PropTypes from "prop-types"

const ScreensBlock = ({ title, tags, path, images }) => {
	return (
		<div className="category-block__screens-block screens-block-category">
			<h3 className="screens-block-category__title">{title}</h3>
			<div className="screens-block-category__tags">
				{tags.map((tag, i) => <span key={i}>{tag}</span>)}
			</div>
			<div className="screens-block-category__screens">
				{images.map((screen, i) => {
					return (
						<div key={i} className="screens-block-category__sc-block">
							<img src={path + screen.path} alt={screen.alt} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

ScreensBlock.propTypes = {
	title: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	path: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired
}

export default ScreensBlock
