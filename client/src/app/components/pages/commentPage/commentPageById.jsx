import React from "react"
import CommentPageLoaderGlobal from "../../HOC/commentPageLoaderGlobal"

const CommentPageById = () => {
	return (
		<div className="block-content__wrapper-comment comment-wrapper">
			<div className="comment-wrapper__container _container">
				<CommentPageLoaderGlobal>
					страница комментария
				</CommentPageLoaderGlobal>
			</div>
		</div>
	)
}

export default CommentPageById
