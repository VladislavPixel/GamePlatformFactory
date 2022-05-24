import React, { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import { flushSync } from "react-dom"

// Components
import ExtendedComment from "../common/extendedComment"
import Spinner from "../common/spinner"
// Auxiliary
import {
	fetchDataCommentsForCommentsPage,
	getStatusLoaderForSubsequentCalls,
	getAllDataComments
} from "../../store/commentsForCommentsPage"

const FetchDataListComments = ({ configRequest }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderForSubsequentCalls = useSelector(getStatusLoaderForSubsequentCalls())
	const bundleComments = useSelector(getAllDataComments())
	const arrGroups = Object.keys(bundleComments)
	// STATE
	const [inVisibility, setVisibility] = useState(false) 
	// AUXILIARY
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

	}
	function visibleShowForBottom({ current }, windowYValue) {
		if (current) {
			const staticTop = current.getBoundingClientRect().bottom + windowYValue
			const heightAll = windowYValue + window.document.documentElement.clientHeight
			if ((heightAll > staticTop) && !inVisibility) setVisibility(true)
		}
	}
	function auxiliaryVisible() {
		//visibleShowForTop(elementTriggerTop.current.getBoundingClientRect(), window.pageYOffset)
		visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
	}
	useEffect(() => {
		if (!statusLoaderForSubsequentCalls) {
			window.addEventListener("scroll", auxiliaryVisible)
		} else {
			window.removeEventListener("scroll", auxiliaryVisible)
		}
		//visibleShowForTop(elementTriggerTop.current.getBoundingClientRect(), window.pageYOffset)
		visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
		return () => {
			window.removeEventListener("scroll", auxiliaryVisible)
		}
	}, [])
	useEffect(() => {
		if (inVisibility) dispatch(fetchDataCommentsForCommentsPage(configRequest, "second", idGame, "bottom"))
	}, [inVisibility])
	return (
		<React.Fragment>
			<div className="comments-page-game-block__list list-comments-page">
				<div ref={elementTriggerTop} className="list-comments-page__trigger">trigger top</div>
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
				<div ref={elementTriggerBottom} className="list-comments-page__trigger">trigger bottom</div>
			</div>
			{statusLoaderForSubsequentCalls && <Spinner />}
		</React.Fragment>
	)
}
//dispatch(fetchDataCommentsForCommentsPage(configRequest, "second", endGroup, idGame))
FetchDataListComments.propTypes = {
	configRequest: PropTypes.object.isRequired
}

export default FetchDataListComments
