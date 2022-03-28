import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import LiteMessage from "../common/liteMessage"
import { getDataTop18Games } from "../../store/games"
import { useSelector } from "react-redux"
import withMessage from "../HOC/withMessage"

const ModalFastAccessStore = ({ targetBtn }) => {
	const dataTop18 = useSelector(getDataTop18Games())
	const FastAccessListWithMessage = withMessage(<ul className="modal-fast-access__list-wallet">{dataTop18.map(item => <li key={item._id}><Link to="/">{item.title}</Link></li>)}</ul>, <LiteMessage title="В настоящее время быстрый доступ к ТОП - 18 игр недоступен" offer="Вы сможете воспользоваться ими позже" classes="modal-fast-access__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />, dataTop18.length)
	return (
		<div className={`navigation-store__fast-access-modal modal-fast-access${targetBtn === "fastAccess" ? " active" : ""}`}>
			<h4 className="modal-fast-access__title">Игры</h4>
			<p className="modal-fast-access__sub-title">Топ - 18 популярных, с высоким рейтингом</p>
			<FastAccessListWithMessage />
		</div>
	)
}

ModalFastAccessStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalFastAccessStore
