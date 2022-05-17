import React from "react"
import { useSelector } from "react-redux"

// Components
import CommentMainWall from "./commentMainWall"
import withMessage from "../HOC/withMessage"
import LiteMessage from "../common/liteMessage"
// Auxiliary
import {
	getDataCommentsForTheMainWall
} from "../../store/commentsForGamePage"

const CommentsMainWallList = () => {
	const commentsForTheMainWall = useSelector(getDataCommentsForTheMainWall())
	console.log(commentsForTheMainWall, "MAIN-WALL")
	const getPhrase = (value) => {
		if (value === 1) return " полезный обзор"
		if (value > 1 && value < 5) return " полезных обзора"
		return " полезных обзоров"
	}
	const correctLengthValue = commentsForTheMainWall === null ? 0 : commentsForTheMainWall.length
	const ELEMENT = <div className="comments-container__main-wall-list-container block-main-wall">
			<h4 className="block-main-wall__title">
				<span>{commentsForTheMainWall.length}</span> наиболее
				{getPhrase(commentsForTheMainWall.length)}
			</h4>
			<div className="block-main-wall__list">
				{commentsForTheMainWall.map(comment => <CommentMainWall key={comment._id} {...comment} />)}
			</div>
		</div>
	const ElementWithMessage = withMessage(ELEMENT, <LiteMessage iconPath="sadIcon2.svg" altIcon="Очень грустный смайлик с большими глазами" classes="comments-container__message-main-wall" title="Полезных обзоров у этой игры не найдено" offer="Предлагаем Вам оставить свой комментарий по продукту, если другие пользователи с ним согласятся, то он непременно окажется здесь. Тем самым Вы поможете сообществу и прокачаетесь в ранге)" />, correctLengthValue)
	return <ElementWithMessage />
}

export default CommentsMainWallList