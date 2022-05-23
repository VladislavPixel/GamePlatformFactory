import React, { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

// Components
import ExtendedComment from "../common/extendedComment"
import Spinner from "../common/spinner"
// Auxiliary
import { fetchDataCommentsForCommentsPage, getStatusLoaderForSubsequentCalls } from "../../store/commentsForCommentsPage"

const FetchDataListComments = ({ bundleComments, arrGroups, configRequest }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderForSubsequentCalls = useSelector(getStatusLoaderForSubsequentCalls())
	// STATE
	const [startGroup, setStartGroup] = useState(1)
	const [endGroup, setEndGroup] = useState(2)
	// AUXILIARY
	let auxIndex = endGroup
	const { idGame } = useParams()
	const elementTriggerTop = useRef(null)
	const elementTriggerBottom = useRef(null)
	let arrElementsForLine = []
	let auxArrForElements = null
	// HANDLERS
	function handlerClickReaction(reaction) {
		console.log(reaction)
	}
	function visibleShowForTop(objectBounding, windowYValue) {
		console.log(windowYValue, "Количество пролистываемых пикселей")
		console.log(objectBounding.bottom + windowYValue, "Расстояние от верха до нижней точки элемента")
	}

	function visibleShowForBottom(ref, windowYValue) {
		if (ref.current) {
			const staticTop = ref.current.getBoundingClientRect().bottom + windowYValue
			const heightAll = windowYValue + window.document.documentElement.clientHeight
			if (heightAll >= staticTop) {
				
				dispatch(fetchDataCommentsForCommentsPage(configRequest, "second", auxIndex, idGame))
				setEndGroup(prevState => (auxIndex + 1))
			}
		}
	}
	console.log("Рендер")
	useEffect(() => {
		function auxiliaryVisible() { // При каждом срабатывании event scroll происходит прокидывание BoundingClientRect таргетируемого объекта
			//visibleShowForTop(elementTriggerTop.current.getBoundingClientRect(), window.pageYOffset) // что позволяет получать обновленные координаты
			visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
		}
		window.addEventListener("scroll", auxiliaryVisible)
		//visibleShowForTop(elementTriggerTop.current.getBoundingClientRect(), window.pageYOffset)
		visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
		return () => {
			window.removeEventListener("scroll", auxiliaryVisible)
		}
	}, [])
	return (
		<React.Fragment>
			<div className="comments-page-game-block__list list-comments-page">
				<div ref={elementTriggerTop} className="list-comments-page__trigger">trigger</div>
				{arrGroups.map(keyBundle => {
					return (
						<div className="list-comments-page__block-comments" key={keyBundle}>
							{bundleComments[keyBundle].map((comment, index) => {
								if ((index + 1) % 3 === 0) return <ExtendedComment classesParent="list-comments-page" isDiscussionSection={true} onClickReaction={handlerClickReaction} key={comment._id} {...comment} />
								arrElementsForLine.push(comment)
								if (arrElementsForLine.length === 2 || index === bundleComments[keyBundle].length - 1) {
									auxArrForElements = arrElementsForLine
									arrElementsForLine = []
									return (
										<div key={index} className="list-comments-page__line-comment">
											{auxArrForElements.map(item => <ExtendedComment classesParent="list-comments-page" isDiscussionSection={true} onClickReaction={handlerClickReaction} key={item._id} {...item} />)}
										</div>
									)
								}
								return null
							})}
						</div>
					)
				})}
				<div ref={elementTriggerBottom} className="list-comments-page__trigger">trigger</div>
			</div>
			{statusLoaderForSubsequentCalls && <Spinner />}
		</React.Fragment>
	)
}

FetchDataListComments.propTypes = {
	bundleComments: PropTypes.object.isRequired,
	arrGroups: PropTypes.array.isRequired,
	configRequest: PropTypes.object.isRequired
}

export default FetchDataListComments
