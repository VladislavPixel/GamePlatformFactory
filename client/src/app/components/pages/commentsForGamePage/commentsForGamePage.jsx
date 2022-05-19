import React from "react"

// Components
import CommentsPageGameHead from "../../ui/commentsPageGameHead"
import PanelFiltersForCommentsPage from "../../ui/panelFiltersForCommentsPage"

const CommentsForGamePage = () => {
	return (
		<div className="block-content__commentsForGame comments-page-game-block">
			<div className="comments-page-game-block__container _container">
				<CommentsPageGameHead />
				<PanelFiltersForCommentsPage />
			</div>
		</div>
	)
}

export default CommentsForGamePage
