import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import chatRules from "../../configAuxiliary/chatRules.json"

const ChatRules = ({ classesParent }) => {
	return (
		<div title="Могут показаться вам недемократичными, но поверьте, это уже международная практика общения." className={`${classesParent}__rules-container container-rules`}>
			<div className="container-rules__head">
				<img className="container-rules__icon" src="/images/icons/rules.svg" alt="Иконка книги, символизирующей правила чатов" />
				<h3 className="container-rules__title">Напоминалка правил всех чатов на платформе Factory.inc</h3>
			</div>
			<ul className="container-rules__list">
				{chatRules.map((text, index) => <li key={index}><span>{index + 1})</span>{text}</li>)}
			</ul>
		</div>
	)
}

ChatRules.propTypes = {
	classesParent: PropTypes.string.isRequired
}

export default ChatRules
