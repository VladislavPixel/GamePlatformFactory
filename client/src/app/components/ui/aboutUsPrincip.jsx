import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"

const AboutUsPrincip = ({ title, text, pathImage, alt, icon, altIcon }) => {
	// Базовые высоты элементов при первом монтировании компонента
	const [heightBlock, setHeightBlock] = useState(null)
	const [heightText, setHeightText] = useState(null)
	const [heightTitle, setHeightTitle] = useState(null)
	// refs на html element для получения высот
	const refText = useRef(null)
	const refBlock = useRef(null)
	const refTitle = useRef(null)
	const [stylessContent, setStylessContent] = useState({})
	const [isShow, setShow] = useState(false)
	const handlerMouseOver = ({ target }) => {
		if (target.closest(".values-about-us__block-princip")) {
			setShow(true)
		}
	}
	const handlerMouseOut = ({ relatedTarget }) => {
		if (!relatedTarget.closest(".values-about-us__block-princip")){
			setShow(false)
		}
	}
	useEffect(() => {
		// Устанавливаем высоты для расчетов
		setHeightBlock(refBlock.current.offsetHeight)
		setHeightText(refText.current.offsetHeight + 20)
		setHeightTitle(refTitle.current.offsetHeight)
		// После установок скрываем text
		setTimeout(() => {
			refText.current.style.height = 0
		}, 10)
		setStylessContent({ overflow: "hidden" })
		// OVER = OUT
		refBlock.current.addEventListener("mouseover", handlerMouseOver)
		refBlock.current.addEventListener("mouseout", handlerMouseOut)
		const REF_BLOCK_SAVE = refBlock.current
		return function clearHandlers() {
			REF_BLOCK_SAVE.removeEventListener("mouseover", handlerMouseOver)
			REF_BLOCK_SAVE.removeEventListener("mouseout", handlerMouseOut)
		}
	}, [])
	useEffect(() => {
		// Основная логика для toggle TEXT-BLOCK
		if (isShow) {
			refText.current.style.height = heightText + "px"
			if (heightBlock - 40 < heightTitle + heightText + 40) {
				setStylessContent({ overflow: "auto" })
			}
		} else {
			refText.current.style.height = 0
			setStylessContent({ overflow: "hidden" })
		}
	}, [isShow, heightText, heightBlock, heightTitle])
	return (
		<div className="values-about-us__column">
			<div ref={refBlock} className="values-about-us__block-princip">
				<img className="values-about-us__poster" src={`./images/valuesAboutUs/${pathImage}`} alt={alt} />
				<div style={stylessContent} className="values-about-us__content">
					{icon && <img className="values-about-us__icon" src={`./images/icons/${icon}`} alt={altIcon} />}
					<h3 ref={refTitle} className="values-about-us__title-block">{title}</h3>
					<p ref={refText} className="values-about-us__text">{text}</p>
				</div>
			</div>
		</div>
	)
}

AboutUsPrincip.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	pathImage: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	icon: PropTypes.string,
	altIcon: PropTypes.string
}

export default AboutUsPrincip
