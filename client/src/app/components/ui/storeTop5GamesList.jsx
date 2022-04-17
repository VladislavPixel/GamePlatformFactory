import React from "react"
import PropTypes from "prop-types"

// Components
import StoreTop5Card from "./storeTop5Card"

const StoreTop5GamesList = ({ data }) => {
	return (
		<div className="top5-store__games-list list-top5">
			{data.map(item => <StoreTop5Card key={item._id} {...item} />)}
		</div>
	)
}

StoreTop5GamesList.propTypes = {
	data: PropTypes.array.isRequired
}

export default StoreTop5GamesList
