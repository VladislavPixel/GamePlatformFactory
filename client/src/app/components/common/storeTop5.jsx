import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import ModalStoreTop5 from "../ui/modalStoreTop5"
import StoreTop5GamesList from "../ui/storeTop5GamesList"
// Auxiliary
import { getDataGamesMiddle } from "../../store/games"
import getArrayByConfigStoreTop5 from "../../utils/getArrayByConfigStoreTop5"

const StoreTop5 = ({ classesParent, config }) => {
	// REDUX
	const gamesForStore = useSelector(getDataGamesMiddle())
	// STATE
	const [isShowBtn, setShowBtn] = useState(false)
	const [currentConfig, setCurrentConfig] = useState(config[0])
	const [configModal, setConfigModal] = useState(config.filter((item, i) => i !== 0))
	// HANDLERS
	const handlerClickSelectedBtn = () => setShowBtn(prevState => !prevState)
	const handlerUpdateCurrentConfig = (newConfig) => {
		setShowBtn(prevState => !prevState)
		setConfigModal([
			currentConfig,
			...configModal.filter(el => el._id !== newConfig._id)
		])
		setCurrentConfig(newConfig)
	}
	
	const correctData = getArrayByConfigStoreTop5(gamesForStore, currentConfig)
	return (
		<div className={`${classesParent}__top5 top5-store`}>
			<div className="top5-store__container _container">
				<div className="top5-store__head head-top5">
					<h2 className="head-top5__title">Наш эпичный Top-5</h2>
					<button onClick={handlerClickSelectedBtn} className={"head-top5__selected-btn" + (isShowBtn ? " active" : "")} type="button">{currentConfig.title}</button>
					<ModalStoreTop5 onUpdateCurrentConfig={handlerUpdateCurrentConfig} data={configModal} statusBtnSelected={isShowBtn} />
				</div>
				<StoreTop5GamesList data={correctData} />
			</div>
		</div>
	)
}

StoreTop5.propTypes = {
	classesParent: PropTypes.string.isRequired,
	config: PropTypes.array.isRequired
}

export default StoreTop5
