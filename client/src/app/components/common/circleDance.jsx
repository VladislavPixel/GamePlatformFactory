import React from "react"
import PropTypes from "prop-types"

const CircleDance = ({ letter, color, shadow, isOffsetCircle, isBlueCircle, width }) => {
	return (
		<div className="letter-block">
			<div className="letter-block__text" style={{ color: color, textShadow: shadow }}>
				{letter}
				{width >= 870 ?
					<React.Fragment>
						<img className="letter-block__circle" src="./images/circleDance/smallCircle.png" alt="Малый круг" />
						<img className="letter-block__circle" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
						<img className="letter-block__circle" src="./images/circleDance/bigCircle.png" alt="Большой круг" />
						{isOffsetCircle &&
							<React.Fragment>
								<img className="letter-block__circle-offset" src="./images/circleDance/middleCircle.png" alt="Средний круг" />
								<img className="letter-block__external-element-offset" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
							</React.Fragment>
						}
						{isBlueCircle ?
							<React.Fragment>
								<img className="letter-block__middle-element" src="./images/circleDance/middleElementBlue.png" alt="Средний элемент - blue" />
								<span className="letter-block__wrap-comet"><img style={{ width: "45px", height: "45px" }} src="./images/circleDance/comet.svg" alt="Внешний элемент - комета" /></span>
							</React.Fragment> :
							<React.Fragment>
								<img className="letter-block__middle-element" src="./images/circleDance/middleElement.png" alt="Средний элемент" />
								<img className="letter-block__external-element" src="./images/circleDance/externalElement.png" alt="Внешний элемент" />
							</React.Fragment>
						}
						<img className="letter-block__small-element" src="./images/circleDance/smallElement.png" alt="Малый элемент" />
					</React.Fragment> :
					<React.Fragment>
						<img className="letter-block__circle" src="./images/circleDance/circleSmallSmallMode.png" alt="Малый круг для отображения на маленьких устройствах" />
						<img className="letter-block__circle" src="./images/circleDance/circleMiddleSmallMode.png" alt="Средний круг для отображения на маленьких устройствах" />
						<img className="letter-block__circle" src="./images/circleDance/circleBigSmallMode.png" alt="Большой круг для отображения на маленьких устройствах" />
						{isBlueCircle ?
							<React.Fragment>
								
							</React.Fragment> :
							<React.Fragment>
								<img className="letter-block__middle-element-for-small-mode" src="./images/circleDance/middleElementForSmallMode.png" alt="Средний элемент для маленьких устройств" />
								<img className="letter-block__external-element-for-small-mode" src="./images/circleDance/externalElementForSmallMode.png" alt="Внешний элемент для маленьких устройств" />
								<img className="letter-block__external-element-for-small-mode letter-block__external-element-for-small-mode_second" src="./images/circleDance/externalElementForSmallMode.png" alt="Внешний элемент для маленьких устройств" />
							</React.Fragment>
						}
						<img className="letter-block__small-element-for-small-mode" src="./images/circleDance/smallElementForSmallMode.png" alt="Малый элемент для отображения на маленьких устройствах" />
					</React.Fragment>
				}
			</div>
		</div>
	)
}

CircleDance.propTypes = {
	letter: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	shadow: PropTypes.string.isRequired,
	isOffsetCircle: PropTypes.bool,
	isBlueCircle: PropTypes.bool.isRequired,
	width: PropTypes.number
}

export default CircleDance
