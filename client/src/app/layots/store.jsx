import React from "react"

// Components
import StorePage from "../components/pages/storePage"
import ScopeSliderStoreLoaderGlobal from "../components/HOC/scopeSliderStoreLoaderGlobal"
import CommentsGamesLoaderGlobal from "../components/HOC/commentsGamesLoaderGlobal"

const Store = () => {
	return (
		<CommentsGamesLoaderGlobal>
			<ScopeSliderStoreLoaderGlobal>
				<StorePage />
			</ScopeSliderStoreLoaderGlobal>
		</CommentsGamesLoaderGlobal>
	)
}

export default Store
