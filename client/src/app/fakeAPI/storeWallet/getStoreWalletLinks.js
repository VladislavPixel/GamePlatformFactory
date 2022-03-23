const walletStoreLinks = [
	{_id: "replenishTheBalance888", title: "Пополнить счет", path: "/store/replenish-balance", icon: "money.svg", altIcon: "Иконка денег"},
	{_id: "giftBalance789", title: "Подарочный баланс", path: "/store/gift-balance", icon: "giftAccount.svg", altIcon: "Иконка подарочного счета"},
	{_id: "prepaidCard435", title: "Карта предоплаты", path: "/store/prepaid-card", icon: "transferCard.svg", altIcon: "Иконка карты предоплаты"},
	{_id: "historyWallet5453", title: "История твоего кошелька", path: "/store/history-wallet", icon: "wallet.svg", altIcon: "Иконка кошелька"},
	{_id: "supportWallet42", title: "Поддержка твоего кошелька", path: "/store/support-wallet", icon: "supportGear.svg", altIcon: "Иконка шестиренки"}
]

function getStoreWalletLinks() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(walletStoreLinks)
		}, 1500)
	})
}

export default getStoreWalletLinks
