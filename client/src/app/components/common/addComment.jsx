import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Components
import Spinner from "./spinner"
import RelationshipBtnsList from "../ui/relationshipBtnsList"
import AddCommentRow from "../ui/addCommentRow"
// Auxiliary
import fakeApi from "../../fakeAPI"

const AddComment = ({ parentClass }) => {
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
		if (configMessage.isMessage) {
			setConfigMessage({ isMessage: true, color: "red" })
		} else {
			console.log({...data, status: statusComment}, "<--- Отправляем данные")
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
					<RelationshipBtnsList configMessage={configMessage} currentStatus={statusComment} onUpdate={handlerUpdateStatusComment} />
					<AddCommentRow {...user} onSubmit={handlerSubmitForm} defaultStateForm={stateForm} />
				</React.Fragment>
			}
		</div>
	)
}

AddComment.propTypes = {
	parentClass: PropTypes.string.isRequired
}

export default AddComment
