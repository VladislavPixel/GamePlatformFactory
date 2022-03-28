import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Spinner from "../common/spinner"
import { Link } from "react-router-dom"
import LiteMessage from "../common/liteMessage"
import { getIsLoadingTop18Games, fetchAllGamesTop18, getDataTop18Games } from "../../store/games"
import { useDispatch, useSelector } from "react-redux"
import withMessage from "../HOC/withMessage"
import withLoading from "../HOC/withLoading"

const ModalFastAccessStore = ({ targetBtn }) => {
	const dispatch = useDispatch()
	const isLoadingDataTop18 = useSelector(getIsLoadingTop18Games())
	const dataTop18 = useSelector(getDataTop18Games())
	useEffect(() => {
		if (isLoadingDataTop18) dispatch(fetchAllGamesTop18())
	}, [])
	const FastAccessListWithMessage = withMessage(<ul className="modal-fast-access__list-wallet">{dataTop18.map(item => <li key={item._id}><Link to="/">{item.title}</Link></li>)}</ul>, <LiteMessage title="В настоящее время быстрый доступ к ТОП - 18 игр недоступен" offer="Вы сможете воспользоваться ими позже" classes="modal-fast-access__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />, dataTop18.length)
	const FastAccessListWithMessageWithLoading = withLoading(FastAccessListWithMessage, isLoadingDataTop18)
	return (
		<div className={`navigation-store__fast-access-modal modal-fast-access${targetBtn === "fastAccess" ? " active" : ""}`}>
			<h4 className="modal-fast-access__title">Игры</h4>
			<p className="modal-fast-access__sub-title">Топ - 18 популярных, с высоким рейтингом</p>
			<FastAccessListWithMessageWithLoading />
		</div>
	)
}

ModalFastAccessStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalFastAccessStore
