import React from "react"
import CircleDance from "../common/circleDance"
import PropTypes from "prop-types"
import WeHaveBlocks from "../common/weHaveBlocks"

const WeHave = ({ directionCircle, isOffsetCircle, themeColors, text, isBlueCircle, isList, dataList, dataBlocks }) => {
	return (
		<div className="home-block__we-have we-have">
			<div className={`we-have__container _container ${directionCircle === "right" ? directionCircle : "left"}`}>
				<h2 className="we-have__title" style={{ color: themeColors[0], textShadow: themeColors[1] }}>Что вы найдете у нас?</h2>
				<div className="we-have__block">
					<div className="we-have__column">
						{directionCircle === "right" ?
							(isList ? <ul className="we-have__list">
								{dataList.map((text, i) => <li key={i}><span></span>{text}</li>)}
							</ul> : <WeHaveBlocks data={dataBlocks} />) :
							<CircleDance isBlueCircle={isBlueCircle} isOffsetCircle={isOffsetCircle} letter={text} color={themeColors[2]} shadow={themeColors[3]} />
						}
					</div>
					<div className="we-have__column">
						{directionCircle === "right" ?
							<CircleDance isBlueCircle={isBlueCircle} isOffsetCircle={isOffsetCircle} letter={text} color={themeColors[2]} shadow={themeColors[3]} /> :
							(isList ? <ul className="we-have__list">
								{dataList.map((text, i) => <li key={i}><span></span>{text}</li>)}
							</ul> : <WeHaveBlocks data={dataBlocks} />)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

WeHave.defaultProps = {
	isBlueCircle: false,
	text: "F",
	directionCircle: "left",
	isOffsetCircle: false,
	themeColors: ["#ebee39", "0px 14px 44px rgba(220, 152, 57, 0.6)", "#8AF9AD", "0px 14px 34px rgba(140, 249, 172, 0.4)"]
}

WeHave.propTypes = {
	directionCircle: PropTypes.string,
	isOffsetCircle: PropTypes.bool,
	themeColors: PropTypes.array,
	isBlueCircle: PropTypes.bool,
	isList: PropTypes.bool,
	text: PropTypes.string,
	dataList: PropTypes.array,
	dataBlocks: PropTypes.array
}

export default WeHave
