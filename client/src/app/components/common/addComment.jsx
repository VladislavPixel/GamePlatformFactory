import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Components
import Spinner from "./spinner"
import RelationshipBtnsList from "../ui/relationshipBtnsList"
import AddCommentRow from "../ui/addCommentRow"
// Auxiliary
import fakeApi from "../../fakeAPI"

const AddComment = ({ parentClass, isStatus, idCommentTarget }) => {
	// STATE
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [stateForm] = useState({
		text: ""
	})
	const [statusComment, setStatusComment] = useState("")
	const [configMessage, setConfigMessage] = useState({ isMessage: true, color: "#8AF9AD" })
	// HANDLERS
	const handlerSubmitForm = (data) => {
		if (isStatus && configMessage.isMessage) {
			setConfigMessage({ isMessage: true, color: "red" })
		} else {
			if (isStatus) {
				console.log({...data, status: statusComment}, "<--- Отправляем данные")
			} else {
				console.log({...data, _id: "12323fgfdgВСПОМОГАТЕЛЬНЫЙАЙДИ", userId: user._id, date: Date.now(), targetComment: idCommentTarget }, "Я сторонний пользователь и отреагировал на комментарий")
			}
		}
	}
	const handlerUpdateStatusComment = (status) => {
		setStatusComment(status.value)
		if (configMessage.isMessage) setConfigMessage({ isMessage: false, color: "black"})
	}
	useEffect(() => {
		if (user) {
			setIsLoading(false)
		} else {
			fakeApi.getUserById("9098ttyyy43")
				.then(dataUser => setUser(dataUser))
		}
	}, [user])
	return (
		<div className={`${parentClass}__add-comment-block block-add-comment`}>
			{isLoading ? <Spinner /> :
				<React.Fragment>
					{isStatus && <RelationshipBtnsList configMessage={configMessage} currentStatus={statusComment} onUpdate={handlerUpdateStatusComment} />}
					<AddCommentRow {...user} onSubmit={handlerSubmitForm} defaultStateForm={stateForm} />
				</React.Fragment>
			}
		</div>
	)
}

AddComment.defaultProps = {
	isStatus: true
}

AddComment.propTypes = {
	parentClass: PropTypes.string.isRequired,
	isStatus: PropTypes.bool,
	idCommentTarget: PropTypes.string
}

export default AddComment
