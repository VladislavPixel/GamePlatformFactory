import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import getDateInStringFormat from "../../utils/getDateInStringFormat"

const DiscussionSmallItem = ({ nickName, text, avatar, date, userId, classesParent }) => {
	return (
		<div className={`${classesParent}__small-item item-small-discus`}>
			<div className="item-small-discus__small-column">
				<Link className="item-small-discus__small-wrap-img" title={`Нажмите, чтобы перейти в profile ${nickName}`} to={`/profile/${userId}`}>
					<img className="item-small-discus__small-img" src={`/images/users/avatar/${avatar}`} alt={`Аватарка ${nickName}`} />
				</Link>
			</div>
			<div className="item-small-discus__small-column">
				<div className="item-small-discus__small-row">
					<Link title={`Нажмите, чтобы перейти в profile ${nickName}`} to={`/profile/${userId}`}>{nickName}</Link>
					<p className="item-small-discus__small-date">{getDateInStringFormat(date)}</p>
				</div>
				<p className="item-small-discus__small-text">{text}</p>
			</div>
		</div>
	)
}

DiscussionSmallItem.propTypes = {
	nickName: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	userId: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired
}

export default DiscussionSmallItem