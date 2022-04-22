import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Components
import LiteMessage from "../common/liteMessage"
import withLoading from "../HOC/withLoading"
import withMessage from "../HOC/withMessage"
// Auxiliary
import { getIsLoadingWalletLinks, fetchAllDataWalletLinks, getDataWalletLinks } from "../../store/walletLinks"

const ModalWalletStore = ({ targetBtn }) => {
	const dispatch = useDispatch()
	const isLoadingWalletDataLinks = useSelector(getIsLoadingWalletLinks())
	const walletDataLinks = useSelector(getDataWalletLinks())
	useEffect(() => {
		if (isLoadingWalletDataLinks) dispatch(fetchAllDataWalletLinks())
	}, [dispatch, isLoadingWalletDataLinks])
	const ModalWalletLinksWithMessage = withMessage(<ul className="modal-wallet__list-wallet">{walletDataLinks.map(item => <li key={item._id}><img src={`./images/icons/${item.icon}`} alt={item.altIcon} /><Link to={item.path}>{item.title}</Link></li>)}</ul>, <LiteMessage title="В настоящее время кошелек не доступен" offer="Вы сможете воспользоваться им позже" classes="modal-wallet__message" iconPath="sadIcon.svg" alt="Иконка грустного смайлика" />, walletDataLinks.length)
	const ModalWalletLinksWithMessageWithLoading = withLoading(ModalWalletLinksWithMessage, isLoadingWalletDataLinks)
	return (
		<nav className={`navigation-store__wallet-modal modal-wallet${targetBtn === "wallet" ? " active" : ""}`}>
			<ModalWalletLinksWithMessageWithLoading />
		</nav>
	)
}

ModalWalletStore.propTypes = {
	targetBtn: PropTypes.string.isRequired
}

export default ModalWalletStore
