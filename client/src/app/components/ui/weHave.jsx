import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

// Components
import CircleDance from "../common/circleDance"
import WeHaveBlocks from "../common/weHaveBlocks"

const WeHave = ({ directionCircle, isOffsetCircle, themeColors, text, isBlueCircle, isList, dataList, dataBlocks }) => {
	// STATE
	const [widthContainer, setWidthContainer] = useState(null)
	const weHaveContainer = useRef(null)
	useEffect(() => {
		setWidthContainer(weHaveContainer.current.offsetWidth)
	}, [])
	return (
		<div className="home-block__we-have we-have">
			<div ref={weHaveContainer} className={`we-have__container _container ${directionCircle === "right" ? directionCircle : "left"}`}>
				<h2 className="we-have__title" style={{ color: themeColors[0], textShadow: themeColors[1] }}>Что вы найдете у нас?</h2>
				<div className="we-have__block">
					<div className="we-have__column">
						{directionCircle === "right" ?
							(isList ? <ul className="we-have__list">
								{dataList.map((text, i) => <li key={i}><span></span>{text}</li>)}
							</ul> : <WeHaveBlocks data={dataBlocks} />) :
							<CircleDance width={widthContainer} isBlueCircle={isBlueCircle} isOffsetCircle={isOffsetCircle} letter={text} color={themeColors[2]} shadow={themeColors[3]} />
						}
					</div>
					<div className="we-have__column">
						{directionCircle === "right" ?
							<CircleDance width={widthContainer} isBlueCircle={isBlueCircle} isOffsetCircle={isOffsetCircle} letter={text} color={themeColors[2]} shadow={themeColors[3]} /> :
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
	themeColors: ["#ff9e11", "0px 14px 44px rgba(220, 152, 57, 0.6)", "#8AF9AD", "0px 14px 34px rgba(140, 249, 172, 0.4)"]
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
