import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Spinner from "../common/spinner"
import fakeApi from "../../fakeAPI"
import { Link } from "react-router-dom"
import LiteMessage from "../common/liteMessage"

const ModalWalletStore = ({ targetBtn }) => {
	const [walletDataLinks, setWalletDataLinks] = useState(null)
	const [isLoadingWalletDataLinks, setLoadingWalletDataLinks] = useState(true)
	useEffect(() => {
		fakeApi.getStoreWalletLinks()
			.then(data => setWalletDataLinks(data))
	}, [])
	useEffect(() => {
		if (walletDataLinks) {
			setLoadingWalletDataLinks(false)
		}
	}, [walletDataLinks])
	return (
		<nav className={`navigation-store__wallet-modal modal-wallet${targetBtn === "wallet" ? " active" : ""}`}>
			{
				(isLoadingWalletDataLinks && <Spinner />) ||
				(walletDataLinks.length && <ul className="modal-wallet__list-wallet">
					{walletDataLinks.map(item => <li key={item._id}><img src={`./images/icons/${item.icon}`} alt={item.altIcon} /><Link to={item.path}>{item.title}</Link></li>)}
				</ul>) ||
				<LiteMessage title="В настоящее время кошелек не доступен" offer="Вы сможете воспользоваться им позже" classes="modal-wallet__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />
			}
		</nav>
	)
}

ModalWalletStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalWalletStore
