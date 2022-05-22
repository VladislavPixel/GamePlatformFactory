import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

// Components
import ExtendedComment from "../common/extendedComment"
import withMessage from "../HOC/withMessage"
import LiteMessage from "../common/liteMessage"
// Auxiliary
import {
	getDataCommentsForTheMainWall
} from "../../store/commentsForGamePage"

const CommentsMainWallList = ({ onClickReaction }) => {
	// AUXILIARY
	const { idGame } = useParams()
	const getPhrase = (value) => {
		if (value === 1) return " полезный обзор"
		if (value > 1 && value < 5) return " полезных обзора"
		return " полезных обзоров"
	}
	// REDUX
	const commentsForTheMainWall = useSelector(getDataCommentsForTheMainWall())

	const correctLengthValue = commentsForTheMainWall === null ? 0 : commentsForTheMainWall.length
	const ELEMENT = <div className="comments-container__main-wall-list-container block-main-wall">
			<h4 className="block-main-wall__title">
				<span>{commentsForTheMainWall.length}</span> наиболее
				{getPhrase(commentsForTheMainWall.length)}
			</h4>
			<div className="block-main-wall__list">
				{commentsForTheMainWall.map(comment => <ExtendedComment classesParent="block-main-wall" onClickReaction={onClickReaction} key={comment._id} {...comment} />)}
			</div>
			<div className="block-main-wall__container-link">
				<Link title="Перейти на страницу, где Вы сможете ознакомиться со всеми комментариями и рецензиями" to={`/comments/${idGame}`}>Ознакомиться со всеми комментариями и рецензиями по этой игре можно тут</Link>
			</div>
		</div>
	const ElementWithMessage = withMessage(ELEMENT, <LiteMessage iconPath="sadIcon2.svg" altIcon="Очень грустный смайлик с большими глазами" classes="comments-container__message-main-wall" title="Полезных обзоров у этой игры не найдено" offer="Предлагаем Вам оставить свой комментарий по продукту, если другие пользователи с ним согласятся, то он непременно окажется здесь. Тем самым Вы поможете сообществу и прокачаетесь в ранге)" />, correctLengthValue)
	return <ElementWithMessage />
}

CommentsMainWallList.propTypes = {
	onClickReaction: PropTypes.func.isRequired
}

export default CommentsMainWallList