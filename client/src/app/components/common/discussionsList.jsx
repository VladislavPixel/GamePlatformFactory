import React from "react"
import PropTypes from "prop-types"

// Components
import DiscussionItem from "./discussionItem"

const DiscussionsList = ({ discussionsData }) => {
	return (
		<div className="wrap-discussions__list">
			{discussionsData.map((item, index) => <DiscussionItem key={index + item._id} {...item} />)}
		</div>
	)
}

DiscussionsList.propTypes = {
	discussionsData: PropTypes.array.isRequired
}

export default DiscussionsList