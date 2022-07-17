import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import DiscussionsHeadPanel from "./discussionsHeadPanel"
import DiscussionsList from "./discussionsList"
// Auxiliary
import { getEntitiesDiscussionsForCommentPage } from "../../store/comment"

const DiscussionsBlock = ({ classesParent, headPanelText }) => {
	// REDUX
	const data = useSelector(getEntitiesDiscussionsForCommentPage())
	// AUXILIARY
	const [currentPagin, setCurrentPagin] = useState(0)
	const MAX_DISCUSSIONS_ON_PAGE = 10
	const pagesNumber = Math.ceil(data.length / MAX_DISCUSSIONS_ON_PAGE)
	// HANDLERS
	const handlerChangePagins = (newValuePagin) => {
		if (currentPagin !== newValuePagin) setCurrentPagin(newValuePagin)
	}
	return (
		<div className={`${classesParent}__discussions-wrap wrap-discussions`}>
			<DiscussionsHeadPanel onChangePagination={handlerChangePagins} text={headPanelText} valueAll={data.length} pagesNumber={pagesNumber} currentPagin={currentPagin} />
			<DiscussionsList discussionsData={data} />
		</div>
	)
}

DiscussionsBlock.defaultProps = {
	headPanelText: "Комментариев:"
}

DiscussionsBlock.propTypes = {
	classesParent: PropTypes.string.isRequired,
	headPanelText: PropTypes.string
}

export default DiscussionsBlock
