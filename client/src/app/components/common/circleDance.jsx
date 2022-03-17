import React from "react"
import PropTypes from "prop-types"

const CircleDance = ({ letter, color, shadow, isOffsetCircle, isBlueCircle }) => {
	return (
		<div className="letter-block">
			<div className="letter-block__text" style={{ color: color, textShadow: shadow }}>
				{letter}
				<img className="letter-block__circle" src="./images/circleDance/smallCircle.png" alt="Малый круг" />
				<img className="letter-block__circle" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
				<img className="letter-block__circle" src="./images/circleDance/bigCircle.png" alt="Большой круг" />
				{isOffsetCircle &&
					<>
						<img className="letter-block__circle-offset" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
						<img className="letter-block__external-element-offset" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
					</>
				}
				{isBlueCircle ?
					<>
						<img className="letter-block__middle-element" src="./images/circleDance/middleElementBlue.png" alt="Средний элемент - blue" />
						<span className="letter-block__wrap-comet"><img style={{ width: "45px", height: "45px" }} src="./images/circleDance/comet.svg" alt="Внешний элемент - комета" /></span>
					</> :
					<>
						<img className="letter-block__middle-element" src="./images/circleDance/middleElement.png" alt="Средний элемент" />
						<img className="letter-block__external-element" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
					</>
				}
				<img className="letter-block__small-element" src="./images/circleDance/smallElement.png" alt="Малый элемент" />
				
			</div>
		</div>
	)
}

CircleDance.propTypes = {
	letter: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	shadow: PropTypes.string.isRequired,
	isOffsetCircle: PropTypes.bool,
	isBlueCircle: PropTypes.bool.isRequired
}

export default CircleDance
