import React from "react"

// Components
import CommentPageLoaderGlobal from "../../HOC/commentPageLoaderGlobal"
import HeadUserInfo from "../../ui/headUserInfo"
import BlocksComment from "../../ui/blocksComment"

const CommentPageById = () => {
	return (
		<div className="block-content__wrapper-comment comment-wrapper">
			<div className="comment-wrapper__container _container">
				<CommentPageLoaderGlobal>
					<HeadUserInfo />
					<BlocksComment />
				</CommentPageLoaderGlobal>
			</div>
		</div>
	)
}

export default CommentPageById
