import React from "react"

// Components
import CommentsForTheLastWeekForGamePageLoaderGlobal from "../HOC/commentsForTheLastWeekForGamePageLoaderGlobal"
import CommentsLastWeekList from "../ui/commentsLastWeekList"

const CommentsForGame = () => {
	// HANDLERS
	const handlerClickBtnReactionOnComment = () => {
		console.log("click")
	}
	return (
		<div className="comments-game-block__comments-row comments-container">
			<div className="comments-container__column"></div>
			<div className="comments-container__column">
				<div className="comments-container__last-week">
					<h3 className="comments-container__title">За последние 7 дней</h3>
					<CommentsForTheLastWeekForGamePageLoaderGlobal>
						<CommentsLastWeekList onClickReaction={handlerClickBtnReactionOnComment} />
					</CommentsForTheLastWeekForGamePageLoaderGlobal>
				</div>
			</div>
		</div>
	)
}

export default CommentsForGame
