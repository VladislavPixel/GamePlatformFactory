import React from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

// Components
import withMessage from "./withMessage"
import MiddleMessage from "../common/middleMessage"
// Auxiliary
import { getErrorForUsersTop100Data, getDataUsersTop100 } from "../../store/usersTop100Data"

const UsersTop100DataNumberController = ({ children }) => {
   const navigate = useNavigate()
   // REDUX
   const errorFetchData = useSelector(getErrorForUsersTop100Data())
	const data = useSelector(getDataUsersTop100())
   // HANDLERS
   const handlerClickMessage = () => {
		if (errorFetchData) {
			window.location.reload()
		} else {
			navigate("/store")
		}
	}
   // AUXILIARY
   const correctConfig = errorFetchData ?
		{ title: "Уупс, что-то пошло не так, раз Вы видите это сообщение", offer: `Попробуйте обновить страницу, для этого воспользуйтесь кнопкой ниже. Если Вы все еще видите это сообщение, значит мы уже решаем эту проблему. С "Доской почета" Вы сможете ознакомиться позже, а пока воспользуйтесь панелью навигации вверху или внизу.`, textBtn: "Обновить страницу" }
		: { title: `В настоящий момент на нашей "доске почета Factory.inc" нет никого. Вы можете стать первым.`, offer: "Перейдите в магазин --> выберите интересующую Вас игру --> оставьте комментарий --> и заработайте очки платформы) Удачи!", textBtn: "Перейти в магазин" }
   const ChildrenWithLoadingWithMessage = withMessage(
      children,
      <MiddleMessage altIcon="Грустный смайлик" iconPath="sadIcon2.svg" onCallback={handlerClickMessage} classesParent="board-honor-wrapper" title={correctConfig.title} offer={correctConfig.offer} textBtn={correctConfig.textBtn} />,
      errorFetchData ? 0 : data.length
   )
   return <ChildrenWithLoadingWithMessage />
}

UsersTop100DataNumberController.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default UsersTop100DataNumberController
