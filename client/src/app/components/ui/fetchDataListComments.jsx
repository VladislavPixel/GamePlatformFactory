import React, { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

// Components
import ExtendedComment from "../common/extendedComment"
import Spinner from "../common/spinner"
// Auxiliary
import {
	fetchDataCommentsForCommentsPage,
	getStatusLoaderForSubsequentCalls,
	getAllDataComments,
	getStatusReachedBottom,
	getEndGroupIndexForCommentsPage
} from "../../store/commentsForCommentsPage"

const FetchDataListComments = ({ configRequest }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoaderForSubsequentCalls = useSelector(getStatusLoaderForSubsequentCalls())
	const bundleComments = useSelector(getAllDataComments())
	const isReachedBottom = useSelector(getStatusReachedBottom())
	const currentEndGroupIndex = useSelector(getEndGroupIndexForCommentsPage())
	// STATE
	const [inVisibilityTop, setVisibilityTop] = useState(false)
	const [inVisibilityBottom, setVisibilityBottom] = useState(false)
	// AUXILIARY
	const arrGroups = Object.keys(bundleComments)
	const { idGame } = useParams()
	const elementTriggerTop = useRef(null)
	const elementTriggerBottom = useRef(null)
	const listComments = useRef(null)
	let arrElementsForLine = []
	let auxArrForElements = null
	// HANDLERS
	function handlerClickReaction(reaction) {
		console.log(reaction)
	}
	function visibleShowForTop({ current }, windowYValue) {
		// Логика для верхнего триггера
		if (currentEndGroupIndex <= 5) return
		if (current) {
			const staticValueForTriggerTop = current.getBoundingClientRect().top + windowYValue
			if (staticValueForTriggerTop > windowYValue) {
				window.scrollBy(0, 500)
				window.removeEventListener("scroll", auxiliaryVisible)
				setVisibilityTop(true)
			}
		}
	}
	function visibleShowForBottom({ current }, windowYValue) {
		// Логика для нижнего триггера
		if (current) {
			const staticValueForTriggerBottom = current.getBoundingClientRect().bottom + windowYValue
			const heightAll = windowYValue + window.document.documentElement.clientHeight
			if ((heightAll > staticValueForTriggerBottom) && !inVisibilityBottom && !isReachedBottom) {
				window.scrollBy(0, -(currentEndGroupIndex > 4 ? (listComments.current.clientHeight / 4) + 500 : 500))
				window.removeEventListener("scroll", auxiliaryVisible)
				setVisibilityBottom(true)
			}
		}
	}
	function auxiliaryVisible() {
		// Вспомогательная функция для removeEventListener
		visibleShowForTop(elementTriggerTop, window.pageYOffset)
		visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
	}
	useEffect(() => {
		if (!statusLoaderForSubsequentCalls) {
			window.addEventListener("scroll", auxiliaryVisible)
		} else {
			window.removeEventListener("scroll", auxiliaryVisible)
		}
		visibleShowForTop(elementTriggerTop, window.pageYOffset)
		visibleShowForBottom(elementTriggerBottom, window.pageYOffset)
		return () => {
			window.removeEventListener("scroll", auxiliaryVisible)
		}
	}, [statusLoaderForSubsequentCalls])

	// FETCHING DATA COMMENTS
	useEffect(() => {
		if (inVisibilityTop) dispatch(fetchDataCommentsForCommentsPage(configRequest, "second", idGame, "top"))
	}, [inVisibilityTop, dispatch, idGame, configRequest])
	useEffect(() => {
		if (inVisibilityBottom) dispatch(fetchDataCommentsForCommentsPage(configRequest, "second", idGame, "bottom"))
	}, [inVisibilityBottom, dispatch, idGame, configRequest])
	return (
		<React.Fragment>
			<div ref={listComments} className="comments-page-game-block__list list-comments-page">
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
				{isReachedBottom &&
					<div className="list-comments-page__block-reached-bottom">
						<img title="Ну привет землянин)" className="list-comments-page__icon-bottom" src="/images/icons/aliens.svg" alt="Инопланетянин" />
						<p className="list-comments-page__message-reached-bottom">Вы просмотрели все комментарии для этой игры по указанным фильтрам. Попробуйте изменить фильтры.</p>
					</div>
				}
				<div ref={elementTriggerBottom} className="list-comments-page__trigger">trigger bottom</div>
			</div>
			{statusLoaderForSubsequentCalls && !isReachedBottom && <div className="list-comments-page__message-spinner"><p>Идет подгрузка комментариев</p><Spinner /></div>}
		</React.Fragment>
	)
}

FetchDataListComments.propTypes = {
	configRequest: PropTypes.object.isRequired
}

export default FetchDataListComments
