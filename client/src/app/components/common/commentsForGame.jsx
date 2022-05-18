import React from "react"

// Components
import CommentsForTheMainWallForGamePageLoaderGlobal from "../HOC/commentsForTheMainWallForGamePageLoaderGlobal"
import CommentsForTheLastWeekForGamePageLoaderGlobal from "../HOC/commentsForTheLastWeekForGamePageLoaderGlobal"
import CommentsLastWeekList from "../ui/commentsLastWeekList"
import CommentsMainWallList from "../ui/commentsMainWallList"

const CommentsForGame = () => {
	// HANDLERS
	const handlerClickBtnReactionOnComment = (reaction, idComment) => {
		console.log("click -->", reaction)
		console.log("id comment -->", idComment)
	}
	return (
		<div className="comments-game-block__comments-row comments-container">
			<div className="comments-container__column">
				<CommentsForTheMainWallForGamePageLoaderGlobal>
					<CommentsMainWallList onClickReaction={handlerClickBtnReactionOnComment} />
				</CommentsForTheMainWallForGamePageLoaderGlobal>
			</div>
			<div className="comments-container__column">
				<div className="comments-container__last-week">
					<h4 className="comments-container__title">За последние 7 дней</h4>
					<CommentsForTheLastWeekForGamePageLoaderGlobal>
						<CommentsLastWeekList onClickReaction={handlerClickBtnReactionOnComment} />
					</CommentsForTheLastWeekForGamePageLoaderGlobal>
				</div>
			</div>
		</div>
	)
}

export default CommentsForGame
