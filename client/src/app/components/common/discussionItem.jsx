import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import fakeApi from "../../fakeAPI"

// Components
import FormComponent, { TextAreaField } from "./form"
import DiscussionSmallItem from "./discussionSmallItem"
// Auxiliary
import getDateInStringFormat from "../../utils/getDateInStringFormat"

const DiscussionItem = ({ nickName, text, avatar, date, rank, userId, hisDiscussionsSub, _id }) => {
	// AUXILIARY
	const [data] = useState({
		text: ""
	})
	const [error, setError] = useState(false)
	const [isForm, setIsForm] = useState(false)
	const [isAnswerBtn, setIsAnswerBtn] = useState(true)
	const [isSubList, setIsSubList] = useState(false)
	const [arrSubComments, setArrSubComments] = useState([])
	const [isLoadingSubComments, setLoadingSubComments] = useState(false)
	const [isRequestedSubComments, setIsRequestedSubComments] = useState(false)
	const { title } = rank
	const valueDiscSub = hisDiscussionsSub.length
	const validatorConfig = {
		text: { isRequired: { message: `Поле обязательно для заполнения` } }
	}
	// HANDLERS
	const handlerSubmit = (data) => {
		console.log("Отправляю данные!", data)
	}
	const handlerCancellation = () => {
		setIsForm(prevState => !prevState)
		setIsAnswerBtn(prevState => !prevState)
	}
	const getPhrase = (value) => {
		const txtValue = `${value}`
		const lastEl = txtValue[txtValue.length - 1]
		if (value === 1) return "ответ от пользователя"
		if (value > 20 && lastEl === "1") return "ответ от пользователей"
		if ((value > 1 && value < 5) || (lastEl === "2" || lastEl === "3" || lastEl === "4")) return "ответа от пользователей"
		return "ответов от пользователей"
	}
	const handlerClickSubDisBtn = () => setIsSubList(prevState => !prevState)
	const fetchDataSubDisc = async (id) => {
		setLoadingSubComments(prevState => !prevState)
		setError(false)
		try {
			const dataSubDisc = await fakeApi.getAllDiscussionsSubById(id)
			const discussionsSubWithUsers = await Promise.all(
				dataSubDisc.map(async (discusSub) => {
				const user = await fakeApi.getUserById(discusSub.userId)
				return { ...user, ...discusSub }
			}))
			setArrSubComments(discussionsSubWithUsers)
			setIsRequestedSubComments(true)
		} catch (err) {
			setError(true)
		} finally {
			setLoadingSubComments(prevState => false)
		}
	}
	useEffect(() => {
		if (isSubList && !isRequestedSubComments) fetchDataSubDisc(_id)
	}, [isSubList, _id, isRequestedSubComments])
	return (
		<div className="wrap-discussions__element">
			<div className="wrap-discussions__column-el">
				<Link title={`Нажмите для перехода на страницу пользователя: ${nickName}`} to={`/profile/${userId}`}><img className="wrap-discussions__image-el" src={`/images/users/avatar/${avatar}`} alt={`Аватарка пользователя - ${nickName}`} /></Link>
			</div>
			<div className="wrap-discussions__column-el">
				<div className="wrap-discussions__row">
					<Link className="wrap-discussions__nick-link" title={`Нажмите для перехода на страницу пользователя: ${nickName}`} to={`/profile/${userId}`}>{nickName}</Link>
					<p className="wrap-discussions__date-el">{getDateInStringFormat(date)}</p>
				</div>
				<p className="wrap-discussions__rank-el">{title}</p>
				<p className="wrap-discussions__text-el">{text}</p>
				{
					isAnswerBtn &&
					<div className="wrap-discussions__container-answer-btn">
						<button title="При нажатии откроется выпадающая форма, и вы сможете оставить ответ" onClick={handlerCancellation} className="wrap-discussions__answer-btn" type="button">Ответить</button>
					</div>
				}
				{
					isForm &&
					<FormComponent onSubmit={handlerSubmit} config={validatorConfig} defaultData={data} classesParent="wrap-discussions">
						<TextAreaField label="Возможно Вам есть что сказать" name="text" placeholder="Введите ответ" />
						<button title="Нажмите для того чтобы отправить свой ответ" className="wrap-discussions__btn-sub" type="submit">Отправить</button>
						<button data-status="alwaysWorking" onClick={handlerCancellation} title="Нажмите для того чтобы скрыть выпадающую форму" className="wrap-discussions__btn-cancellation" type="button">Отмена</button>
					</FormComponent>
				}
				{
					valueDiscSub > 0 &&
					<button title="Нажмите, чтобы ознакомиться с ответами" onClick={handlerClickSubDisBtn} className="wrap-discussions__sub-disc-controller" type="button">
						<span className={isSubList ? "active" : ""}></span>
						Показать {valueDiscSub > 1 ? valueDiscSub : ""} {getPhrase(valueDiscSub)} платформы
					</button>
				}
				{
					// ДОДЕЛАТЬ
					<div className="wrap-discussions__list-sub-disc">
						{arrSubComments.map((item, index) => <DiscussionSmallItem key={index + item._id} {...item} classesParent="wrap-discussions" />)}
					</div>
				}
			</div>
		</div>
	)
}

DiscussionItem.propTypes = {
	nickName: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	rank: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	hisDiscussionsSub: PropTypes.array.isRequired,
	_id: PropTypes.string.isRequired
}

export default DiscussionItem
