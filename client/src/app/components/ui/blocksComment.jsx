import React from "react"

// Components
import GameBlockForCommentPage from "./gameBlockForCommentPage"
import CommentBlockForCommentPage from "./commentBlockForCommentPage"

const BlocksComment = () => {
	return (
		<div className="comment-wrapper__blocks blocks-comment">
			<CommentBlockForCommentPage />
			<GameBlockForCommentPage />
		</div>
	)
}

export default BlocksComment
