import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Spinner from "../common/spinner"
import fakeApi from "../../fakeAPI"
import { Link } from "react-router-dom"
import LiteMessage from "../common/liteMessage"

const ModalFastAccessStore = ({ targetBtn }) => {
	const [isLoadingDataTop18, setLoadingDataTop18] = useState(true)
	const [dataTop18, setDataTop18] = useState(null)
	useEffect(() => {
		fakeApi.getTopGames()
			.then(data => setDataTop18(data))
	}, [])
	useEffect(() => {
		if (dataTop18) {
			setLoadingDataTop18(false)
		}
	}, [dataTop18])
	return (
		<div className={`navigation-store__fast-access-modal modal-fast-access${targetBtn === "fastAccess" ? " active" : ""}`}>
			<h4 className="modal-fast-access__title">Игры</h4>
			<p className="modal-fast-access__sub-title">Топ - 18 популярных, с высоким рейтингом</p>
			{
				(isLoadingDataTop18 && <Spinner />) ||
				(dataTop18.length && <ul className="modal-fast-access__list-wallet">
					{dataTop18.map(item => <li key={item._id}><Link to="/">{item.title}</Link></li>)}
				</ul>) ||
				<LiteMessage title="В настоящее время быстрый доступ к ТОП - 18 игр недоступен" offer="Вы сможете воспользоваться ими позже" classes="modal-fast-access__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />
			}
		</div>
	)
}

ModalFastAccessStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalFastAccessStore
