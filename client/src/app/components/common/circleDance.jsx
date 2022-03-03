import React from "react"
import PropTypes from "prop-types"

const CircleDance = ({ letter, color, shadow }) => {
	return (
		<div className="letter-block">
			<div className="letter-block__text" style={{ color: color, textShadow: shadow }}>
				{letter}
				<img className="letter-block__circle" src="./images/circleDance/smallCircle.png" alt="Малый круг" />
				<img className="letter-block__circle" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
				<img className="letter-block__circle" src="./images/circleDance/bigCircle.png" alt="Большой круг" />
				<img className="letter-block__circle-offset" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
				<img className="letter-block__external-element-offset" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
				<img className="letter-block__small-element" src="./images/circleDance/smallElement.png" alt="Малый элемент" />
				<img className="letter-block__middle-element" src="./images/circleDance/middleElement.png" alt="Средний элемент" />
				<img className="letter-block__external-element" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
			</div>
		</div>
	)
}

CircleDance.propTypes = {
	letter: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	shadow: PropTypes.string.isRequired
}

export default CircleDance
